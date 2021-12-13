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

// With router class based doent work in React router dom anymore. 

import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import { useEffect } from "react";

const GoBack = () => {
  const navigate = useNavigate();

  useEffect(() => {
    console.log(navigate);
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