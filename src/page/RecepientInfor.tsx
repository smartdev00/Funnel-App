import estimation from "../assets/estimation_image.png";
import { Link, TextField } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useEffect, useState } from "react";
import { hasNonNumericSymbols, validateEmail } from "../utils/function";

interface RealEstate {
  [key: string]: number | string | null | undefined | object; // Adjust this type based on your actual data structure
}

interface RecepientInfor {
  gender: string;
  name: string;
  phoneNumber: string;
  email: string;
  accept: boolean;
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
  const [recepientData, setRecepientData] = useState<RecepientInfor>({
    gender: "Male",
    name: "",
    phoneNumber: "",
    email: "",
    accept: false,
  });

  const [error, setError] = useState({
    name: " ",
    phoneNumber: " ",
    email: " ",
    accept: " ",
  });

  useEffect(() => {
    const estate = realEstate[type] as RecepientInfor | null;

    if (estate) {
      setRecepientData({
        gender: estate.gender || "Male",
        name: estate.name || "",
        phoneNumber: estate.phoneNumber || "",
        email: estate.email || "",
        accept: estate.accept || false,
      });
    } else {
      setRecepientData({
        gender: "Male",
        name: "",
        phoneNumber: "",
        email: "",
        accept: false,
      });
    }
  }, [realEstate, type]);

  const handleGenderChange = (e: SelectChangeEvent<string>) => {
    setRecepientData({ ...recepientData, gender: e.target.value });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setRecepientData({ ...recepientData, [e.target.name]: e.target.value });
    setError({ ...error, [e.target.name]: " " });
  };

  const handleClick = () => {
    let hasError = false; // Flag to track if there are any errors
    const newError = { ...error }; // Create a copy of the current error state

    // Validate email
    if (recepientData.email.trim() === "") {
      newError.email = "This is a mandatory field.";
      hasError = true;
    } else {
      newError.email = " ";
    }

    if (!validateEmail(recepientData.email.trim())) {
      newError.email = "Invalid email format.";
      hasError = true;
    } else {
      newError.email = " ";
    }

    // Validate phone number
    if (recepientData.phoneNumber === "") {
      newError.phoneNumber = "This is a mandatory field.";
      hasError = true;
    } else if (hasNonNumericSymbols(recepientData.phoneNumber)) {
      newError.phoneNumber = "Invalid phone number.";
      hasError = true;
    } else {
      newError.phoneNumber = " ";
    }

    // Validate name
    if (recepientData.name.trim() === "") {
      newError.name = "This is a mandatory field.";
      hasError = true;
    } else {
      newError.name = " ";
    }

    // Validate accept checkbox
    if (!recepientData.accept) {
      newError.accept = "This is a mandatory field.";
      hasError = true;
    }

    // Set error state only once
    setError(newError);

    // Proceed only if there are no errors
    if (!hasError) {
      setRealEstate({ ...realEstate, [type]: recepientData });
      onClick();
    }
  };

  const handleCheckboxClicked = () => {
    setRecepientData({ ...recepientData, accept: !recepientData.accept });
    if (!recepientData.accept) setError({ ...error, accept: "" });
  };

  return (
    <div className='flex flex-col items-start w-full flex-auto'>
      <div className='flex items-start gap-10 w-full h-[232px]'>
        <div className='flex flex-col justify-start h-full flex-1 py-3'>
          <div className='flex gap-2 justify-center items-start'>
            <FormControl variant='filled' sx={{ minWidth: 100 }}>
              <InputLabel id='demo-simple-select-filled-label'>Gender</InputLabel>
              <Select
                labelId='demo-simple-select-filled-label'
                id='demo-simple-select-filled'
                size='small'
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
              size='small'
              error={error.name !== " "}
              helperText={error.name}
              value={recepientData.name}
              onChange={handleChange}
            />
          </div>
          <TextField
            label='Telephone number*'
            variant='filled'
            name='phoneNumber'
            size='small'
            type='tel'
            error={error.phoneNumber !== " "}
            helperText={error.phoneNumber}
            value={recepientData.phoneNumber}
            onChange={handleChange}
          />
          <TextField
            label='Email*'
            variant='filled'
            size='small'
            type='email'
            name='email'
            error={error.email !== " "}
            helperText={error.email}
            value={recepientData.email}
            onChange={handleChange}
          />
        </div>
        <img alt='map' src={estimation} className='w-80' />
      </div>
      <div className='flex gap-2'>
        <input
          type='checkbox'
          className='mt-[2px] self-start'
          checked={recepientData.accept}
          onChange={handleCheckboxClicked}
        />
        <div className='flex flex-col'>
          <span className='text-xs leading-tight'>
            I accept the terms and conditions and agree to be informed by Homeday GmbH by e-mail and telephone about the
            value of the property. I can object to this at any time by sending an e-mail to{" "}
            <Link href='mailto:widerruf@homeday.de'>widerruf@homeday.de</Link>. I agree that a customer account will be
            set up for me on <Link href='https://my.homeday.de/'>my.homeday.de</Link>, which I can use to view the
            current market price. The Homeday <Link href='https://www.homeday.de/de/datenschutz/'>privacy policy</Link>{" "}
            applies.
          </span>
          <span className='text-red-600 text-xs'>{error.accept}</span>
        </div>
      </div>
      <button className='bg-gray-200 self-center mt-2' onClick={handleClick}>
        Receive a free evaluation
      </button>
    </div>
  );
};

export default RecepientInfor;
