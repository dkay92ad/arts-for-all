import styled from "styled-components";

export const NavigationContainer = styled.div`
  height: 10%;
  display: flex;
  justify-content: space-between;
  position: sticky;
  background: ${(props) => (props.isHome ? "inherit" : "white")};
  box-shadow: ${(props) => (props.isHome ? "inherit" : "-3px -3px 8px 0px black")};
  z-index: 2;
  #logo {
    height: 100%;
    width: 5em
  }
`;

export const NavLinks = styled.ul`
  display: inline-flex;
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const ListItem = styled.li`
  display: inline-flex;
  list-style: none;
  line-height: 2rem;
  margin: 10px;
  padding: 5px;
  &#start-teaching, &#start-learning {
    display: none; /* This is how it looks on mobile */
  }

  @media (min-width: 600px) {
    &#start-teaching, &#start-learning {
      display: block; /* This is how it looks on desktop */
    }
  }
`;

export const Logo = styled.img`
  margin: 10px;
  height: 75%;
`;
