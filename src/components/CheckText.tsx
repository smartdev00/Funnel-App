import check from "../assets/check.svg";

export const CheckText = ({ text }: { text: string }) => {
  return (
    <div className='flex gap-1'>
      <img src={check} className='fill-blue-500' />
      <p>{text}</p>
    </div>
  );
};
