import { useState } from "react";
import { skufdata } from "./SkufData";
function App() {
  const [skuf, setSkuf] = useState<{ img: string; text: string }>();

  const showSkuficha = () => {
    const randomSkuf = skufdata[Math.floor(Math.random() * skufdata.length)];
    const skufich = {
      img: randomSkuf.img,
      text: randomSkuf.text,
    };
    console.log(skufich.text)
    if (randomSkuf.text === skuf?.text) {
      showSkuficha();
      return;
    }
    setSkuf(skufich);
  };

  return (
    <>
      <div className="w-screen h-screen flex flex-col gap-4 items-center text-xl text-white bg-black">
        <h2 className="mt-32">Який ти Скуф сьогодні?</h2>
        <button
          onClick={showSkuficha}
          className="border-2 py-1 px-6 rounded-full hover:opacity-50 duration-300 active:opacity-80"
        >
          Дізнатися
        </button>
        {skuf ? (
          <div className="max-w-[500px] my-4 flex flex-col gap-2 justify-center items-center">
            <p className="text-center text-base font-bold tracking-wide">
              {skuf.text}
            </p>
            <img
              src={skuf.img}
              alt=""
              width={320}
              className="p-1 shadow-lg shadow-white rounded-xl opacity-80 hover:opacity-100 duration-300"
            />
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
}

export default App;
