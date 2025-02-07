import { useState } from "react";

export default function News() {
  const [color, setColor] = useState("");

  return (
    <div className={`flex justify-around h-screen bg-${color}-800 mt-5`}>
      <div
        onClick={() => setColor("red")}
        className="h-[50px] w-[50px] flex items-center justify-center bg-red-800 text-white">
        Red
      </div>
      <div
        onClick={() => setColor("blue")}
        className="h-[50px] w-[50px] flex items-center justify-center bg-blue-800 text-white">
        Blue
      </div>
      <div
        onClick={() => setColor("green")}
        className="h-[50px] w-[50px] flex items-center justify-center bg-green-800 text-white">
        Green
      </div>
      <div
        onClick={() => setColor("pink")}
        className="h-[50px] w-[50px] flex items-center justify-center bg-pink-800 text-white">
        pink
      </div>
    </div>
  );
}