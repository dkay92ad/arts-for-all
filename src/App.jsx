import "./styled.js";
import "common/styles/application.scss";
import ComingSoon from "common/components/Coming-soon";
import NotFound from "common/components/Not-found";
import { routes } from "common/config";
import Home from "./components/Home";
import Student from "./components/Student";
import Teacher from "./components/Teacher";
import Navigation from "./components/Navigation";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AppContainer } from "./styled";

function App() {
  return (
    <BrowserRouter>
      <AppContainer>
        <Navigation />
        <Routes>
          <Route path={routes.HOME} element={<Home />} />
          <Route path={routes.STUDENT} element={<Student />} />
          <Route path={routes.TEACHER} element={<Teacher />} />
          <Route path={routes.HELP} element={<ComingSoon />} />
          <Route path={routes.ABOUT} element={<ComingSoon />} />
          <Route path={routes.CONTACT_US} element={<ComingSoon />} />
          <Route path={routes.NOT_FOUND} element={<NotFound />} />
          <Route path="*" element={<Navigate to={routes.NOT_FOUND} />} />
        </Routes>
      </AppContainer>
    </BrowserRouter>
  );
}

export default App;
