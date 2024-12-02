import { isValidColor } from "../utils/function";
import { useColorContext } from "../provider/ColorProvider";

export default function ColorPicker({ className }: { className: string }) {
  const { bgColor, textColor, fillColor, setBgColor, setTextColor, setFillColor } = useColorContext();

  return (
    <div className={`${className} flex flex-col gap-1 border bg-white border-black p-2`}>
      {/* <div className='flex gap-1'>
        {colors.map((color, index: number) => {
          return (
            <div
              key={index}
              className={`${color.bgColor} ${color.textColor} ${
                color.index === style.index ? "border-red-600" : "border-black"
              } w-10 h-10 flex justify-center items-center border-2 text-xl font-bold hover:bg-opacity-60 transition-colors hover:cursor-pointer`}
              onClick={() => setStyle(color)}>
              A
            </div>
          );
        })}
      </div> */}
      <div className='flex gap-2'>
        <div className='flex flex-col gap-1'>
          <div className='flex gap-2 justify-between items-center w-[170px]'>
            <p>Back Color: </p>
            <input
              className='border border-black outline-none px-2 py-1 text-xs h-6 w-20'
              value={bgColor}
              onChange={(e) => setBgColor(e.target.value)}
            />
          </div>
          <div className='flex gap-2 justify-between items-center w-[170px]'>
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
        <div className='flex gap-2 justify-between items-center w-[170px]'>
          <p>Fill Color: </p>
          <input
            className='border border-black outline-none px-2 py-1 text-xs h-6 w-20'
            value={fillColor}
            onChange={(e) => setFillColor(e.target.value)}
          />
        </div>
        <div
          className={`w-6 h-6 border-2 border-black text-3xl flex justify-center items-center`}
          style={{ backgroundColor: fillColor }}
        />
      </div>
    </div>
  );
}
