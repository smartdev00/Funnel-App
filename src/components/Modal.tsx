import { CheckText } from "./CheckText";
import Card from "./Card";

const Modal = ({ title, onClose }: { title: string; onClose: () => void }) => {
  return (
    <div className='fixed w-screen h-screen top-10 bg-black bg-opacity-40'>
      <div className='relative flex flex-col w-[90%] justify-center items-center mt-40 py-2  max-w-[800px] mx-auto bg-white'>
        <button className='absolute top-0 right-0 bg-black text-white rounded-none px-1 py-0.5' onClick={onClose}>
          Close
        </button>
        <p>{title}</p>
        <div className='flex items-center justify-evenly'>
          <CheckText text='Hochwertige Analyse' />
          <CheckText text='Aktuelle Marktpreise' />
          <CheckText text='100% kostenlos & unverbindlich' />
        </div>
      </div>
    </div>
  );
};

export default Modal;
