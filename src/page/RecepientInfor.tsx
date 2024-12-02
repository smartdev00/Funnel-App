import estimation from "../assets/estimation_image.png";
import { TextField } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useEffect, useState } from "react";

interface RealEstate {
  [key: string]: number | string | null | undefined | object; // Adjust this type based on your actual data structure
}

interface Estate {
  gender: string;
  name: string;
  phoneNumber: string;
  email: string;
}

const RecepientInfor = ({
  type,
  onClick,
  realEstate,
  setRealEstate,
}: {
  type: string;
  value?: string;
  onClick: () => void;
  realEstate: RealEstate;
  setRealEstate: React.Dispatch<React.SetStateAction<RealEstate>>;
}) => {
  const [recepientData, setRecepientData] = useState<{
    gender: string;
    name: string;
    phoneNumber: string;
    email: string;
  }>({
    gender: "Male",
    name: "",
    phoneNumber: "",
    email: "",
  });

  useEffect(() => {
    const estate = realEstate[type] as Estate | null;

    if (estate) {
      setRecepientData({
        ...recepientData,
        gender: estate.gender || "Male",
        name: estate.name || "",
        phoneNumber: estate.phoneNumber || "",
        email: estate.email || "",
      });
    } else {
      setRecepientData({
        ...recepientData,
        gender: "Male",
        name: "",
        phoneNumber: "",
        email: "",
      });
    }
  }, [realEstate, type]);

  const handleGenderChange = (e: SelectChangeEvent<string>) => {
    setRecepientData({ ...recepientData, gender: e.target.value });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setRecepientData({ ...recepientData, [e.target.name]: e.target.value });
  };

  const handleClick = () => {
    setRealEstate({ ...realEstate, [type]: recepientData });
    onClick();
  };

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
                value={recepientData.gender}
                onChange={handleGenderChange}>
                <MenuItem value={"Male"}>Male</MenuItem>
                <MenuItem value={"Female"}>Female</MenuItem>
              </Select>
            </FormControl>
            <TextField
              label='Recepient Name'
              variant='filled'
              className='w-full'
              name='name'
              value={recepientData.name}
              onChange={handleChange}
            />
          </div>
          <TextField
            label='Telephone number*'
            variant='filled'
            name='phoneNumber'
            type='tel'
            value={recepientData.phoneNumber}
            onChange={handleChange}
          />
          <TextField
            label='Email*'
            variant='filled'
            type='email'
            name='email'
            value={recepientData.email}
            onChange={handleChange}
          />
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
      <button className='bg-gray-200 self-center mt-2' onClick={handleClick}>
        Receive a free evaluation
      </button>
    </div>
  );
};

export default RecepientInfor;
