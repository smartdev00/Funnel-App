import { TextField, Slider } from "@mui/material";
import ground from "../assets/large-ground.svg";

const Ground = ({ type, min, max }: { type: string; min: number; max: number }) => {
  const unit = type === "fast_built_year" ? "" : "m²";
  const placeholder = type === "fast_built_year" ? "Year" : "Area";
  return type === "personal_ground_area" ? (
    <div className='border flex flex-col justify-center items-center px-5 py-3'>
      <img src={ground} className='w-28' />
      <div className='flex items-center justify-between w-full'>
        <p>Land Area</p>
        <TextField id='filled-basic' className='w-24' label={placeholder} size='small' variant='filled' />
      </div>
      <Slider
        defaultValue={50}
        className='!w-72 !h-2'
        aria-label='Default'
        valueLabelDisplay='auto'
        min={min}
        max={max}
      />
    </div>
  ) : (
    <div className='flex flex-col justify-center gap-10 items-center px-5 py-3'>
      <Slider
        defaultValue={50}
        className='!w-72 !h-2'
        aria-label='Default'
        valueLabelDisplay='auto'
        marks={[
          { value: min, label: `${min} ${unit}` },
          { value: max, label: `${max} ${unit}` },
        ]}
        min={min}
        max={max}
      />
      <div className='flex items-center justify-center w-full'>
        <TextField id='filled-basic' className='w-40' label={placeholder} size='small' variant='filled' />
      </div>
    </div>
  );
};

export default Ground;
