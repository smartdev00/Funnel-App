import { Home, LocationOn } from "@mui/icons-material";
import { TextField } from "@mui/material";

import googleMap from "../assets/google-map.png";

export default function AddressInput({ value, type }: { value?: string; type: string }) {
  return type === "personal_address_input" ? (
    <div>
      <div className='flex gap-2'>
        <div className='flex flex-col flex-auto justify-between h-auto py-[2px] gap-2'>
          <div className='flex items-start gap-2'>
            <div className='w-9' />
            <p>To find the right estate agent in your region, we need your full address.</p>
          </div>
          <div className='flex gap-3'>
            <div className='flex items-start gap-2'>
              <LocationOn sx={{ fontSize: 30 }} className='!h-14' />
              <TextField variant='filled' label='ZIP' className='!w-20' value={value} />
            </div>
            <TextField label='Location' className='flex-1' variant='filled' />
          </div>
          <div className='flex gap-3'>
            <div className='flex items-start gap-2 flex-1'>
              <Home sx={{ fontSize: 30 }} className='!h-14' />
              <TextField variant='filled' label='Street' className='!w-full' value={value} />
            </div>
            <TextField label='Number' className='!w-24' variant='filled' />
          </div>
        </div>
        <img src={googleMap} alt='Google Map' />
      </div>
    </div>
  ) : (
      <div className='flex gap-2'>
        <div className='flex flex-col flex-auto justify-start h-auto py-[2px] gap-5'>
          <div className='flex gap-3'>
            <div className='flex items-start gap-2'>
              <LocationOn sx={{ fontSize: 30 }} className='!h-14' />
              <TextField variant='filled' label='ZIP' className='!w-20' value={value} />
            </div>
            <TextField label='Location' className='flex-1' variant='filled' />
          </div>
          <div className='flex gap-3'>
            <div className='flex items-start gap-2 flex-1'>
              <Home sx={{ fontSize: 30 }} className='!h-14' />
              <TextField variant='filled' label='Street' className='!w-full' value={value} />
            </div>
            <TextField label='Number' className='!w-24' variant='filled' />
          </div>
        </div>
        <img src={googleMap} alt='Google Map' />
      </div>
  );
}
