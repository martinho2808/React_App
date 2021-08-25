import React from "react";
import { connect } from "react-redux";
import { AddStudent, DeleteStudent } from "../Redux/class/actions";

class PureClassList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      student: "Insert Student name here",
    };
  }

  handleChange(e) {
    this.setState({
      student: e.currentTarget.value,
    });
  }

  render() {
    console.log(this.props.class);
    return (
      <>
        <input
          type="text"
          value={this.state.student}
          onChange={(e) => this.handleChange(e)}
        />
        <br />
        <button onClick={() => this.props.addStudentMDP(this.state.student)}>
          Add Student
        </button>
        <h3>Class:</h3>
        {this.props.class.map((student, i) => (
          <div key={i}>
            <div>{student}</div>{" "}
            <button onClick={() => this.props.deleteStudentMDP(student)}>
              Delete student
            </button>
          </div>
        ))}
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    class: state.studentStore.students,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addStudentMDP: (student) => dispatch(AddStudent(student)),
    deleteStudentMDP: (index) => dispatch(DeleteStudent(index)),
  };
};

export const ClassList = connect(
  mapStateToProps,
  mapDispatchToProps
)(PureClassList);
