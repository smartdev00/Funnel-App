import { useColorContext } from "../provider/ColorProvider";

export default function ColorPicker({ className }: { className: string }) {
  const { bgColor, textColor, strokeColor, setBgColor, setTextColor, setStrokeColor } =
    useColorContext();

  return (
    <div className={`${className} flex flex-col gap-1 border bg-white border-black p-2`}>
      <div className='flex gap-2'>
        <div className='flex flex-col gap-1'>
          <div className='flex gap-2 justify-between items-center w-[200px]'>
            <p>Back Color: </p>
            <input
              className='border border-black outline-none px-2 py-1 text-xs h-6 w-20'
              value={bgColor}
              onChange={(e) => setBgColor(e.target.value)}
            />
          </div>
          <div className='flex gap-2 justify-between items-center w-[200px]'>
            <p>Text Color: </p>
            <input
              className='border border-black outline-none px-2 py-1 text-xs h-6 w-20'
              value={textColor}
              onChange={(e) => setTextColor(e.target.value)}
            />
          </div>
        </div>
        <div
          className={`w-[52px] h-[52px] border-2 border-black text-3xl flex justify-center items-center`}
          style={{ backgroundColor: bgColor, color: textColor }}>
          A
        </div>
      </div>
      <div className='flex gap-2'>
        <div className='flex gap-2 justify-between items-center w-[200px]'>
          <p>Stroke Color: </p>
          <input
            className='border border-black outline-none px-2 py-1 text-xs h-6 w-20'
            value={strokeColor}
            onChange={(e) => setStrokeColor(e.target.value)}
          />
        </div>
        <div
          className={`w-6 h-6 border-2 border-black text-3xl flex justify-center items-center`}
          style={{ backgroundColor: strokeColor }}
        />
      </div>
    </div>
  );
}
