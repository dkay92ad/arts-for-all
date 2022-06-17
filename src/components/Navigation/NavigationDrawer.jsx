import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import MenuIcon from "@mui/icons-material/Menu";

import ListItemRenderer from "./ListItemRenderer";
import { navDrawerPrimary, navDrawerSecondary } from "./config";

export default function NavigationDrawer() {
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {navDrawerPrimary.map((text, index) => (
          <ListItemRenderer key={text} name={text} />
        ))}
      </List>
      <Divider />
      <List>
        {navDrawerSecondary.map((text, index) => (
          <ListItemRenderer key={text} name={text} />
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      <React.Fragment key={"right"}>
        <Button onClick={toggleDrawer("right", true)}>
          <MenuIcon />
        </Button>
        <Drawer
          anchor={"right"}
          open={state["right"]}
          onClose={toggleDrawer("right", false)}
        >
          {list("right")}
        </Drawer>
      </React.Fragment>
    </div>
  );
}
