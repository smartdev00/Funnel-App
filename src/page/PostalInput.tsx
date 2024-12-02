import { LocationOn } from "@mui/icons-material";
import map from "../assets/map.svg";
import { TextField } from "@mui/material";
import { isInteger } from "../utils/function";
import { useEffect } from "react";

interface RealEstate {
  [key: string]: number | string | null | undefined | object; // Adjust this type based on your actual data structure
}

const PostalInput = ({
  type,
  realEstate,
  setRealEstate,
  error,
  setError,
}: {
  type: string;
  realEstate: RealEstate;
  setRealEstate: React.Dispatch<React.SetStateAction<RealEstate>>;
  error: any;
  setError: React.Dispatch<React.SetStateAction<any>>;
}) => {
  useEffect(() => {
    setRealEstate({ ...realEstate, [type]: "" });
  }, []);

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (!isInteger(e.target.value)) {
      setError("Postal Code must be integer.");
    } else {
      setRealEstate({ ...realEstate, [type]: e.target.value });
      setError("");
    }
  };

  return type === "personal_ground_postal_input" ? (
    <div className='flex items-center gap-10'>
      <img alt='map' src={map} />
      <div className='flex items-start gap-2'>
        <LocationOn sx={{ fontSize: 30 }} className='!h-14' />
        <div className='flex flex-col gap-4'>
          <TextField
            variant='filled'
            label='Enter postal code'
            value={realEstate[type] ? realEstate[type] : ""}
            error={!!error[type]}
            helperText={error[type]}
            onChange={onChange}
          />
          <p>The location of your property forms the basis for an accurate valuation.</p>
        </div>
      </div>
    </div>
  ) : (
    <div className='flex items-center gap-10'>
      <div className='flex items-start gap-2'>
        <LocationOn sx={{ fontSize: 30 }} className='!h-14' />
        <TextField
          variant='filled'
          label='Enter postal code'
          value={realEstate[type] ? realEstate[type] : ""}
          error={!!error[type]}
          helperText={error[type]}
          onChange={onChange}
        />
      </div>
    </div>
  );
};

export default PostalInput;
