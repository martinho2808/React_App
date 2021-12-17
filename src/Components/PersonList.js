// Hook based functional component 
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  AddPerson,
  loadSpacePeopleThunk,
  ClearPeople,
  loadPersonThunk,
} from "../Redux/people/actions";

export const PersonList = (props) => {
  const [person, setPerson] = useState("Insert Persons Name and Age");
  const [age, setAge] = useState(18);

  const peopleFromRedux = useSelector((state) => state.peopleStore.people);

  const dispatch = useDispatch();

  useEffect(() => {
    localStorage.setItem("People", JSON.stringify(peopleFromRedux));
  }, [peopleFromRedux]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPerson = {
      name: person,
      age: age,
    };
    dispatch(AddPerson(newPerson));
    setPerson("Insert Persons Name and Age");
    setAge(18);
  };

  return (
    <>
      <h2>People</h2>
      {peopleFromRedux.map((person, i) => (
        <div key={i}>
          {person.name} - {person.age}
        </div>
      ))}

      <h3>Add Person</h3>
      <input
        type="text"
        value={person}
        onChange={(e) => setPerson(e.currentTarget.value)}
      />
      <br />
      <input
        type="number"
        value={age}
        onChange={(e) => setAge(e.currentTarget.value)}
      />
      <br />
      <button type="submit" onClick={handleSubmit}>
        {" "}
        Submit Person
      </button>
      <button onClick={() => dispatch(loadSpacePeopleThunk())}>
        SpacePeople
      </button>
      <button onClick={() => dispatch(ClearPeople())}>Clear People</button>
      <button onClick={() => dispatch(loadPersonThunk())}>
        New dude or dudette
      </button>
    </>
  );
};

// Class based component 
// import React from "react";
// import { connect } from "react-redux";
// import {
//   AddPerson,
//   loadSpacePeopleThunk,
//   ClearPeople,
// } from "../Redux/people/actions";

// class PurePersonList extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       person: "Update the Persons Name and Age",
//       age: 0,
//     };
//   }

//   handleChange = (e) => {
//     if (e.currentTarget.name === "person") {
//       this.setState({
//         person: e.currentTarget.value,
//       });
//     } else if (e.currentTarget.name === "age") {
//       this.setState({
//         age: e.currentTarget.value,
//       });
//     }
//   };

//   handleSubmit = (e) => {
//     e.preventDefault();
//     const person = {
//       name: this.state.person,
//       age: this.state.age,
//     };
//     this.props.addPerson(person);
//     this.setState({
//       person: "Update the Persons Name and Age",
//       age: 0,
//     });
//   };

//   componentDidUpdate() {
//     localStorage.setItem("People", JSON.stringify(this.props.people));
//   }

//   render() {
//     return (
//       <>
//         <h3>People</h3>
//         {this.props.people.map((person, index) => (
//           <div key={index}>
//             {person.name} - {person.age}
//           </div>
//         ))}

//         <h3> Add Person </h3>
//         <input
//           type="text"
//           value={this.state.person}
//           name="person"
//           onChange={this.handleChange}
//         />
//         <br />
//         <input
//           type="number"
//           value={this.state.age}
//           name="age"
//           onChange={this.handleChange}
//         />
//         <br />
//         <button onClick={this.handleSubmit}>Add Person</button>
//         <button onClick={() => this.props.spacePeople()}>SpacePeople</button>
//         <button onClick={() => this.props.clearPeopleMDP()}>
//           ClearAllPeople
//         </button>
//       </>
//     );
//   }
// }

// const mapStateToProps = (state) => {
//   return {
//     people: state.peopleStore.people,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     addPerson: (person) => {
//       dispatch(AddPerson(person));
//     },
//     spacePeople: () => {
//       dispatch(loadSpacePeopleThunk());
//     },
//     clearPeopleMDP: () => {
//       dispatch(ClearPeople());
//     },
//   };
// };

// export const PersonList = connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(PurePersonList);

