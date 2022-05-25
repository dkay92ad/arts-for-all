import { NavLink } from "react-router-dom";
import { Button } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { Outlet } from "react-router-dom";
import {
  HomeContainer,
  Cover,
  CoverContentBox,
  CoverContentHeader,
  CoverContent,
} from "./styled";
import { ContentContainer } from "common/components/StyledComponents";
function Home() {
  return (
    <ContentContainer>
      <HomeContainer>
        <Cover src="/images/cover.webp" />
        <CoverContentBox>
          <CoverContentHeader>Arts For All.</CoverContentHeader>
          <CoverContent>
            Making quality fine arts education accessible to all.
          </CoverContent>
        </CoverContentBox>
        <NavLink to="/start-learning">
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
