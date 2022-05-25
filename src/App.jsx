import "./styled.js";
import "common/styles/application.scss";
import Home from "./components/Home";
import StartLearning from "./components/StartLearning";
import Navigation from './components/Navigation';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppContainer } from "./styled";

function App() {
  return (
    <BrowserRouter>
      <AppContainer>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="start-learning" element={<StartLearning />} />
        </Routes>
      </AppContainer>
    </BrowserRouter>
  );
}

export default App;
