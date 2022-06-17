import React from "react";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import SchoolIcon from "@mui/icons-material/School";
import EmojiPeopleIcon from "@mui/icons-material/EmojiPeople";
import HelpIcon from "@mui/icons-material/Help";
import InfoIcon from "@mui/icons-material/Info";
import CallIcon from "@mui/icons-material/Call";
import { NavLink } from "react-router-dom";
import { routes } from "common/config";

import uiText from "common/config/uiText";

function routeGenerator(name) {
  switch (name) {
    case uiText.STUDENT:
      return `${routes.HOME}${routes.STUDENT}`;
    case uiText.TEACHER:
      return `${routes.HOME}${routes.TEACHER}`;
    case uiText.HELP:
      return `${routes.HOME}${routes.HELP}`;
    case uiText.ABOUT:
      return `${routes.HOME}${routes.ABOUT}`;
    case uiText.CONTACT_US:
      return `${routes.HOME}${routes.CONTACT_US}`;
    default:
      return `${routes.HOME}${routes.NOT_FOUND}`;
  }
}

function iconRenderer(name) {
  switch (name) {
    case uiText.STUDENT:
      return <SchoolIcon />;
    case uiText.TEACHER:
      return <EmojiPeopleIcon />;
    case uiText.HELP:
      return <HelpIcon />;
    case uiText.ABOUT:
      return <InfoIcon />;
    case uiText.CONTACT_US:
      return <CallIcon />;
    default:
      return null;
  }
}

function ListItemRenderer({ name }) {
  return (
    <NavLink
      to={routeGenerator(name)}
      // className={({ isActive }) => (isActive ? activeClassName : undefined)}
      // id="logo"
    >
      <ListItem disablePadding>
        <ListItemButton>
          <ListItemIcon>{iconRenderer(name)}</ListItemIcon>
          <ListItemText primary={name} />
        </ListItemButton>
      </ListItem>
    </NavLink>
  );
}

export default ListItemRenderer;
