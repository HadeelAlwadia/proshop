import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

export default function SliderSizes({changeValueOFobacity}) {
  return (
    <Box width={300}>
    
      <Slider defaultValue={50} aria-label="Default" valueLabelDisplay="auto" onChange={()=>changeValueOFobacity(Math.random())} />
    </Box>
  );
}