import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import './RangeSlider.css';
import { range } from '../../redux/filter/filteredSlice';
import { useDispatch } from 'react-redux';

// export function valuetext(value: number) {
//   return `${value}°`;
// }

export default function RangeSlider() {
  const [value, setValue] = React.useState<number[]>([0, 150000]);

  const marks = [
    { value: value[0], label: `֏${value[0]}` },
    { value: value[1], label: `֏${value[1]}` },
  ];
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(range(value));
  }, [value]);
  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number[]);
  };
  return (
    <Box sx={{ width: '100%' }}>
      <Slider
        id={'range'}
        getAriaLabel={() => ''}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        // getAriaValueText={valuetext}
        marks={marks}
        max={200000}
        min={0}
        step={1000}
      />
    </Box>
  );
}
