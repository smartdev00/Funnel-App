import { Add, Remove } from "@mui/icons-material";
import { TextField } from "@mui/material";

export default function StairInput() {
  return (
    <div>
      <div className='flex'>
        <button className='w-12 rounded-none bg-blue-700 h-12 flex justify-center items-center'>
          <Add fontSize='medium' />
        </button>
        <input type='text' className='bg-gray-100 w-24 h-12' />
        <button className='w-12 h-12 flex justify-center items-center'>
          <Remove fontSize="medium" />
        </button>
      </div>
    </div>
  );
}
