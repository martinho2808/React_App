// import React from "react";
// import { withRouter } from "react-router-dom";

// class GoBack extends React.Component {
//   goBack = () => {
//     this.props.history.goBack();
//   };
//   render() {
//     return (
//       <div>
//         <button className="btn btn-primary" onClick={this.goBack}>
//           Go Back
//         </button>
//       </div>
//     );
//   }
// }
// export default GoBack = withRouter(GoBack);

import { useHistory } from "react-router-dom";
import { Button } from "reactstrap";
import { useEffect } from "react";

const GoBack = () => {
  const history = useHistory();

  useEffect(() => {
    console.log(history);
  });

  const back = () => {
    history.goBack();
  };

  return (
    <div>
      <Button className="btn btn-danger" onClick={back}>
        Go back!
      </Button>
    </div>
  );
};

export default GoBack;
