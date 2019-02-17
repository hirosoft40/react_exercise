import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import {
  deepPurple,
  blueGrey,
  purple,
  lightGreen,
  deepOrange
} from "@material-ui/core/colors";

const styles = {
  root: {
    padding: 0,
    margin: 50
  },
  first: {
    background: deepPurple[100],
    padding: 10
  },
  title: {
    paddingLeft: 15,
    color: deepPurple.A400
  },
  p: {
    color: blueGrey[900],
    paddingLeft: 15
  },
  bottom: {
    background: purple[700],
    padding: 10,
    color: "white"
  },
  titleSecond: {
    paddingLeft: 15,
    color: deepOrange[500]
  },
  bottomSecond: {
    background: deepOrange[300],
    marginLeft: 15,
    color: "black",
    padding: 10
  }
};

function SimpleAppBar(props) {
  const { classes } = props;

  return (
    <div>
      <div className={classes.root}>
        <div position="static" color="default" className={classes.first}>
          <div>
            <h2 className={classes.title}>Hello WatchKit</h2>
            <p className={classes.p}>
              Last month Apple released the anticipated WatchKit Framework for
              developers in the form of iOS 8.2 beta SDK release. The WatchKit
              framework enable the developers to create Apple Watch
              applications. In this article we are going to focus on the basics
              of getting started with the WatchKit framework and developing apps
              for the Apple Watch.
            </p>
          </div>
        </div>
        <div className={classes.bottom}>
          <span style={{ marginRight: 10, paddingLeft: 10 }}>12 comments</span>
          <span>124 likes</span>
        </div>
      </div>
      <div className={classes.root}>
        <div position="static" color="default">
          <div>
            <h2 className={classes.titleSecond}>Hello WatchKit</h2>
            <p className={classes.p}>
              Last month Apple released the anticipated WatchKit Framework for
              developers in the form of iOS 8.2 beta SDK release. The WatchKit
              framework enable the developers to create Apple Watch
              applications. In this article we are going to focus on the basics
              of getting started with the WatchKit framework and developing apps
              for the Apple Watch.
            </p>
          </div>
        </div>
        <div className={classes.bottomSecond}>
          <span style={{ marginRight: 10 }}>12 comments</span>
          <span>124 likes</span>
        </div>
      </div>
    </div>
  );
}

SimpleAppBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SimpleAppBar);
