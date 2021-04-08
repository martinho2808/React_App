import FormComponentPage from "./Pages/FormComponentPage";
import LeaderBoard from "./Pages/LeaderBoardPage";
import LifeCycleMethodPage from "./Pages/LifeCycleMethodPage";
import QuestionerPage from "./Pages/QuestionerPage";

import { Route, Switch, Link } from "react-router-dom";

export default function App() {
  return (
    <>
      <div>
        <Link to="/"> HomePage </Link>
        <Link to="/LeaderBoard">LeaderBoard</Link>
        <Link to="LifeCycleMethodPage"> LifeCycleMethod</Link>
        <Link to="Questioner">Questioner</Link>
        <Link to="FormComponentPage">Forms</Link>
      </div>
    </>
  );
}
