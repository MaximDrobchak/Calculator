import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import {Typography} from '@material-ui/core';

function RadioGroupComponent (props){
  const { labelPlacement, options, value, onChange } = props;

  return (
    <FormControl component='fieldset'>
    <Typography variant="title" color="inherit">
      {labelPlacement}
    </Typography>

      <RadioGroup
        aria-label='position'
        onChange={onChange}
        name='position'
        value={value}

        row>
        {(options || [])
          .map((option, index) => (
            <FormControlLabel
              value={option.value}

              style={{margin: 0 , padding: 0}}
              key={option.value}
              control={<Radio color='primary' />}
              label={option.value}
            />
          ))}
      </RadioGroup>
    </FormControl>
  );
}

export default RadioGroupComponent;
