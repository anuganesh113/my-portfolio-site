import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiSlack,
  SiVercel,
  SiMacos,
} from "react-icons/si";
import windows from '../../Assets/tools/windows.png'
import vscode from '../../Assets/tools/vscode.png'
import slack from '../../Assets/tools/slack.png'
import netlify from '../../Assets/tools/netlify.png'

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
	  	<img src={windows} style={{ maxWidth: '80px' }} />
        <p style={{ fontSize: '18px' }}>Windows OS</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
	  <img src={vscode} style={{ maxWidth: '80px' }} />
        <p style={{ fontSize: '18px' }}>Visual Studio Code</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
	  <img src={slack} style={{ maxWidth: '80px' }} />
        <p style={{ fontSize: '18px'}}>Slack</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
	  <img src={netlify} style={{ maxWidth: '80px' }} />
        <p style={{ fontSize: '18px' }}>Netlify</p>
      </Col>
    </Row>
  );
}

export default Toolstack;
