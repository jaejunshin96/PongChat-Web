import { Container, Row, Col } from "reactstrap";
import { Outlet } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useMediaQuery } from "react-responsive";
import MobileNav from "./mobileNav";
import DesktopNav from "./desktopNav";
import "./game.css"
import { CSSProperties } from "react";

// Add a style block to handle the full-page background
const sidebarStyles: {
  container: CSSProperties;
  row: CSSProperties;
} = {
  container: {
    backgroundColor: 'black',
    minHeight: '100vh',
    width: '100%',
    padding: 0,
    margin: 0,
    overflowX: 'hidden',
    position: 'relative',
  },
  row: {
    margin: 0,
    height: '100%',
  }
};

export default function SideBar() {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  return (
    <Container
      fluid
      className="bg-black"
      style={sidebarStyles.container}
    >
      <Row className="h-100" style={sidebarStyles.row}>
        {isMobile ? (
          <>
            <Col style={{ height: "16%" }}>
              <MobileNav></MobileNav>
            </Col>

            <Col xs="12" style={{ height: "84%" }}>
              <Outlet></Outlet>
            </Col>
          </>
        ) : (
          // desktop
          <>
            <Col md="auto" className="vh-100 border border-dark border-0 border-end">
              <DesktopNav></DesktopNav>
            </Col>
            <Col className="vh-100">
              <Outlet></Outlet>
            </Col>
          </>
        )}
      </Row>
    </Container>
  );
}
