import React from "react";
import { withRouter } from "react-router-dom";

class GoBack extends React.Component {
  goBack = () => {
    this.props.history.goBack();
  };
  render() {
    return (
      <div>
        <button className="btn btn-primary" onClick={this.goBack}>
          Go Back
        </button>
      </div>
    );
  }
}
export default GoBack = withRouter(GoBack);
