import { useEffect, useState } from "react";
import { Card, CardBody, CardTitle, CardText, Button, Container } from "reactstrap";
import LocalPlayer from "./LocalPlayer.tsx";
import { styles, ScoreBoard, Timer } from "./LocalStyles.tsx";
import Ball from "./Ball.tsx";
import { getUserDetails } from "../../../apicalls/ApiFriends.ts";
import { useLoaderData } from "react-router-dom";

// Types
interface User {
  id: number;
  username: string;
}

interface PaddlePosition {
  top: string;
}

interface PaddleState {
  red: PaddlePosition;
  blue: PaddlePosition;
}

interface BallPosition {
  x: string;
  y: string;
}

interface GameData {
  paddles: PaddleState;
  ballPosition: BallPosition;
  player1Score: number;
  player2Score: number;
  minutes: number;
  seconds: number;
  overlayMessage: string;
}

// Constants
const CONTROL_KEYS = ["w", "s", "o", "l"];

// Custom hook for WebSocket management
const useGameWebSocket = (username: string) => {
  const [ws, setWs] = useState<WebSocket>();
  const [gameData, setGameData] = useState<GameData>({
    paddles: {
      red: { top: "40%" },
      blue: { top: "40%" },
    },
    ballPosition: { x: "50%", y: "50%" },
    player1Score: 0,
    player2Score: 0,
    minutes: 0,
    seconds: 1,
    overlayMessage: "",
  });
  const [roomState, setRoomState] = useState("1"); // 1: Menu, 2: Game

  useEffect(() => {
    const userString = username || "guest";
    const wsUrl = `${import.meta.env.VITE_CN_WS_URL}/ws/localgame/${userString}/`;
    const newWs = new WebSocket(wsUrl);

    newWs.onopen = () => {
      setWs(newWs);
    };

    newWs.onmessage = (message) => {
      const data = JSON.parse(message.data);

      if (data.type === "paddle_update") {
        setGameData(prev => ({
          ...prev,
          paddles: {
            red: { top: `${data.paddles.red.top}%` },
            blue: { top: `${data.paddles.blue.top}%` },
          }
        }));
      } else if (data.type === "ball_update") {
        setGameData(prev => ({
          ...prev,
          ballPosition: {
            x: `${data.ball.x}%`,
            y: `${data.ball.y}%`,
          }
        }));
      } else if (data.type === "interval_update") {
        setGameData(prev => ({
          ...prev,
          player1Score: data.player1_score,
          player2Score: data.player2_score,
          minutes: data.minutes,
          seconds: data.seconds,
        }));
      } else if (data.type === "overlay_update") {
        if (data.message === "MENU") {
          setGameData(prev => ({
            ...prev,
            overlayMessage: "!"
          }));
          setRoomState("1");
        } else {
          setGameData(prev => ({
            ...prev,
            overlayMessage: data.message
          }));
        }
      }
    };

    newWs.onclose = () => {
      setWs(undefined);
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      const key = event.key.toLowerCase();
      if (CONTROL_KEYS.includes(key) && newWs.readyState === WebSocket.OPEN) {
        newWs.send(JSON.stringify({ type: "keydown", key }));
      }
    };

    const handleKeyUp = (event: KeyboardEvent) => {
      const key = event.key.toLowerCase();
      if (CONTROL_KEYS.includes(key) && newWs.readyState === WebSocket.OPEN) {
        newWs.send(JSON.stringify({ type: "keyup", key }));
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
      if (newWs.readyState === WebSocket.OPEN) {
        newWs.close();
      }
    };
  }, [username]);

  const startGame = () => {
    if (ws && ws.readyState === WebSocket.OPEN) {
      ws.send(JSON.stringify({ type: "start_game" }));
      setRoomState("2");
    }
  };

  return {
    ws,
    gameData,
    roomState,
    startGame
  };
};

// UI Components
const GameMenu = ({ onStart }: { onStart: () => void }) => (
  <Container
    className="h-100 overflow-auto"
    style={{
      maxWidth: "95%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      minHeight: "80vh"
    }}
  >
    <div className="imageContainer" style={{
      position: "relative",
      maxWidth: "900px",
      margin: "0 auto"
    }}>
      <Button color="info" className="absoluteButton" onClick={onStart}>
        Start
      </Button>
      <img
        src="/LocalMenu.png"
        alt="Squirtle playing table tennis"
        className="leftImage"
        style={{ width: "100%", height: "auto", borderRadius: "10px" }}
      />

      <div
        style={{
          position: "absolute",
          top: "80%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          backgroundColor: "rgba(0, 0, 0, 0.7)",
          padding: "12px",
          borderRadius: "8px",
          color: "white",
          maxWidth: "40%",
          fontSize: "0.95rem",
          zIndex: 1
        }}
      >
        <h5 style={{ fontSize: "1.2rem", marginBottom: "8px" }}>Pong Rules:</h5>
        <p style={{ marginBottom: "6px" }}>The first player to 11 points, or with the most points when the time runs out wins!</p>
        <p style={{ marginBottom: "6px" }}>
          <b className="text-danger">Red</b> player controls: W (up), S (down).
        </p>
        <p style={{ marginBottom: "6px" }}>
          <b className="text-info">Blue</b> player controls: O (up), L (down).
        </p>
      </div>
    </div>
  </Container>
);

const GameBoard = ({ gameData }: { gameData: GameData }) => (
  <div className="pongArea">
    <div
      className="overlay"
      style={{ visibility: gameData.overlayMessage && gameData.overlayMessage !== "!" ? "visible" : "hidden" }}
    >
      {gameData.overlayMessage}
    </div>
    <div className="middleLine"></div>
    <div className="centerCircle"></div>
    <LocalPlayer key="1" color="red" left="2" top={gameData.paddles.red.top} />
    <LocalPlayer key="2" color="blue" left="93" top={gameData.paddles.blue.top} />
    <Ball left={gameData.ballPosition.x} top={gameData.ballPosition.y} />
    <ScoreBoard leftScore={gameData.player1Score} rightScore={gameData.player2Score} />
    <Timer minutes={gameData.minutes} seconds={gameData.seconds} />
  </div>
);

// Loader function
export const loader = async () => {
  const user = JSON.parse(localStorage.getItem("user") || "{}");
  if (user) {
    const userDetails = await getUserDetails(user.username);
    return userDetails;
  }
  return null;
};

// Main component
const LocalGame = () => {
  const user = useLoaderData() as User;
  const { gameData, roomState, startGame } = useGameWebSocket(user?.username);

  return (
    <>
      {roomState === "1" && <GameMenu onStart={startGame} />}
      {roomState === "2" && <GameBoard gameData={gameData} />}
    </>
  );
};

export default LocalGame;
