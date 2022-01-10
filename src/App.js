import { Routes, Link, Route } from "react-router-dom";
import Home from "./Home.js";
import Profile from "./Profile.js";
import Welcome from "./Welcome.js";
import UserProfile from "./UserProfile.js";
import EditUserProfile from "./EditProfile.js";
import GoBack from './GoBack.js'

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
          /
        </Link>
        <Link style={link} to="/home">
          Home
        </Link>
        <Link style={link} to="/profile">
          Profile
        </Link>
    <GoBack />

      </nav>
      <div>
        <h4>Part of landing page</h4>
      </div>
      {/* Not Displayed on the screen */}
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="home" element={<Home />} />

        <Route path="profile" element={<Profile />}>
          <Route path="editProfile" element={<EditUserProfile />} />
          <Route path="seeProfile" element={<UserProfile name="sam" />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
