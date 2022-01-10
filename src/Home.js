import house from "./house.jpg";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Home(props) {
  const navigate = useNavigate();
  const [hovered, setHovered] = useState(0);

  return (
    <div>
      <h3>No page like home.</h3>
      <img
        src={house}
        alt="house"
        onMouseEnter={() => setHovered(hovered + 1)}
      />
      <h2>{hovered}</h2>
      <button onClick={() => navigate("/profile/seeProfile")}>
        Goto Profile
      </button>
    </div>
  );
}
