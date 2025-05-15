import { Link, TextField } from "@mui/material";
import one from "../assets/personal-final-1.svg";
import two from "../assets/personal-final-2.svg";
import three from "../assets/personal-final-3.svg";
import four from "../assets/personal-final-4.svg";
import { useEffect, useState } from "react";
import { ReactSVG } from "react-svg";
import { useColorContext } from "../provider/ColorProvider";
import { getUrl } from "../utils/function";

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

export default function PersonalFinal({
  type,
  realEstate,
  setRealEstate,
}: {
  type: string;
  realEstate: RealEstate;
  setRealEstate: React.Dispatch<React.SetStateAction<RealEstate>>;
}) {
  const { strokeColor } = useColorContext();
  const [telNum, setTelNum] = useState<string>("");
  useEffect(() => {
    setTelNum((realEstate[type] as string) ?? "");
  }, [realEstate]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setRealEstate({ ...realEstate, [type]: e.target.value });
  };

  return (
    <div>
      {type === "personal_buy_final" && (
        <div className='flex flex-col gap-5 items-center'>
          <p className='text-xl text-center'>
            We have thousands of apartments and houses throughout Germany on offer for you.
          </p>
          <div className='flex gap-2 justify-center'>
            <ReactSVG
              src={one}
              beforeInjection={(svg) => {
                svg.setAttribute("style", `stroke: ${strokeColor}; fill: ${strokeColor}`);
              }}
            />
            <ReactSVG
              src={two}
              beforeInjection={(svg) => {
                svg.setAttribute("style", `stroke: ${strokeColor}; fill: ${strokeColor}`);
              }}
            />
            <ReactSVG
              src={three}
              beforeInjection={(svg) => {
                svg.setAttribute("style", `stroke: ${strokeColor}; fill: ${strokeColor}`);
              }}
            />
            <ReactSVG
              src={four}
              beforeInjection={(svg) => {
                svg.setAttribute("style", `stroke: ${strokeColor}; fill: ${strokeColor}`);
              }}
            />
          </div>
          <a
            className='bg-[#2A88FC] text-white text-lg w-1/2 text-center py-3 rounded-xl hover:text-gray-200 transition-all'
            href={getUrl(realEstate)}
            download='funnel.json'>
            Find the right property now
          </a>
        </div>
      )}
      {type === "alternative_phone_number" && (
        <div className='flex flex-col gap-5 items-center'>
          <p className='text-xl text-center'>
            Unfortunately, we do not yet have a Homeday estate agent in your area. We will therefore forward your
            request to our partner network of real estate experts in your region. An expert will contact you shortly on{" "}
            {(realEstate?.recepient_infor as RecepientInfor)?.phoneNumber}.
          </p>
          <div className='flex gap-2 justify-center'>
            <TextField
              label='Alternative Telephone Number'
              variant='filled'
              className='w-96'
              value={telNum}
              onChange={handleChange}
            />
          </div>
          <span className='text-xs leading-relaxed'>
            I accept the terms and conditions and agree to be informed by Homeday GmbH by e-mail and telephone about the
            value of the property. I can object to this at any time by sending an e-mail to{" "}
            <Link href='mailto:widerruf@homeday.de'>widerruf@homeday.de</Link>. I agree that a customer account will be
            set up for me on <Link href='https://my.homeday.de/'>my.homeday.de</Link>, which I can use to view the
            current market price. The Homeday{" "}
            <Link href='https://www.homeday.de/de/datenschutz/'>data protection regulations</Link> apply.
          </span>
          <a
            className='bg-[#2A88FC] text-white text-lg w-1/2 text-center py-3 rounded-xl hover:text-gray-200 transition-all'
            href={getUrl(realEstate)}
            download='funnel.json'>
            Next
          </a>
        </div>
      )}
    </div>
  );
}
