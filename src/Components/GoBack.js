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
//         <Button variant="primary" onClick={this.goBack}>
//           Go Back
//         </Button>
//       </div>
//     );
//   }
// }
// export default GoBack = withRouter(GoBack);

// Above code does not work with the newest version, only works with hooks?
// https://github.com/remix-run/react-router/issues/7256
// https://stackoverflow.com/questions/62365009/how-to-get-parameter-value-from-react-router-dom-v6-in-class
// https://reacttraining.com/blog/react-router-v5-1/

import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import { useEffect } from "react";

const GoBack = () => {
  const navigate = useNavigate();

  useEffect(() => {
    console.log(navigate);
    console.log('Navigate back -1')
  });

  const back = () => {
    navigate(-1);
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
