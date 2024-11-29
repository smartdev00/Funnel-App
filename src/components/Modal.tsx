import { Box } from "@mui/system";
import LinearProgressWithLabel from "./ProgressWithValue";
const Modal = ({
  title,
  onClose,
  data,
  setData,
  children,
}: {
  title: string;
  onClose: () => void;
  data: any;
  setData: React.Dispatch<any>;
  children: React.ReactNode;
}) => {
  console.log(data);
  return (
    <div className='fixed w-screen h-screen flex justify-center top-10 bg-black bg-opacity-40'>
      <div className='relative flex flex-col w-[90%] h-[500px] justify-start gap-10 items-center mt-40 py-2 px-[5%] max-w-[800px] mx-auto bg-white'>
        <button className='absolute top-0 right-0 bg-black text-white rounded-none px-1 py-0.5' onClick={onClose}>
          Close
        </button>
        <Box width='100%'>
          <LinearProgressWithLabel value={20} />
        </Box>
        <p className='font-extrabold text-2xl'>{data.title}</p>
        {children}
      </div>
    </div>
  );
};

export default Modal;
