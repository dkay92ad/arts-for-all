import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "common/styles/application.scss";
import "./styled.js";
import { routes } from "common/config";
import Navigation from "./components/Navigation";
import { AppContainer } from "./styled";

const ComingSoon = lazy(() => import("common/components/Coming-soon"));
const NotFound = lazy(() => import("common/components/Not-found"));
const Home = lazy(() => import("./components/Home"));
const Student = lazy(() => import("./components/Student"));
const Teacher = lazy(() => import("./components/Teacher"));
const About = lazy(() => import("./components/About"));

function App() {
  return (
    <BrowserRouter>
      <AppContainer>
        <Navigation />
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path={routes.HOME} element={<Home />} />
            <Route path={routes.STUDENT} element={<Student />} />
            <Route path={routes.TEACHER} element={<Teacher />} />
            <Route path={routes.HELP} element={<ComingSoon />} />
            <Route path={routes.ABOUT} element={<About />} />
            <Route path={routes.CONTACT_US} element={<ComingSoon />} />
            <Route path={routes.NOT_FOUND} element={<NotFound />} />
            <Route path="*" element={<Navigate to={routes.NOT_FOUND} />} />
          </Routes>
        </Suspense>
      </AppContainer>
    </BrowserRouter>
  );
}

export default App;
