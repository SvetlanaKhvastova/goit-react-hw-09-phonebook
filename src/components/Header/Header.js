import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
import UserMenu from "../UserMenu/UserMenu";
import { authSelectors } from "../../redux/auth";
import s from "./Header.module.css";

export default function Header() {
  const isAuthenticated = useSelector(authSelectors.getIsAuthenticated);

  return (
    <>
      <Navbar bg="dark" expand="lg" variant="dark">
        <Container>
          <Navbar.Brand>Phonebook</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav>
              <NavLink
                exact
                to="/home"
                className={s.navLink}
                activeClassName={s.active}
              >
                Home
              </NavLink>
              {isAuthenticated ? (
                <>
                  <NavLink
                    exact
                    to="/contacts"
                    className={s.navLink}
                    activeClassName={s.active}
                  >
                    Contacts
                  </NavLink>
                  <UserMenu />
                </>
              ) : (
                <div className={s.navContainer}>
                  <NavLink
                    to="/login"
                    className={s.navLink}
                    activeClassName={s.active}
                  >
                    Log in
                  </NavLink>

                  <NavLink
                    to="/signup"
                    className={s.navLink}
                    activeClassName={s.active}
                  >
                    Sign up
                  </NavLink>
                </div>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
