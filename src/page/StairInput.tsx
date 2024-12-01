import { Add, Remove } from "@mui/icons-material";

export default function StairInput() {
  return (
    <div>
      <div className='flex'>
        <button className='w-12 h-12 rounded-none bg-blue-700 text-white flex justify-center items-center'>
          <Add fontSize='medium' />
        </button>
        <input type='text' className='w-24 h-12 text-center bg-gray-100 outline-none shadow-lg' />
        <button className='w-12 h-12 rounded-none bg-blue-700 text-white flex justify-center items-center'>
          <Remove fontSize='medium' />
        </button>
      </div>
    </div>
  );
}
