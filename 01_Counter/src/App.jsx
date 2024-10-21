import { useState } from "react";
// import './App.css'

function App() {
  const [count, setCount] = useState(0);



  const addValue = () => {
    setCount(count+1)
  }
  const removeValue = () => {
    setCount(count-1)
  }

  return (
    <div className="w-full h-screen bg-slate-700 flex justify-center items-center">
      <div className="w-[400px] h-[200px] rounded-md bg-blue-400 flex flex-col p-5 justify-start items-center gap-5">
        <h2 className="text-3xl font-bold">Counter App</h2>
        <h4 className="text-2xl font-semibold">Count: {count}</h4>
        <div>
          <button className="bg-blue-700 rounded-sm mx-2 px-2 py-1" onClick={() => removeValue()}>Decriment</button>
          <button className="bg-blue-700 rounded-sm mx-2 px-2 py-1" onClick={() => addValue()}>Incriment</button>
        </div>
      </div>
    </div>
  );
}

export default App;
