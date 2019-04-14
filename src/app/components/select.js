import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import {MenuItem, InputLabel, Select, Input} from '@material-ui/core/';

import { useFormInput } from './functions';

const styles = theme => ({
  root: {
    position: 'relative',
    zIndex: 10001,
    display: 'block'
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
    rigth: '0%',
  },
  menu: {
    width: 200
  },
});

function Controlledelect (props){
  const { classes, value, onChange, options, header } = props;

  return (
    <div className={classes.root}>


    <TextField
      id='standard-select-currency-native'
      select
      onChange={onChange}
      value={value}
      defaultChecked='Anchorege-AK'
      defaultValue='Anchorege-AK'
      menuprops={{
        className: classes.menu,
      }}
      native={true}
      style={{ zIndex: 10000, position: 'relative' }}
      helperText={header}
      margin='normal'>

      {(options || []).map((option) => (
        <MenuItem
          key={option[0]}
          value={option[1]}
          position='relative'
          style={{zIndex: 100011}}
        >
          {option[1]}
        </MenuItem>
      ))}
    </TextField>
    </div>
  );
}

Controlledelect.propTypes = {
  classes: PropTypes.object,
};

export default withStyles(styles)(Controlledelect);


