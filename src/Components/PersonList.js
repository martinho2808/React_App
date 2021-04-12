import React from "react";
import { connect } from "react-redux";
import { AddPerson } from "../Redux/people/actions";

class PurePersonList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      person: "Update the Persons Name and Age",
      age: 0,
    };
  }

  handleChange = (e) => {
    if (e.currentTarget.name === "person") {
      this.setState({
        person: e.currentTarget.value,
      });
    } else if (e.currentTarget.name === "age") {
      this.setState({
        age: e.currentTarget.value,
      });
    }
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const person = {
      name: this.state.person,
      age: this.state.age,
    };
    this.props.addPerson(person);
    this.setState({
      person: "Update the Persons Name and Age",
      age: 0,
    });
  };

  render() {
    return (
      <>
        <h3>People</h3>
        {this.props.people.map((person, index) => (
          <div key={index}>
            {person.name} - {person.age}
          </div>
        ))}

        <h3> Add Person </h3>
        <input
          type="text"
          value={this.state.person}
          name="person"
          onChange={this.handleChange}
        />
        <br />
        <input
          type="number"
          value={this.state.age}
          name="age"
          onChange={this.handleChange}
        />
        <br />
        <button onClick={this.handleSubmit}>Add Person</button>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    people: state.peopleStore.people,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addPerson: (person) => {
      dispatch(AddPerson(person));
    },
  };
};

export const PersonList = connect(
  mapStateToProps,
  mapDispatchToProps
)(PurePersonList);
