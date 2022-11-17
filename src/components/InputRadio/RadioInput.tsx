import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';

const RadioInput = () => {
  return (
    <FormControl>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <FormControlLabel
          value="female"
          control={
            <Radio
              sx={{
                color: 'black',
                '&.Mui-checked': {
                  color: '#F68D10',
                },
              }}
            />
          }
          label="2x5x0.1"
        />
        <FormControlLabel
          value="male"
          control={
            <Radio
              sx={{
                color: 'black',
                '&.Mui-checked': {
                  color: '#F68D10',
                },
              }}
            />
          }
          label="3x5x0.1"
        />
        <FormControlLabel
          value="other"
          control={
            <Radio
              sx={{
                color: 'black',
                '&.Mui-checked': {
                  color: '#F68D10',
                },
              }}
            />
          }
          label="4x5x0.1"
        />
      </RadioGroup>
    </FormControl>
  );
};

export default RadioInput;
