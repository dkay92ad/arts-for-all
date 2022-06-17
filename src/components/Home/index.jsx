import { NavLink, useLocation } from "react-router-dom";
import { Button } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { routes } from "common/config";
// import { Outlet } from "react-router-dom";
import {
  HomeContainer,
  Cover,
  CoverContentBox,
  CoverContentHeader,
  CoverContent,
} from "./styled";
import { ContentContainer } from "common/components/StyledComponents";
function Home() {
  const location = useLocation();
  const isHome = location.pathname === routes.HOME;
  return (
    <ContentContainer isHome={isHome}>
      <HomeContainer>
        <Cover src="/images/cover.webp" />
        <CoverContentBox>
          <CoverContentHeader>Arts For All.</CoverContentHeader>
          <CoverContent>
            Making quality fine arts education accessible to all.
          </CoverContent>
        </CoverContentBox>
        <NavLink to={`${routes.HOME}${routes.STUDENT}`}>
          <Button variant="contained" endIcon={<SendIcon />}>
            Start Learning
          </Button>
        </NavLink>
        {/* <Outlet /> */}
      </HomeContainer>
    </ContentContainer>
  );
}

export default Home;
