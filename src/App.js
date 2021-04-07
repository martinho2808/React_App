import {
  Switch,
  useRouteMatch,
  useParams,
  Link,
  Route,
} from "react-router-dom";
import Home from "./Home.js";
import Profile from "./Profile.js";
import Welcome from "./Welcome.js";

function App() {
  const link = {
    margin: "20px",
    textDecoration: "none",
  };
  return (
    <div>
      {/* Displayed on the screen */}
      <h2>
        Welcome to the Application Click on the links below to see new 'pages'
      </h2>
      <nav>
        <Link style={link} to="/home">
          Home
        </Link>
        <Link style={link} to="/profile">
          {" "}
          Profile
        </Link>
      </nav>
      <div>
        <h4>Part of landing page</h4>
      </div>
      {/* Not Displayed on the screen */}

      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/profile" component={Profile} />
        <Route path="/" component={Welcome} />
      </Switch>
    </div>
  );
}

export default App;
