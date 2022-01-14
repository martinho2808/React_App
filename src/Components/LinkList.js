// Hook Based functional component
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  ClearLinks,
  AddLink,
  DeleteLink,
  loadLinkThunk,
} from "../Redux/links/actions";

export const LinkList = (props) => {
  const [url, setUrl] = useState("Insert URL here");
  const [title, setTitle] = useState("Insert Title here");
  const [link, setLink] = useState("Insert Link to call here");

  const linksFromRedux = useSelector((state) => state.linkStore.links);

  const displayLinks = linksFromRedux.map((link, i) => (
    <div key={i}>
      {link.title} - {link.url}
      <button
        onClick={() => {
          console.log(i);
          deleteLink(i);
        }}
      >
        Delete Link
      </button>
    </div>
  ));

  const dispatch = useDispatch();

  const submitLink = (e) => {
    console.log(Date.now(), "component");
    e.preventDefault();
    const newLink = {
      title,
      url,
    };
    dispatch(AddLink(newLink));
    setUrl("Insert URL here");
    setTitle("Insert Title here");
  };

  const clearLink = () => dispatch(ClearLinks());
  const deleteLink = (i) => {
    console.log(i);
    dispatch(DeleteLink(i));
  };

  return (
    <>
      <h3>Add Link</h3>
      <input
        type="text"
        value={url}
        onChange={(e) => setUrl(e.currentTarget.value)}
      />
      <br />
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.currentTarget.value)}
      />
      <br />
      <button onClick={submitLink}> New Link</button>
      <button onClick={clearLink}>Clear Links</button>
      <button
        onClick={() => {
          console.log(Date.now(), "component");

          dispatch(loadLinkThunk());
        }}
      >
        All Link API
      </button>
      <input
        type="text"
        value={link}
        onChange={(e) => setLink(e.currentTarget.value)}
      />

      <h2>Links</h2>
      {displayLinks}
    </>
  );
};

// Class based component
// import React from "react";
// import { connect } from "react-redux";
// import {
//   CLEAR_LINKS,
//   AddLink,
//   DeleteLink,
//   loadLinkThunk,
//   LOAD_LINK_SUCCESS_ACTION,
// } from "../Redux/links/actions";
// import axios from "axios";

// import { store } from "../Redux/store";

// class PureLinkList extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       url: "Insert Link Here",
//       title: "Insert Link Title Here",
//     };
//   }

//   // Dynamically Add Links
//   submitLink = (e) => {
//     e.preventDefault();

//     const link = {
//       title: this.state.title,
//       url: this.state.url,
//     };

//     this.props.addLinkMDP(link);

//     this.setState({
//       url: "Insert Link Here",
//       title: "Insert Link Title Here",
//     });
//   };

//   // Function to handle input changes
//   handleInputChange = (e) => {
//     if (e.currentTarget.name === "url") {
//       this.setState({
//         url: e.currentTarget.value,
//       });
//     } else if (e.currentTarget.name === "title") {
//       this.setState({
//         title: e.currentTarget.value,
//       });
//     }
//   };

//   componentDidMount() {
//     // More conventional way
//     axios.get("https://www.reddit.com/r/programming.json").then((response) => {
//       let threads = response.data;
//       let redditLinks = threads.data.children.map((link) => ({
//         title: link.data.title,
//         url: link.data.url,
//       }));
//       console.log(redditLinks);
//       store.dispatch({
//         type: LOAD_LINK_SUCCESS_ACTION,
//         payload: redditLinks,
//       });
//     });
//   }

//   render() {
//     return (
//       <>
//         {/* Code to add links dynamically */}
//         <h3>Add Link</h3>

//         <input
//           type="text"
//           value={this.state.url}
//           name="url"
//           onChange={this.handleInputChange}
//         />
//         <br />
//         <input
//           type="text"
//           value={this.state.title}
//           name="title"
//           onChange={this.handleInputChange}
//         />
//         <br />
//         <button onClick={this.submitLink}>New Link</button>
//         <button onClick={this.props.clearLinkMDP}>Clear Links</button>
//         <button onClick={this.props.loadLinkThunkMDP}>Load Links</button>

//         {/* Code to display links from the Redux store */}
//         <h3>Links:</h3>
//         {/* {this.props.links.map((link, i) => (
//           <div key={i}>
//             {link.title} - {link.url}
//             <button onClick={() => this.props.deleteLinkMDP(i)}>
//               Delete Link
//             </button>
//           </div>
//         ))} */}

//         {this.props.loading
//           ? "Loading...."
//           : this.props.links.map((link, i) => (
//               <div key={i}>
//                 {link.title} - {link.url}
//                 <button onClick={() => this.props.deleteLinkMDP(i)}>
//                   Delete Link
//                 </button>
//               </div>
//             ))}
//       </>
//     );
//   }
// }

// const mapStateToProps = (state) => {
//   return {
//     links: state.linkStore.links,
//     loading: state.linkStore.loading,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     // dispatching an action to alter the state
//     addLinkMDP: (link) => dispatch(AddLink(link)),
//     // dispatching an action creator
//     clearLinkMDP: () =>
//       dispatch({
//         type: CLEAR_LINKS,
//       }),
//     deleteLinkMDP: (i) => dispatch(DeleteLink(i)),
//     loadLinkThunkMDP: () => dispatch(loadLinkThunk()),
//   };
// };

// export const LinkList = connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(PureLinkList);
