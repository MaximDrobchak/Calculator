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
    margin: 0,
    position: 'relative',
    display: 'block',
    zIndex: 10000,
    background: 'rgb(255,255,255)',
    opacity: 0.9,
    width: '100%',
  },

  paperTitle: {
    height: 30,
    textAlign: 'center',
    color: 'purple',
    display: 'flex',
  },

  title: {
    color: '#fff',
    margin: 'auto',
    fontSize: 18,
  },
});

function PaperSheet (props){
  const { classes, children, background, header } = props;

  return (
    <div className={classes.paperContainer}>
      <Paper className={classes.root} elevation={1}>
        <Paper className={classes.paperTitle} style={{ background }}>
          <Typography variant='title' className={classes.title}>
            {header}
          </Typography>
        </Paper>
        <br />
        <Typography variant='display1'>{children}</Typography>
      </Paper>
    </div>
  );
}

PaperSheet.propTypes = {
  classes: PropTypes.object.isRequired,
};

const MyPaperHeader = props => {
  const { background, header, width, classes } = props;
  return (
    <Paper className={classes.paperTitle}>
      <Typography variant='title' className={classes.title}>
        {header}
      </Typography>
    </Paper>
  );
};

MyPaperHeader.propTypes = {
  classes: PropTypes.object.isRequired,
};
const MyHEader = withStyles(styles)(MyPaperHeader);

export { MyHEader };
export default withStyles(styles)(PaperSheet);
