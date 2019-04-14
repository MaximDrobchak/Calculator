import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

export const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    background: 'rgba(132,255,255,.2)',
  },
});

function PaperResult (props){
  const { classes, label, value } = props;

  return (
    <div>
      <Paper className={classes.root} elevation={1}>
        <Typography variant='h6' component='h1'>
          {label} : {value}
        </Typography>
      </Paper>
    </div>
  );
}

PaperResult.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PaperResult);
