import React from "react";
import { connect } from "react-redux";
import {
  CLEAR_LINKS,
  AddLink,
  DeleteLink,
  loadLinkThunk,
} from "../Redux/links/actions";

class PureLinkList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      url: "Insert Link Here",
      title: "Insert Link Title Here",
    };
  }

  // Dynamically Add Links
  submitLink = (e) => {
    e.preventDefault();

    const link = {
      title: this.state.title,
      url: this.state.url,
    };

    this.props.addLinkMDP(link);

    this.setState({
      url: "Insert Link Here",
      title: "Insert Link Title Here",
    });
  };

  // Function to handle input changes
  handleInputChange = (e) => {
    if (e.currentTarget.name === "url") {
      this.setState({
        url: e.currentTarget.value,
      });
    } else if (e.currentTarget.name === "title") {
      this.setState({
        title: e.currentTarget.value,
      });
    }
  };

  render() {
    return (
      <>
        {/* Code to add links dynamically */}
        <h3>Add Link</h3>

        <input
          type="text"
          value={this.state.url}
          name="url"
          onChange={this.handleInputChange}
        />
        <br />
        <input
          type="text"
          value={this.state.title}
          name="title"
          onChange={this.handleInputChange}
        />
        <br />
        <button onClick={this.submitLink}>New Link</button>
        <button onClick={this.props.clearLinkMDP}>Clear Links</button>
        <button onClick={this.props.loadLinkThunkMDP}>Load Links</button>

        {/* Code to display links from the Redux store */}
        <h3>Links:</h3>
        {this.props.links.map((link, i) => (
          <div key={i}>
            {link.title} - {link.url}
            {/* Button to delete te link */}
            <button onClick={() => this.props.deleteLinkMDP(i)}>
              Delete Link
            </button>
          </div>
        ))}
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    links: state.linkStore.links,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    // dispatching an action to alter the state
    addLinkMDP: (link) => dispatch(AddLink(link)),
    // dispatching an action creator
    clearLinkMDP: () =>
      dispatch({
        type: CLEAR_LINKS,
      }),
    deleteLinkMDP: (i) => dispatch(DeleteLink(i)),
    loadLinkThunkMDP: () => dispatch(loadLinkThunk()),
  };
};

export const LinkList = connect(
  mapStateToProps,
  mapDispatchToProps
)(PureLinkList);
