import * as React from "react";
import { NavLink } from "react-router-dom";
import { Button } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { NavigationContainer, NavLinks, ListItem, Logo } from "./styled";
import TemporaryDrawer from "./NavigationDrawer";
function NavList() {
  // This styling will be applied to a <NavLink> when the
  // route that it links to is currently selected.
  let activeStyle = {
    textDecoration: "underline",
  };

  let activeClassName = "underline";

  return (
    <NavigationContainer>
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? activeClassName : undefined)}
      >
        <Logo src="/images/afa_logo.png" />
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
          <ListItem id="start-learning">
            <NavLink
              to="/start-learning"
            >
              <Button
                variant="contained"
                endIcon={<SendIcon />}
              >
                Start Learning
              </Button>
            </NavLink>
          </ListItem>
          <ListItem>
            <TemporaryDrawer />
          </ListItem>
        </NavLinks>
      </nav>
    </NavigationContainer>
  );
}

export default NavList;
