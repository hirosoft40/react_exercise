import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    margin:50,
    background:'#311b92',
  },

  title: {
    padding:15,
    color:'white',
  }
});

function PaperSheet(props) {
  const { classes } = props;

  return (
    <div>
      <Paper className={classes.root} elevation={1}>
      <div position="static" color="default" >
        <Typography variant="h3" component="h3" className={classes.title} >
        Course of the Current Reviews
        </Typography>
        <Typography component="p" className={classes.title}>
        When you want to buy any application from the Apple iTunes store you have more choices than you can handle.Most of the users scroll past the application description completely avoiding it like ads displayed on the right column of your webpage. Their choice is depending on three imoprtant factors price, screenshot and reviews.
        </Typography>
        </div>
      </Paper>
    </div>
  );
}

PaperSheet.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PaperSheet);
