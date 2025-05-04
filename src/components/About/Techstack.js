import React from 'react';
import { Col, Row } from 'react-bootstrap';
import html5 from '../../Assets/technologies/html.png';
import css from '../../Assets/technologies/css.png';
import sass from '../../Assets/technologies/sass.png';
import javascript from '../../Assets/technologies/javascript.png';
import jquery from '../../Assets/technologies/jquery.png';
import react from '../../Assets/technologies/react.png';
import bootstrap from '../../Assets/technologies/bootstrap.png';
import tailwind from '../../Assets/technologies/tailwind.png';
import git from '../../Assets/technologies/git.png';
import github from '../../Assets/technologies/github.png';
import photoshop from '../../Assets/technologies/photoshop.png';
import figma from '../../Assets/technologies/figma.png';

// import {
//   DiJavascript1,
//   DiReact,
//   DiNodejs,
//   DiMongodb,
//   DiPython,
//   DiGit,
//   DiJava,
// } from 'react-icons/di';
// import {
//   SiRedis,
//   SiFirebase,
//   SiNextdotjs,
//   SiSolidity,
//   SiPostgresql,
// } from 'react-icons/si';
// import { TbBrandGolang } from 'react-icons/tb';

function Techstack() {
  return (
    <Row style={{ justifyContent: 'center', paddingBottom: '50px' }}>
      <Col
        xs={4}
        md={2}
        className='tech-icons'
        style={{ boxShadow: '0 0px 30px rgb(205 106 8 / 64%) !important' }}
      >
        <img src={html5} style={{ maxWidth: '80px' }} />
        <p style={{ fontSize: '18px' }}>HTML</p>
      </Col>
      <Col
        xs={4}
        md={2}
        className='tech-icons'
        style={{ boxShadow: '0 0px 30px rgb(205 106 8 / 64%) !important' }}
      >
        <img src={css} style={{ maxWidth: '80px' }} />
        <p style={{ fontSize: '18px' }}>CSS</p>
		  </Col>
		  <Col
        xs={4}
        md={2}
        className='tech-icons'
        style={{ boxShadow: '0 0px 30px rgb(205 106 8 / 64%) !important' }}
      >
        <img src={sass} style={{ maxWidth: '80px' }} />
        <p style={{ fontSize: '18px' }}>SASS</p>
		  </Col>
		  <Col
        xs={4}
        md={2}
        className='tech-icons'
        style={{ boxShadow: '0 0px 30px rgb(205 106 8 / 64%) !important' }}
      >
        <img src={javascript} style={{ maxWidth: '80px' }} />
        <p style={{ fontSize: '18px' }}>JavaScript</p>
		  </Col>
		  <Col
        xs={4}
        md={2}
        className='tech-icons'
        style={{ boxShadow: '0 0px 30px rgb(205 106 8 / 64%) !important' }}
      >
        <img src={jquery} style={{ maxWidth: '80px' }} />
        <p style={{ fontSize: '18px' }}>jQuery</p>
		  </Col>
		  <Col
        xs={4}
        md={2}
        className='tech-icons'
        style={{ boxShadow: '0 0px 30px rgb(205 106 8 / 64%) !important' }}
      >
        <img src={react} style={{ maxWidth: '80px' }} />
        <p style={{ fontSize: '18px' }}>React</p>
		  </Col>
		  <Col
        xs={4}
        md={2}
        className='tech-icons'
        style={{ boxShadow: '0 0px 30px rgb(205 106 8 / 64%) !important' }}
      >
        <img src={bootstrap} style={{ maxWidth: '80px' }} />
        <p style={{ fontSize: '18px' }}>Bootstrap</p>
		  </Col>
		  <Col
        xs={4}
        md={2}
        className='tech-icons'
        style={{ boxShadow: '0 0px 30px rgb(205 106 8 / 64%) !important' }}
      >
        <img src={tailwind} style={{ maxWidth: '80px' }} />
        <p style={{ fontSize: '18px' }}>Tailwind CSS</p>
		  </Col>
		  <Col
        xs={4}
        md={2}
        className='tech-icons'
        style={{ boxShadow: '0 0px 30px rgb(205 106 8 / 64%) !important' }}
      >
        <img src={git} style={{ maxWidth: '80px' }} />
        <p style={{ fontSize: '18px' }}>Git</p>
		  </Col>
		  <Col
        xs={4}
        md={2}
        className='tech-icons'
        style={{ boxShadow: '0 0px 30px rgb(205 106 8 / 64%) !important' }}
      >
        <img src={github} style={{ maxWidth: '80px' }} />
        <p style={{ fontSize: '18px' }}>Github</p>
		  </Col>
		  <Col
        xs={4}
        md={2}
        className='tech-icons'
        style={{ boxShadow: '0 0px 30px rgb(205 106 8 / 64%) !important' }}
      >
        <img src={photoshop} style={{ maxWidth: '80px' }} />
        <p style={{ fontSize: '18px' }}>Photoshop</p>
		  </Col>
		  <Col
        xs={4}
        md={2}
        className='tech-icons'
        style={{ boxShadow: '0 0px 30px rgb(205 106 8 / 64%) !important' }}
      >
        <img src={figma} style={{ maxWidth: '80px' }} />
        <p style={{ fontSize: '18px' }}>Figma</p>
      </Col>
    </Row>
  );
}

export default Techstack;
