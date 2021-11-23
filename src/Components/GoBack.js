// import React from "react";
// import { withRouter } from "react-router-dom";
// import { Button } from "react-bootstrap";


// class GoBack extends React.Component {
//   goBack = () => {
//     this.props.history.goBack();
//   };
//   render() {
//     return (
//       <div>
//         <Button variant='primary'  onClick={this.goBack}>
//           Go Back
//         </button>
//       </div>
//     );
//   }
// }
// export default GoBack = withRouter(GoBack);

import { useHistory } from "react-router-dom";
import { Button } from "react-bootstrap";
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
      <Button variant="primary" onClick={back}>
        Go back!
      </Button>
    </div>
  );
};

export default GoBack;
