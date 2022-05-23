import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import Header from './header';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  const links = ['about me', 'projects'];

  return (
    <div className="bg-nero pb-3 mb-5 shadow-lg">
      <div className="container">
        <Header>Victor Espaillat</Header>
        <Navbar expand="md">
          <Navbar.Toggle
            className="mx-auto bg-light"
            aria-controls="basic-navbar-nav"
          >
            <i className="fa fa-angle-double-down" aria-hidden="true" />
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav" className="mx-auto">
            <Nav className="mr-auto">
              {links.map(link => (
                <NavLink
                  key={link}
                  className="link nav-item"
                  activeClassName="active-link"
                  to={`/${link.replace(/\s/g, '').toLowerCase()}`}
                >
                  {`${link}.`}
                </NavLink>
              ))}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </div>
  );
};

export default NavBar;
