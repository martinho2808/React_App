import React from "react";
import Questioner from "../Components/Exercise/Questioner.js";

export default class QuestionerPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      answer: "",
    };
  }

  render() {
    return (
      <>
        <Questioner question="What is your favourite food?" />
      </>
    );
  }
}
