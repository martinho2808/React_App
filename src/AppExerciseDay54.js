import FormComponentPage from "./Pages/FormComponentPage";
import LeaderBoardPage from "./Pages/LeaderBoardPage";
import LifeCycleMethodPage from "./Pages/LifeCycleMethodPage";
import QuestionerPage from "./Pages/QuestionerPage";
import WelcomePage from "./Pages/WelcomePage";
import TimerPage from "./Pages/TimerPage";
import GoBack from "./Components/GoBack";
import { DefinedUserPage, Page, DefinedInfoPage } from "./Pages/WelcomePage";

import { Route, Routes, Link } from "react-router-dom";

export default function App() {
  const LinkStyle = {
    margin: "20px",
    fontWeight: "bold",
    color: "#000000",
  };
  return (
    <>
      <div>
        <Link style={LinkStyle} to="/welcome">
          HomePage
        </Link>
        <Link style={LinkStyle} to="/LeaderBoard">
          LeaderBoard
        </Link>
        <Link style={LinkStyle} to="LifeCycleMethod">
          LifeCycleMethod
        </Link>
        <Link style={LinkStyle} to="Questioner">
          Questioner
        </Link>
        <Link style={LinkStyle} to="FormComponent">
          Forms
        </Link>
        <Link style={LinkStyle} to="Timer">
          Timer
        </Link>
        <GoBack />
      </div>

      <div>
        <Routes>
          <Route path="/" element={LandingPage} />
          <Route path="welcome" element={<WelcomePage />}>
            <Route path="userPage" element={<DefinedUserPage />} />
            <Route path="infoPage" element={<DefinedInfoPage />} />
            <Route path=":page" element={<Page />} />
          </Route>
          <Route path="/LeaderBoard" element={<LeaderBoardPage />} />
          <Route path="/LifeCycleMethod" element={<LifeCycleMethodPage />} />
          <Route path="/Questioner" element={<QuestionerPage />} />
          <Route path="/FormComponent" element={<FormComponentPage />} />
          <Route path="/Timer" element={<TimerPage />} />
          <Route
            path="*"
            element={() => {
              return (
                <div>
                  <h1 className="text-danger">Error</h1>
                </div>
              );
            }}
          />
        </Routes>
      </div>
    </>
  );
}

function LandingPage() {
  return (
    <div>
      <h1>Landing Here</h1>
    </div>
  );
}
