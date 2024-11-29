import { TextField } from "@mui/material";
import one from "../assets/personal-final-1.svg";
import two from "../assets/personal-final-2.svg";
import three from "../assets/personal-final-3.svg";
import four from "../assets/personal-final-4.svg";

export default function PersonalFinal({ data }: { data: any }) {
  return (
    <div>
      {data.id === "personal_buy_final" && (
        <div className='flex flex-col gap-5 items-center'>
          <p className='text-xl text-center'>
            We have thousands of apartments and houses throughout Germany on offer for you.
          </p>
          <div className='flex gap-2 justify-center'>
            <img src={one} alt='1' />
            <img src={two} alt='1' />
            <img src={three} alt='1' />
            <img src={four} alt='1' />
          </div>
          <button className='bg-[#2A88FC] text-white text-lg w-1/2'>Find the right property now</button>
        </div>
      )}
      {data.id === "personal_sell_final" && (
        <div className='flex flex-col gap-5 items-center'>
          <p className='text-xl text-center'>
            Unfortunately, we do not yet have a Homeday estate agent in your area. We will therefore forward your
            request to our partner network of real estate experts in your region. An expert will contact you shortly on
            0611 5820.
          </p>
          <div className='flex gap-2 justify-center'>
            <TextField label='Alternative Telephone Number' variant='filled' className='w-96' />
          </div>
          <span className="text-xs leading-relaxed">
            I accept the terms and conditions and agree to be informed by Homeday GmbH by e-mail and telephone about the
            value of the property. I can object to this at any time by sending an e-mail to widerruf@homeday.de. I agree
            that a customer account will be set up for me on my.homeday.de, which I can use to view the current market
            price. The Homeday data protection regulations apply.
          </span>
          <button className='bg-[#2A88FC] text-white text-lg px-10'>Next</button>
        </div>
      )}
    </div>
  );
}
