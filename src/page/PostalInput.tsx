import { LocationOn } from "@mui/icons-material";
import map from "../assets/map.svg";
import { TextField } from "@mui/material";

const PostalInput = ({ value }: { value?: number }) => {
  return (
    <div className='flex items-center gap-10'>
      <img alt='map' src={map} />
      <div className='flex items-start gap-2'>
        <LocationOn sx={{ fontSize: 30 }} className='!h-14' />
        <div className='flex flex-col gap-4'>
          <TextField variant='filled' label='Enter postal code' value={value} />
          <p>The location of your property forms the basis for an accurate valuation.</p>
        </div>
      </div>
    </div>
  );
};

export default PostalInput;
