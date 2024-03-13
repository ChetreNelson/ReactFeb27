import React, { useCallback, useEffect, useState } from "react";

const Practice1Random = () => {
  const [length, setLength] = useState(0);
  const [number, setNumber] = useState(false);
  const [character, setCharacter] = useState(false);
  const [password, setPassword] = useState("");

  const randomNumberGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (number) {
      str = str + "0123456789";
    }
    if (character) {
      str = str + "!@#$%^&*()_+[]{}/";
    }
    for (let i = 0; i < length; i++) {
      const char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, number, character]);

  useEffect(() => {
    randomNumberGenerator();
  }, [length, number, character, randomNumberGenerator]);
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center bg-slate-500">
      <div className=" w-72 bg-white   rounded-2xl p-8 shadow-2xl ">
        <input
          className=" w-auto mb-4 px-2 py-2 border border-slate-800 rounded-lg"
          type="text"
          value={password}
          placeholder="Passowrd"
          readOnly
        />
        <div className="mb-2 px-1 py-2  ">
          <label htmlFor="">Length : </label>
          <input
            type="range"
            min={0}
            max={50}
            value={length}
            onChange={(e) => setLength(e.target.value)}
          />
          <span>{length}</span>
        </div>

        <div className="mb-4 flex items-center">
          <input
            type="checkbox"
            checked={number}
            onClick={() => {
              setNumber((prev) => !prev);
            }}
          />
          <label>Include Number</label>
        </div>
        <div className="mb-4 flex items-center">
          <input
            type="checkbox"
            checked={character}
            onClick={() => {
              setCharacter(!character);
            }}
          />
          <label>Include Special Characters</label>
        </div>
      </div>
    </div>
  );
};

export default Practice1Random;
