import React from 'react';
import { Link } from 'react-router-dom'
import { Row, Col, Image } from 'react-bootstrap';

const AboutMe = () => {
  return (
    <Row className="mb-5">
      <Col md="8">
        <article>
          <h2 className="custom-h2 paragraphFirstLetter underline mb-4">Who I Am</h2>
          <p className="bold paragraphFirstLetter">
            I am a computer science graduate from UMass Lowell. I am passionate about{' '}
            <Link className="link" to="/projects">full stack web developement</Link> and <Link className="link" to="/strength">strength training</Link>.
          </p>
        </article>
      </Col>
      <Col md="4">
        <Image
          fluid
          className="shadow-xl rounded-xl image animate-zoom-in-and-lift"
          src={`${process.env.PUBLIC_URL}/me-portrait.jpg`}
          alt="victor portrait"
        />
      </Col>
    </Row>
  );
};

export default AboutMe;
