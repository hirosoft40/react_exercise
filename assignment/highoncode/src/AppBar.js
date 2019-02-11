import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

const styles = {
  root: {
    padding:0,
    margin:10
  },
  nav:{
    padding:30
    ,background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)'
  },
  appbar:{
    marginRight:30
  }

};

function SimpleAppBar(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default" className={classes.nav}>
        <Toolbar>
          <Typography variant="h3" className={classes.appbar}>
            HighOnCoding
          </Typography>
          <Typography variant="h5" fontWeight={600}  className={classes.appbar}>
            Home
          </Typography>
          <Typography variant="h6"  className={classes.appbar}>
            Categories
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

SimpleAppBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SimpleAppBar);
