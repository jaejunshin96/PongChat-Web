import { Card, CardImg, CardImgOverlay, CardTitle } from "reactstrap";
import teamImage from "../../assets/team.png"
import { CSSProperties } from "react";

const cardStyles: CSSProperties = {
  backgroundColor: 'black',
  minHeight: '100vh',
  height: '100%',
  width: '100%',
  margin: 0,
  padding: 0,
  border: 'none',
  borderRadius: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',
  overflow: 'hidden'
};

const titleStyles: CSSProperties = {
  width: '100%',
  textAlign: 'center',
  fontSize: '2.5rem',
  fontWeight: 'bold',
  color: 'white',
  textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)'
};

export default function Index() {
  return (
    <Card className="h-100" style={cardStyles}>
		{/*<CardImg src={teamImage} alt="team picture" className="h-100 w-100"/>*/}
		<div>
			<CardTitle className="text-light" style={titleStyles}>
				Welcome to Transcendence
			</CardTitle>
		</div>
    </Card>
  );
}
