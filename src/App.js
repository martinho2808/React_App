import { Link, Route, Routes } from "react-router-dom";
import Home from "./Home.js";
import Landing from "./Landing.js";
import Profile from "./Profile.js";

function NoMatch() {
  return <div>No page found with that URL</div>;
}

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
        <Link style={link} to="/">
          Landing Page
        </Link>
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
      <div>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/home" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
