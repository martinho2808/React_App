// Hook based functional component with Redux hooks
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  AddStudent,
  DeleteStudent,
  ClearStudent,
  EditStudent,
} from "../Redux/class/actions";

export const ClassList = (props) => {
  const [student, setStudent] = useState("");
  const studentsFromRedux = useSelector((state) => state.studentStore.students);
  const peopleFromRedux = useSelector((state) => state.peopleStore.people);

  const dispatch = useDispatch();

  console.log(peopleFromRedux);
  return (
    <div>
      <label>Student</label>
      <br />
      <input
        type="text"
        value={student}
        placeholder="Insert Student Name"
        onChange={(e) => setStudent(e.target.value)}
      />
      <br />
      <button
        onClick={() => {
          console.log("from component:", student);
          dispatch(AddStudent(student));
          setStudent("");
        }}
      >
        Add Student
      </button>

      <br />

      <h2> Students </h2>

      <button onClick={() => dispatch(ClearStudent())}>
        Clear All Students!
      </button>

      {studentsFromRedux && studentsFromRedux.length > 0
        ? studentsFromRedux.map((student, i) => (
            <div key={i}>
              <input
                value={student}
                onChange={(e) => dispatch(EditStudent(i, e.target.value))}
              />
              <button onClick={() => dispatch(DeleteStudent(i))}>
                Delete me!
              </button>
            </div>
          ))
        : null}
    </div>
  );
};

// class based component with redux connect
// import React from "react";
// import { connect } from "react-redux";
// import { AddStudent, DeleteStudent } from "../Redux/class/actions";

// class PureClassList extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       student: "Insert Student name here",
//     };
//   }

//   handleChange(e) {
//     this.setState({
//       student: e.currentTarget.value,
//     });
//   }

//   render() {
//     console.log(this.props.class);
//     return (
//       <>
//         <input
//           type="text"
//           value={this.state.student}
//           onChange={(e) => this.handleChange(e)}
//         />
//         <br />
//         <button onClick={() => this.props.addStudentMDP(this.state.student)}>
//           Add Student
//         </button>
//         <h3>Class:</h3>
//         {this.props.class.map((student, i) => (
//           <div key={i}>
//             <div>{student}</div>{" "}
//             <button onClick={() => this.props.deleteStudentMDP(student)}>
//               Delete student
//             </button>
//           </div>
//         ))}
//       </>
//     );
//   }
// }

// const mapStateToProps = (state) => {
//   return {
//     class: state.studentStore.students,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     addStudentMDP: (student) => dispatch(AddStudent(student)),
//     deleteStudentMDP: (index) => dispatch(DeleteStudent(index)),
//   };
// };

// export const ClassList = connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(PureClassList);
