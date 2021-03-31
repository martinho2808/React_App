import Questioner from "./Components/Exercise/Questioner";
import LeaderBoard from "./Components/Exercise/LeaderBoard";

export default function App() {
  return (
    <>
      <h3>Here are the exercises</h3>
      <Questioner question="What is your favourite color?" />
      <LeaderBoard />
    </>
  );
}
