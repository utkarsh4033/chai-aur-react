import { useState } from "react";

function App() {
  const [color, setcolor] = useState("olive");

  return (
    <div
      className="w-full h-screen duration-200 "
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-4 py-2 rounded-3xl">
          <button
            onClick={() => setcolor("red")}
            className="outline-none px-4 py-1 text-white rounded-2xl shadow-lg"
            style={{ backgroundColor: "red" }}
          >
            red
          </button>
          <button
            onClick={() => setcolor("green")}
            className="outline-none px-4 py-1 text-white rounded-2xl shadow-lg"
            style={{ backgroundColor: "green" }}
          >
            green
          </button>
          <button
            onClick={() => setcolor("blue")}
            className="outline-none px-4 py-1 text-white rounded-2xl shadow-lg"
            style={{ backgroundColor: "blue" }}
          >
            blue
          </button>
          <button
            onClick={() => setcolor("brown")}
            className="outline-none px-4 py-1 text-white rounded-2xl shadow-lg"
            style={{ backgroundColor: "brown" }}
          >
            brown
          </button>
          <button
            onClick={() => setcolor("black")}
            className="outline-none px-4 py-1 text-white rounded-2xl shadow-lg"
            style={{ backgroundColor: "black" }}
          >
            black
          </button>
          <button
            onClick={() => setcolor("grey")}
            className="outline-none px-4 py-1 text-white rounded-2xl shadow-lg"
            style={{ backgroundColor: "grey" }}
          >
            grey
          </button>
          <button
            onClick={() => setcolor("violet")}
            className="outline-none px-4 py-1 text-white rounded-2xl shadow-lg"
            style={{ backgroundColor: "violet" }}
          >
            violet
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
