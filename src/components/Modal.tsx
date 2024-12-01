import { Box } from "@mui/system";
import LinearProgressWithLabel from "./ProgressWithValue";
import { Check, Close } from "@mui/icons-material";
const Modal = ({
  //   title,
  onClose,
  data,
  //   setData,
  children,
  progress,
}: {
  title: string;
  onClose: () => void;
  data: any;
  setData: React.Dispatch<any>;
  children: React.ReactNode;
  progress: number;
}) => {
  console.log(data);
  return (
    <div className='fixed w-screen h-screen flex justify-center top-0 bg-black bg-opacity-40'>
      <div className='relative flex flex-col w-[90%] h-[500px] justify-between items-center mt-40 py-2 px-[2%] max-w-[800px] mx-auto bg-white'>
        {data.successInquiry && (
          <div className='absolute top-0 left-0 right-0 h-20 bg-[#63b65b] flex justify-center items-center gap-2 text-white text-lg font-extrabold z-50'>
            <Check />
            <p>Thank you for your inquiry.</p>
            <div className='absolute top-20 rotate-180 w-0 h-0 border-l-8 border-r-8 border-b-8 border-transparent border-b-[#63b65b]' />
          </div>
        )}
        <button
          className='absolute top-0 -translate-y-full right-0 bg-black text-white rounded-none px-1 py-0.5'
          onClick={onClose}>
          <Close fontSize='medium' />
        </button>
        <Box width='100%'>
          <LinearProgressWithLabel value={progress} />
        </Box>
        <div className="text-center">
          <pre className='font-extrabold text-2xl'>{data?.title}</pre>
          <span className="text-gray-500 text-lg">{data?.semiTitle}</span>
        </div>
        {children}
      </div>
    </div>
  );
};

export default Modal;
