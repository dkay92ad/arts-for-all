import styled from "styled-components";

export const NavigationContainer = styled.div`
  height: 20vh;
  display: flex;
  justify-content: space-between;
  position: relative;
  z-index: 2;
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
  &#start-learning {
    display: none; /* This is how it looks on mobile */
  }

  @media (min-width: 600px) {
    &#start-learning {
      display: block; /* This is how it looks on desktop */
    }
  }
`;

export const Logo = styled.img`
  height: 100%;
`;
