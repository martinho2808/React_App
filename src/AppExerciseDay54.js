import FormComponentPage from "./Pages/FormComponentPage";
import LeaderBoardPage from "./Pages/LeaderBoardPage";
import LifeCycleMethodPage from "./Pages/LifeCycleMethodPage";
import QuestionerPage from "./Pages/QuestionerPage";
import WelcomePage from "./Pages/WelcomePage";
import TimerPage from "./Pages/TimerPage";
import GoBack from "./Components/GoBack";

import { Route, Switch, Link } from "react-router-dom";

export default function App() {
  const LinkStyle = {
    margin: "20px",
    fontWeight: "bold",
    color: "#000000",
  };
  return (
    <>
      <div>
        <Link style={LinkStyle} to="/">
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
        <Switch>
          <Route exact path="/" component={WelcomePage} />
          <Route path="/LeaderBoard" component={LeaderBoardPage} />
          <Route path="/LifeCycleMethod" component={LifeCycleMethodPage} />
          <Route path="/Questioner" component={QuestionerPage} />
          <Route path="/FormComponent" component={FormComponentPage} />
          <Route path="/Timer" component={TimerPage} />
        </Switch>
      </div>
    </>
  );
}
