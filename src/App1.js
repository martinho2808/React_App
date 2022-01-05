import { JSXelement } from "./JSXelements/JSXelement";
import { JSXExercise } from "./JSXelements/JSXExercise";
import { Button } from "react-bootstrap";

export default function App1() {
  return (
    <>
      <button className="btn btn-primary">Hello</button>
      <Button variant="danger">Hello 2</Button>
      {JSXelement}
      {JSXExercise}
    </>
  );
}
