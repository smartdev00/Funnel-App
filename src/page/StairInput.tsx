import { Add, Remove } from "@mui/icons-material";
import { useEffect } from "react";

interface RealEstate {
  [key: string]: number | string | null | undefined | object; // Adjust this type based on your actual data structure
}

export default function StairInput({
  realEstate,
  setRealEstate,
  type,
}: {
  realEstate: RealEstate;
  setRealEstate: React.Dispatch<React.SetStateAction<RealEstate>>;
  type: string;
}) {
  useEffect(() => {
    if (!realEstate[type]) setRealEstate({ ...realEstate, [type]: 1 });
  }, [type]);

  const handleAddClick = () => {
    const temp = realEstate[type] as number;
    setRealEstate({ ...realEstate, [type]: temp + 1 });
  };

  const handleRemoveClick = () => {
    const temp = realEstate[type] as number;
    if (temp > 0) setRealEstate({ ...realEstate, [type]: temp - 1 });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRealEstate({ ...realEstate, [type]: e.target.value });
  };
  return (
    <div>
      <div className='flex'>
        <button
          className='w-12 h-12 rounded-none bg-blue-700 text-white flex justify-center items-center disabled:bg-opacity-40'
          disabled={realEstate[type] === 0}
          onClick={handleRemoveClick}>
          <Remove fontSize='medium' />
        </button>
        <input
          type='text'
          className='w-24 h-12 text-center bg-gray-100 outline-none shadow-lg'
          value={realEstate[type] as string}
          onChange={(e) => handleChange(e)}
        />
        <button
          className='w-12 h-12 rounded-none bg-blue-700 text-white flex justify-center items-center disabled:bg-opacity-40'
          onClick={handleAddClick}>
          <Add fontSize='medium' />
        </button>
      </div>
    </div>
  );
}
