import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import ProjectCard from './projectCard';
import Loader from './common/loader';
import axios from 'axios';

class ProjectList extends Component {
  state = { projsLoading: true, tutsLoading: true, projects: [], tutProjs: [] };

  parseProjData = projects => {
    return projects
      .map(project => {
        let cpy = { ...project };
        cpy.imgData = new Buffer(project.data.data).toString('base64');
        cpy.created = new Date(project.created);
        delete cpy.data;
        return cpy;
      })
      .sort((a, b) => {
        return b.created - a.created;
      });
  };

  async componentDidMount() {
    const baseURL = 'https://portfolio-api-01251996.herokuapp.com/api';
    // const baseURL = 'http://localhost:3001/api';

    const { data: projData } = await axios.get(`${baseURL}/projects`);
    const projects = this.parseProjData(projData);
    this.setState({ projsLoading: false, projects });

    const { data: tutProjData } = await axios.get(`${baseURL}/tutorials`);
    const tutProjs = this.parseProjData(tutProjData);
    this.setState({ tutsLoading: false, tutProjs });
  }

  render() {
    const { projsLoading, tutsLoading, projects, tutProjs } = this.state;

    const projsJSX = projects.map((project, index) => (
      <Col key={index} md="4" className="mb-4">
        <ProjectCard key={index} {...project} />
      </Col>
    ));

    const tutProjsJSX = tutProjs.map((project, index) => (
      <Col key={index} md="3" className="mb-4">
        <ProjectCard key={index} {...project} />
      </Col>
    ));

    return (
      <>
        <Row className="mt-5">
          <Col md="12" className="text-center">
            <h2 className="bold paragraphFirstLetter underline mb-4">Projects</h2>
          </Col>
          {projsLoading ? <Loader /> : projsJSX}
        </Row>
        <Row className="mt-5">
          <Col md="12" className="text-center">
            <h2 className="bold paragraphFirstLetter underline mb-4">Completed Tutorials</h2>
          </Col>
          {tutsLoading ? <Loader /> : tutProjsJSX}
        </Row>
      </>
    );
  }
}

export default ProjectList;
