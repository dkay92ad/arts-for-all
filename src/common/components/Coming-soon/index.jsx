import React from "react";
import { NavLink } from "react-router-dom";
import { Button } from "@mui/material";
import { ContentContainer } from "common/components/StyledComponents";

const ComingSoon = () => {
  return (
    <ContentContainer>
      <img
        src="/images/coming_soon.svg"
        style={{ height: "75%", width: "100%" }}
      />
      <h2>Coming Soon.</h2>
      <p>Something awesome is in the work.</p>
      <NavLink to="/">
        <Button variant="text">Go back to home page</Button>
      </NavLink>
    </ContentContainer>
  );
};

export default ComingSoon;
