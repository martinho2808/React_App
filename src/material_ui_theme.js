// Hook based functinal component 
import { ThemeProvider, makeStyles } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Theme from "./Theme.js";

const useStyles = makeStyles({
  root: {
    color: Theme.palette.primary.secondary,
  },
});

export default function ThemedTestHook() {
  const classes = useStyles();
  return (
    <ThemeProvider theme={Theme}>
      {/* Using the theme object directly in inline style */}
      <h2 style={{ color: Theme.palette.primary.secondary }}>
        The first title
      </h2>
      {/* Using the makeStyles method to make a style block to style JSX */}
      <h2 className={classes.root}>This is my title</h2>
      <Button color="primary">Paragraph after paragraph</Button>
    </ThemeProvider>
  );
}

// import React from "react";
// import { withStyles } from "@material-ui/core/styles";
// import Theme from "./Theme.js";

// const stylesObject = () => ({
//   root: {
//     color: Theme.palette.primary.secondary,
//     backgroundColor: Theme.palette.primary.main,
//   },
// });

// class ThemeTestClass extends React.Component {
//   constructor(props) {
//     super(props);
//   }
//   render() {
//     const { classes } = this.props;
//     return (
//       <>
//         {/* Using the withStyles method to use a style block to style JSX */}
//         <button className={classes.root}>Button </button>
//       </>
//     );
//   }
// }

// export default withStyles(stylesObject)(ThemeTestClass);
