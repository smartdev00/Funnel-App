import estimation from "../assets/estimation_image.png";
import { TextField } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const RecepientInfor = ({ value, onClick }: { value?: number; onClick: () => void }) => {
  return (
    <div className='flex flex-col items-start w-full flex-auto'>
      <div className='flex items-start gap-10 w-full h-[232px]'>
        <div className='flex flex-col gap-2 justify-between h-full flex-1 py-3'>
          <div className='flex gap-2 justify-center items-center'>
            <FormControl variant='filled' sx={{ minWidth: 100 }}>
              <InputLabel id='demo-simple-select-filled-label'>Gender</InputLabel>
              <Select
                labelId='demo-simple-select-filled-label'
                id='demo-simple-select-filled'
                value={value}
                //   onChange={handleChange}
              >
                <MenuItem value={10}>Male</MenuItem>
                <MenuItem value={20}>Female</MenuItem>
              </Select>
            </FormControl>
            <TextField label='Recepient Name' variant='filled' className='w-full' />
          </div>
          <TextField label='Telephone number*' variant='filled' />
          <TextField label='Email*' variant='filled' />
        </div>
        <img alt='map' src={estimation} className='w-80' />
      </div>
      <div className='flex gap-2'>
        <span className='text-xs leading-tight'>
          I accept the terms and conditions and agree to be informed by Homeday GmbH by e-mail and telephone about the
          value of the property. I can object to this at any time by sending an e-mail to widerruf@homeday.de. I agree
          that a customer account will be set up for me on my.homeday.de, which I can use to view the current market
          price. The Homeday privacy policy applies.
        </span>
      </div>
      <button className='bg-gray-200 self-center mt-2' onClick={onClick}>
        Receive a free evaluation
      </button>
    </div>
  );
};

export default RecepientInfor;
