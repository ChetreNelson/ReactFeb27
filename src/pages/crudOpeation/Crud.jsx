import React, { useEffect, useState } from "react";
import { Employee } from "./Employee";

const Crud = () => {
  const [data, setData] = useState([]);
  const [firstName, setFirstName] = useState("");
  const [salary, setSalary] = useState();
  const [age, setAge] = useState();
  const [updatest, setUpdatest] = useState(false);
  const [id, setId] = useState();

  useEffect(() => {
    setData(Employee);
  }, []);

  const handleUpdate = (id) => {
    setUpdatest(true);
    const updateData = data.filter((item) => item.id === id);
    setId(id);
    setFirstName(updateData[0].name);
    setAge(updateData[0].age);
    setSalary(updateData[0].salary);
  };

  const handleDelete = (idtoDelete) => {
    if (idtoDelete > 0) {
      if (window.confirm("are you sure you want to delete data?")) {
        const newData = data.filter((item) => item.id !== idtoDelete);
        setData(newData);
      }
    }
  };

  const saveHandler = () => {
    const newarr = [...data];
    const newObj = {
      id: newarr.length + 101,
      name: firstName,
      age: age,
      salary: salary,
    };
    newarr.push(newObj);
    setData(newarr);
    clearHandler();
  };

  const saveEditHandler = () => {
    const index = data.map((item) => item.id).indexOf(id);
    console.log(index);
    const dt = [...data];
    dt[index].name = firstName;
    dt[index].age = age;
    dt[index].salary = salary;
    setData(dt);
    clearHandler();
  };

  const clearHandler = () => {
    setFirstName("");
    setAge("");
    setSalary("");
    setUpdatest(false);
  };

  return (
    <div
      className="flex flex-col justify-center items-center 
     h-screen mt-5 w-full "
    >
      <div className="mb-2 space-x-3">
        <label>Name:</label>
        <input
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          className="border-2 border-black outline-none rounded-lg px-2 py-1"
        />
        <label>Age:</label>
        <input
          type="text"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          className="border-2 border-black  outline-none rounded-lg px-2 py-1"
        />
        <label>Salary:</label>
        <input
          type="text"
          value={salary}
          onChange={(e) => setSalary(e.target.value)}
          className="border-2 border-black  outline-none  rounded-lg px-2 py-1"
        />
        {!updatest ? (
          <button
            className="border border-gray-700 px-2 py-1 
         bg-blue-500 hover:bg-blue-700
       rounded-lg transition duration-300 ease-in-out text-white "
            onClick={() => saveHandler()}
          >
            Save
          </button>
        ) : (
          <button
            className="border border-gray-700 px-2 py-1 
           bg-blue-500 hover:bg-blue-700
         rounded-lg transition duration-300 ease-in-out text-white "
            onClick={() => saveEditHandler()}
          >
            EditSave
          </button>
        )}

        <button
          className="border border-gray-700 px-2 py-1 text-white 
           bg-blue-500 hover:bg-blue-700
         rounded-lg transition duration-300 ease-in-out"
          onClick={() => clearHandler()}
        >
          Clear
        </button>
      </div>
      <table className="border-2 shadow-2xl  border-cyan-800 w-1/2">
        <thead>
          <tr>
            <th className="bg-slate-400   py-3  ">ID</th>
            <th className="bg-slate-500   py-3 ">Name</th>
            <th className="bg-slate-600   py-3 ">Age</th>
            <th className="bg-slate-700 py-3 ">Salary</th>
            <th className="bg-slate-800   py-3 text-white ">Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id} className="text-center cursor-pointer ">
              <td className="hover:bg-slate-300 bg-cyan-400 ">{item.id}</td>
              <td className="hover:bg-slate-300 bg-cyan-500">{item.name}</td>
              <td className="hover:bg-slate-300 bg-cyan-600">{item.age}</td>
              <td className="hover:bg-slate-300 bg-cyan-700">{item.salary}</td>
              <td className=" bg-cyan-200 py-2 ">
                <button
                  onClick={() => handleUpdate(item.id)}
                  className="border border-black  bg-blue-700 text-white 
                px-2 py-2 mr-2 rounded-2xl transition duration-300 ease-in-out
                 hover:bg-blue-950
                 active:bg-purple-500 active:text-white"
                >
                  Update
                </button>
                <button
                  onClick={() => handleDelete(item.id)}
                  className="border border-gray-600 px-2 py-2 
                  rounded-2xl  bg-red-600 text-white 
                  transition duration-300 ease-in-out hover:bg-red-900 hover:text-white
                active:bg-purple-600 active:text-white"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Crud;
