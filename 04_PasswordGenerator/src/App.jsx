import { useState, useEffect, useCallback, useRef } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [charAllowed, setCharAllowed] = useState(false);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordRef = useRef(null)

  const generatePassword = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (charAllowed) str += "!@#$%^&*()_+";
    if (numberAllowed) str += "0123456789";

    for (let i = 0; i < length; i++) {
      const char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, numberAllowed, charAllowed]);

  const copyPasswordToClipboard = () => {
    window.navigator.clipboard.writeText(password)
    passwordRef.current?.select()
    
  }

  useEffect(() => {
    generatePassword();
  }, [length, charAllowed, numberAllowed]);

  return (
    <div className="w-full h-screen bg-slate-900 flex justify-center items-center mx-auto">
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
        <h1 className="text-white text-center my-3">Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            className="outline-none w-full py-1 px-3"
            placeholder="Password"
            value={password}
            ref={passwordRef}
            readOnly
          />
          <button 
            onClick={copyPasswordToClipboard}
            className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0">
            copy
          </button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={6}
              max={30}
              className="cursor-pointer"
              onChange={(e) => setLength(e.target.value)}
              value={length}
            />
            <label htmlFor="length">Length: {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              className="cursor-pointer"
              type="checkbox"
              onChange={() => {
                setNumberAllowed((prev) => !prev);
              }}
              name=""
              id=""
            />
            <label htmlFor="number">Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              className="cursor-pointer"
              type="checkbox"
              defaultChecked={charAllowed}
              onChange={() => {
                setCharAllowed((prev) => !prev);
              }}
              name=""
              id=""
            />
            <label htmlFor="charInput">Character</label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
