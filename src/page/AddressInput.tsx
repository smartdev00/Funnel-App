import { Home, LocationOn } from "@mui/icons-material";
import { TextField } from "@mui/material";

import googleMap from "../assets/google-map.png";
import { useEffect, useState } from "react";
import { isInteger, isNullOrUndefined } from "../utils/function";

interface RealEstate {
  [key: string]: number | string | null | undefined | object; // Adjust this type based on your actual data structure
}

interface AddressInfor {
  location: string;
  street: string;
  number: string;
  zip: string;
}

export default function AddressInput({
  type,
  realEstate,
  setRealEstate,
  error,
  setError,
}: {
  value?: string;
  type: string;
  realEstate: RealEstate;
  setRealEstate: React.Dispatch<React.SetStateAction<RealEstate>>;
  error: any;
  setError: React.Dispatch<React.SetStateAction<any>>;
}) {
  const [addressInfor, setAddressInfor] = useState<AddressInfor>({
    location: "",
    street: "",
    number: "",
    zip: "",
  });
  const [isInit, setIsInit] = useState<boolean>(false);

  useEffect(() => {
    const estate = realEstate[type] as AddressInfor | null;
    if (isInit) {
      setRealEstate({ ...realEstate, [type]: addressInfor });
    } else {
      if (estate && !isInit) {
        setAddressInfor(estate);
      }
      if (!estate) {
        setRealEstate({ ...realEstate, [type]: addressInfor });
      }
      setIsInit(true);
    }
  }, [addressInfor]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (e.target.name === "zip" && !isInteger(e.target.value)) {
      setError({ ...error, zip: "Invalid" });
    } else {
      setError({ ...error, [e.target.name]: "" });
      setAddressInfor({ ...addressInfor, [e.target.name]: e.target.value });
    }
  };
  return type === "personal_address_input" ? (
    <div>
      <div className='flex gap-2'>
        <div className='flex flex-col flex-auto justify-between h-auto py-[2px]'>
          <div className='flex items-start gap-2'>
            <div className='w-9' />
            <p>To find the right estate agent in your region, we need your full address.</p>
          </div>
          <div className='flex gap-3'>
            <div className='flex items-start gap-2'>
              <LocationOn sx={{ fontSize: 30 }} className='!h-14' />
              <TextField
                variant='filled'
                label='ZIP'
                className='!w-20'
                error={!!error?.zip}
                helperText={isNullOrUndefined(error.zip).error ? " " : error.zip}
                name='zip'
                value={addressInfor.zip}
                onChange={handleChange}
              />
            </div>
            <TextField
              label='Location'
              className='flex-1'
              variant='filled'
              error={!!error?.location}
              helperText={isNullOrUndefined(error.location).error ? " " : error.location}
              name='location'
              value={addressInfor.location}
              onChange={handleChange}
            />
          </div>
          <div className='flex gap-3'>
            <div className='flex items-start gap-2 flex-1'>
              <Home sx={{ fontSize: 30 }} className='!h-14' />
              <TextField
                variant='filled'
                label='Street'
                className='!w-full'
                error={!!error?.street}
                helperText={isNullOrUndefined(error.street).error ? " " : error.street}
                name='street'
                value={addressInfor.street}
                onChange={handleChange}
              />
            </div>
            <TextField
              label='Number'
              className='!w-24'
              variant='filled'
              error={!!error?.number}
              helperText={isNullOrUndefined(error.number).error ? " " : error.number}
              name='number'
              value={addressInfor.number}
              onChange={handleChange}
            />
          </div>
        </div>
        <img src={googleMap} alt='Google Map' />
      </div>
    </div>
  ) : (
    <div className='flex gap-2'>
      <div className='flex flex-col flex-auto justify-start h-auto py-[2px]'>
        <div className='flex gap-3'>
          <div className='flex items-start gap-2'>
            <LocationOn sx={{ fontSize: 30 }} className='!h-14' />
            <TextField
              variant='filled'
              label='ZIP'
              className='!w-20'
              name='zip'
              error={!!error?.zip}
              helperText={isNullOrUndefined(error.zip).error ? " " : error.zip}
              value={addressInfor.zip}
              onChange={handleChange}
            />
          </div>
          <TextField
            label='Location'
            className='flex-1'
            name='location'
            error={!!error?.location}
            helperText={isNullOrUndefined(error.location).error ? " " : error.location}
            value={addressInfor.location}
            variant='filled'
            onChange={handleChange}
          />
        </div>
        <div className='flex gap-3'>
          <div className='flex items-start gap-2 flex-1'>
            <Home sx={{ fontSize: 30 }} className='!h-14' />
            <TextField
              variant='filled'
              label='Street'
              className='!w-full'
              name='street'
              error={!!error?.street}
              helperText={isNullOrUndefined(error.street).error ? " " : error.street}
              value={addressInfor.street}
              onChange={handleChange}
            />
          </div>
          <TextField
            label='Number'
            className='!w-24'
            variant='filled'
            name='number'
            error={!!error?.number}
            helperText={isNullOrUndefined(error.number).error ? " " : error.number}
            value={addressInfor.number}
            onChange={handleChange}
          />
        </div>
      </div>
      <img src={googleMap} alt='Google Map' />
    </div>
  );
}
