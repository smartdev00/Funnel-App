import { TextField, Slider } from "@mui/material";
import ground from "../assets/large-ground.svg";

const Ground = ({ type }: { type: string }) => {
  return type === "personal_ground" ? (
    <div className='border flex flex-col justify-center items-center px-5 py-3'>
      <img src={ground} className='w-28' />
      <div className='flex items-center justify-between w-full'>
        <p>Land Area</p>
        <TextField id='filled-basic' className='w-24' label='Area' size='small' variant='filled' />
      </div>

      <Slider
        defaultValue={50}
        className='!w-72 !h-2'
        aria-label='Default'
        valueLabelDisplay='auto'
        min={100}
        max={3000}
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
          { value: 100, label: "100 m" },
          { value: 5000, label: "5000 m" },
        ]}
        min={100}
        max={5000}
      />
      <div className='flex items-center justify-center w-full'>
        <TextField id='filled-basic' className='w-40' label='Area' size='small' variant='filled' />
      </div>
    </div>
  );
};

export default Ground;
