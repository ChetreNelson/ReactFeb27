import React, { useCallback, useEffect, useState } from "react";

const RandomHooks = () => {
  // State variables to manage password length, inclusion of numbers, inclusion of special characters, and the generated password

  const [length, setLength] = useState(0);
  const [num, setNum] = useState(false);
  const [character, setCharacter] = useState(false);
  const [pass, setPass] = useState("");

  // useCallback is used to memoize the passwordGenerator function
  const passwordGenerator = useCallback(() => {
    let password = ""; // Initialize an empty string for the password
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"; // Initialize the string containing alphabets
    // If num is true, append numbers to the string
    if (num) str += "0123456789";
    // If character is true, append special characters to the string
    if (character) str += "!@#%^&*()_+{}[]?";
    // Generate password based on specified length
    for (let i = 1; i < length; i++) {
      const index = Math.floor(Math.random() * str.length + 1);
      password += str.charAt(index); // Append a character from the str string at the randomly generated index
    }
    setPass(password); // Set the generated password
  }, [length, num, character]); // Dependencies for the useCallback hook

  // useEffect hook to generate the password whenever there is a change in length, num, character, or passwordGenerator
  useEffect(() => {
    passwordGenerator();
  }, [length, num, character, passwordGenerator]);

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center bg-gray-200">
      <div className="bg-white rounded-lg p-8 shadow-lg">
        {/* Input range slider to specify the length of the password */}
        <input
          className="w-auto mb-4 px-4 py-2 border border-gray-300 rounded-md"
          type="text"
          value={pass}
          placeholder="Your password"
          readOnly
        />

        <div className="flex items-center mb-4">
          <label className="mr-2">Length:</label>
          {/* Checkbox input to toggle inclusion of numbers in the password */}
          <input
            className="w-32"
            type="range"
            min={0}
            max={50}
            value={length}
            onChange={(e) => setLength(e.target.value)}
          />
          <span className="ml-2">{length}</span>
        </div>

        <div className="flex items-center mb-4">
          <input
            className="mr-2"
            type="checkbox"
            checked={num}
            onChange={() => setNum(!num)} // Toggle the num state
          />
          <label htmlFor="numberChecked">Include Numbers</label>
        </div>

        <div className="flex items-center">
          {/* Checkbox input to toggle inclusion of characters in the password */}
          <input
            className="mr-2"
            type="checkbox"
            checked={character}
            onChange={
              () => setCharacter(!character) // Toggle the character state
            }
          />
          <label htmlFor="charChecked">Include Special Characters</label>
        </div>
      </div>
    </div>
  );
};

export default RandomHooks;
