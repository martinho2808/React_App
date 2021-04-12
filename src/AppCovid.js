// import axios from "axios";
// import React, { useState, useEffect } from "react";
// import CovidCard from "./Components/Exercise/CovidCard";

// const CovidPage = () => {
//   const [propsList, setPropsList] = useState([]);
//   useEffect(() => {
//     async function fetchData() {
//       const { data } = await axios.get(
//         `${process.env.REACT_APP_API_SERVER}/api/covid`
//       );
//       setPropsList(data);
//     }
//     fetchData();
//   }, []);
//   return (
//     <div>
//       <h1>List of COVID Cases</h1>
//       <div className="row">
//         {propsList[0] &&
//           propsList.map((props, index) => (
//             <div className="col-4" key={index}>
//               <CovidCard {...props} />
//             </div>
//           ))}
//       </div>
//     </div>
//   );
// };

// export default CovidPage;

// Class

import React from "react";
import axios from "axios";
import CovidCard from "./Components/Exercise/CovidCard";

export default class CovidPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      propsList: [],
    };
  }

  async componentDidMount() {
    const data = await axios.get(
      `${process.env.REACT_APP_API_SERVER}/api/covid`
    );
    this.setState({
      propsList: data.data,
    });
  }

  render() {
    return (
      <>
        <h1>List of COVID Cases</h1>
        <div className="row">
          {this.state.propsList &&
            this.state.propsList.map((props, index) => (
              <div className="col-4" key={index}>
                <CovidCard {...props} />
              </div>
            ))}
        </div>
      </>
    );
  }
}
