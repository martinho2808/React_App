// import React from "react";
// import axios from "axios";

// export default class GetPokemon extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       name: null,
//       image: null,
//     };
//   }

//   getThatPokemon = () => {
//     fetch(`https://pokeapi.co/api/v2/pokemon/${this.props.pokemon}`)
//       .then((res) => res.json())
//       .then(
//         (result) => {
//           this.setState({
//             name: result.name,
//             image: result.sprites.front_default,
//           });
//         },
//         (error) => {
//           console.log(error);
//         }
//       );
//   };

// Axios Version
//   getThatPokemon = () => {
//     axios.get(`https://pokeapi.co/api/v2/pokemon/${this.props.pokemon}`).then(
//       (result) => {
//         this.setState({
//           name: result.data.name,
//           image: result.data.sprites.front_default,
//         });
//       },
//       (error) => {
//         console.log(error);
//       }
//     );
//   };

//   render() {
//     return (
//       <>
//         <button onClick={this.getThatPokemon}>Get Information</button>
//         <h2>Information about this Pokemon: {this.props.pokemon}</h2>
//         <p>{this.state.name}</p>
//         <img src={this.state.image} alt="pokemon" />
//       </>
//     );
//   }
// }
import { useState } from "react";

export default function GetPokemon(props) {
  const [pokeInfo, setPokeInfo] = useState({
    name: "",
    image: "",
  });

  function callAPI() {
    fetch(`https://pokeapi.co/api/v2/pokemon/${props.pokemon}`)
      .then((res) => res.json())
      .then(
        (result) => {
          setPokeInfo({
            name: result.name,
            image: result.sprites.front_default,
          });
        },
        (error) => {
          console.log(error);
        }
      );
  }

  return (
    <>
      <button onClick={callAPI}>Get Information</button>
      <h2>Information about this Pokemon: {props.pokemon}</h2>
      <p>{pokeInfo.name}</p>
      <img src={pokeInfo.image} alt="pokemon" />
    </>
  );
}
