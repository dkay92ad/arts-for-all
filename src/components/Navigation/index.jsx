import * as React from "react";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { Button } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { routes } from "common/config";
import { NavigationContainer, NavLinks, ListItem, Logo } from "./styled";
import NavigationDrawer from "./NavigationDrawer";

function NavList() {
  const location = useLocation();
  const isHome = location.pathname === routes.HOME;
  // This styling will be applied to a <NavLink> when the
  // route that it links to is currently selected.
  let activeStyle = {
    textDecoration: "underline",
  };

  let activeClassName = "underline";
  return (
    <NavigationContainer isHome={isHome}>
      <NavLink
        to={routes.HOME}
        className={({ isActive }) => (isActive ? activeClassName : undefined)}
        id="logo"
      >
        <Logo src="/images/afa_logo.jpg" />
      </NavLink>
      <nav>
        <NavLinks>
          {/* <ListItem>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? activeClassName : undefined
              }
            >
              Home
            </NavLink>
          </ListItem>

          <ListItem>
            <NavLink to="/about">
              {({ isActive }) => (
                <span className={isActive ? activeClassName : undefined}>
                  About
                </span>
              )}
            </NavLink>
          </ListItem> */}
          {isHome && (
            <ListItem id={routes.STUDENT}>
              <NavLink to={`${routes.HOME}${routes.STUDENT}`}>
                <Button variant="text">Student</Button>
              </NavLink>
            </ListItem>
          )}
          {isHome && (
            <ListItem id={routes.TEACHER}>
              <NavLink to={`${routes.HOME}${routes.TEACHER}`}>
                <Button variant="text">Teacher</Button>
              </NavLink>
            </ListItem>
          )}
          <ListItem>
            <NavigationDrawer />
          </ListItem>
        </NavLinks>
      </nav>
    </NavigationContainer>
  );
}

export default NavList;
