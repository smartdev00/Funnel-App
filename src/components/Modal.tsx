import { CheckText } from "./CheckText";
import Card from "./Card";

const Modal = ({
  title,
  onClose,
  data,
  setData,
}: {
  title: string;
  onClose: () => void;
  data: any;
  setData: React.Dispatch<any>;
}) => {
  console.log(data);
  return (
    <div className='fixed w-screen h-screen flex justify-center top-10 bg-black bg-opacity-40'>
      <div className='relative flex flex-col w-[90%] h-[500px] justify-between items-center mt-40 py-2  max-w-[800px] mx-auto bg-white'>
        <button className='absolute top-0 right-0 bg-black text-white rounded-none px-1 py-0.5' onClick={onClose}>
          Close
        </button>
        <p className='font-extrabold text-2xl'>{data.title}</p>

        <div className='w-[90%]'>
          <div className='flex flex-wrap flex-1 gap-5 justify-start'>
            {data.items.map((item: any, index: number) => {
              return (
                <Card key={index} onClick={() => setData(item.next)} className='flex-1 w-[200px] h-[150px]'>
                  <img className='w-16' src={item.icon} />
                  <p className='font-bold text-sm'>{item.title}</p>
                </Card>
              );
            })}
          </div>
        </div>

            <button>
                prev
            </button>
        <div className='flex items-center justify-evenly'>
          {data?.checks?.map((check: any) => {
            return <CheckText text={check} key={check} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Modal;
