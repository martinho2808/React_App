import { useNavigate } from "react-router-dom";
const GoBack = () => {
  const navigate = useNavigate();

  return (
    <div>
      <button onClick={() => navigate(-1)}>Back once</button>
    </div>
  );
};

export default GoBack;
