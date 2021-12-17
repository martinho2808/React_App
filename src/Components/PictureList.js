// Hook based functional component
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getImageThunk, DeleteImage } from "../Redux/pictures/actions";

export function PictureList() {
  const [title, setTitle] = useState("Insert Title Here");
  const [searched, setSearched] = useState("Insert Search Here");
  const dispatch = useDispatch();
  const storedImagesRedux = useSelector((state) => state.imageStore.images);

  function submitSearch(e) {
    e.preventDefault();
    const image = {
      title,
      searched,
    };
    dispatch(getImageThunk(image));
  }

  return (
    <div>
      <h2>Search for Image</h2>
      <input
        type="text"
        name="title"
        value={title}
        onChange={(e) => setTitle(e.currentTarget.value)}
      />
      <br />
      <input
        type="text"
        name="search"
        value={searched}
        onChange={(e) => setSearched(e.currentTarget.value)}
      />
      <br />
      <button onClick={(e) => submitSearch(e)}>New Image</button>

      <br />

      <h3>Images</h3>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {storedImagesRedux.length > 0
          ? storedImagesRedux.map((image, i) => (
              <div key={i}>
                <div style={{ textAlign: "center" }}>
                  <h3>{image.title}</h3>
                  <img
                    style={{ width: "30%", height: "30%" }}
                    src={image.url}
                    alt={image.title}
                  />
                  <br />
                  <button onClick={() => dispatch(DeleteImage(i))}>
                    Click to Delete
                  </button>
                </div>
              </div>
            ))
          : null}
      </div>
    </div>
  );
}

// Class based component
// import React from "react";
// import { connect } from "react-redux";
// import { getImageThunk, DeleteImage } from "../Redux/pictures/actions.js";

// class PureImageList extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       searched: "Insert Search Here",
//       title: "Title of Searched Image",
//     };
//   }

//   submitSearch(e) {
//     e.preventDefault();
//     const image = {
//       title: this.state.title,
//       searched: this.state.searched,
//     };
//     this.props.addImageMDP(image);
//   }

//   handleInputChange(e) {
//     if (e.currentTarget.name === "search") {
//       this.setState({
//         searched: e.currentTarget.value,
//       });
//     } else if (e.currentTarget.name === "title") {
//       this.setState({
//         title: e.currentTarget.value,
//       });
//     }
//   }

//   render() {
//     return (
//       <>
//         <h2>Search for Image</h2>
//         <input
//           type="text"
//           name="title"
//           value={this.state.title}
//           onChange={(e) => this.handleInputChange(e)}
//         />
//         <br />
//         <input
//           type="text"
//           name="search"
//           value={this.state.searched}
//           onChange={(e) => this.handleInputChange(e)}
//         />
//         <br />
//         <button onClick={(e) => this.submitSearch(e)}>New Image</button>

//         <h3>Images:</h3>
//         <div
//           style={{
//             display: "flex",
//             flexWrap: "wrap",
//           }}
//         >
//           {this.props.images.map((image, i) => (
//             <div key={i}>
//               <div
//                 style={{
//                   textAlign: "center",
//                 }}
//               >
//                 <h3>{image.title}</h3>
//                 <img
//                   style={{ width: "30%", height: "30%" }}
//                   src={image.url}
//                   alt={image.title}
//                 />
//                 <br />
//                 <button onClick={() => this.props.deleteImageMDP(i)}>
//                   Delete me
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </>
//     );
//   }
// }

// const mapStateToProps = (state) => {
//   return {
//     images: state.imageStore.images,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     addImageMDP: (image) => dispatch(getImageThunk(image)),
//     deleteImageMDP: (i) => dispatch(DeleteImage(i)),
//   };
// };

// export const PictureList = connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(PureImageList);
