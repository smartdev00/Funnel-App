import { TextField, Slider } from "@mui/material";
import ground from "../assets/large-ground.svg";
import { useEffect } from "react";
import { isInteger } from "../utils/function";
import { ReactSVG } from "react-svg";
import { useColorContext } from "../provider/ColorProvider";
interface RealEstate {
  [key: string]: number | string | null | undefined | object; // Adjust this type based on your actual data structure
}

const Ground = ({
  type,
  min,
  max,
  realEstate,
  setRealEstate,
  error,
  setError,
}: {
  type: string;
  min: number;
  max: number;
  realEstate: RealEstate;
  setRealEstate: React.Dispatch<React.SetStateAction<RealEstate>>;
  error: any;
  setError: React.Dispatch<React.SetStateAction<any>>;
}) => {
  const unit = type === "fast_built_year" ? "" : "m²";
  const placeholder = type === "fast_built_year" ? "Year" : "Area";
  const { strokeColor } = useColorContext();

  useEffect(() => {
    setRealEstate({ ...realEstate, [type]: realEstate[type] ?? min });
  }, [type]);

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (!isInteger(e.target.value)) {
      setError("Must be integer.");
      return;
    }
    setError("");
    let temp = Number(e.target.value);
    if (temp > max) {
      setError({ [type]: `Less than max(${max})` });
    }
    if (temp < min) {
      setError({ [type]: `Greater than min(${min})` });
    }
    setRealEstate({ ...realEstate, [type]: temp });
  };

  const onSlideChange = (_: Event, value: number | number[]) => {
    setRealEstate({ ...realEstate, [type]: value as number });
    setError("");
  };
  return type === "personal_ground_area" ? (
    <div className='border flex flex-col justify-center items-center px-5 py-3'>
      <ReactSVG
        src={ground}
        className='w-28'
        beforeInjection={(svg) => {
          svg.setAttribute("style", `fill: ${strokeColor};}`);
        }}
      />
      <div className='flex items-center justify-between w-full'>
        <p>Land Area</p>
        <TextField
          id='filled-basic'
          value={(realEstate[type] as string) ?? min}
          className='w-40'
          label={placeholder}
          size='small'
          variant='filled'
          onChange={onChange}
          error={!!error[type]}
          helperText={error[type]}
        />
      </div>
      <Slider
        value={(realEstate[type] as number) ?? min}
        onChange={onSlideChange}
        className='!w-72 !h-2'
        aria-label='Default'
        valueLabelDisplay='auto'
        min={min}
        max={max}
      />
    </div>
  ) : (
    <div className='flex flex-col justify-center gap-10 items-center px-5 py-3'>
      <Slider
        className='!w-72 !h-2'
        value={(realEstate[type] as number) ?? min}
        aria-label='Default'
        valueLabelDisplay='auto'
        onChange={onSlideChange}
        marks={[
          { value: min, label: `${min} ${unit}` },
          { value: max, label: `${max} ${unit}` },
        ]}
        min={min}
        max={max}
      />
      <div className='flex items-center justify-center w-full'>
        <TextField
          id='filled-basic'
          className='w-40'
          value={(realEstate[type] as string) ?? min}
          label={placeholder}
          size='small'
          variant='filled'
          onChange={onChange}
          error={!!error[type]}
          helperText={error[type]}
        />
      </div>
    </div>
  );
};

export default Ground;
