import React from "react";
import { NavLink } from "react-router-dom";
import { Button } from "@mui/material";
import { ContentContainer } from "common/components/StyledComponents";

const NotFound = () => {
  return (
    <ContentContainer>
      <img
        src="/images/not_found.svg"
        style={{ height: "75%", width: "100%" }}
      />
      <h2>Not Found</h2>
      <NavLink to="/">
        <Button variant="text">Go back to home page</Button>
      </NavLink>
    </ContentContainer>
  );
};

export default NotFound;
