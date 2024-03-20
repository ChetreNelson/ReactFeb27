import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const CrudsHome = () => {
  const [data, setData] = useState([]);

  const getData = () => {
    axios
      .get("http://localhost:3001/students")
      .then((res) => setData(res.data))
      .catch((err) => console.log);
  };

  const handleDelete = (id) => {
    const confirm = window.confirm("do you want to delete the record?");
    if (confirm) {
      axios.delete("http://localhost:3001/students/" + id).then((res) => {
        getData();
      });
    }
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="flex flex-col justify-center items-center w-full h-screen bg-slate-300">
      <h1 className="text-2xl font-bold ">List Of Users</h1>
      <div className="w-3/4  rounded-xl bg-white shadow-lg p-2">
        <div className=" w-full mb-2 flex justify-end ">
          <Link
            to={"/create"}
            className="border border-green-500 bg-green-500  rounded-lg px-2 py-2
            "
          >
            ADD+
          </Link>
        </div>
        <table
          className="w-full text-sm text-left rtl:text-right
         text-gray-500 "
        >
          <thead className="text-2xl text-gray-700  bg-slate-400 ">
            <tr>
              <th>ID</th>
              <th>NAME</th>
              <th>EMAIL</th>
              <th>PHONE</th>
              <th>ACTION</th>
            </tr>
          </thead>
          <tbody>
            {data.map((values, index) => (
              <tr key={index}>
                <td>{values.id}</td>
                <td>{values.name}</td>
                <td>{values.email}</td>
                <td>{values.phone}</td>
                <td>
                  <Link
                    to={`/read/${values.id}`}
                    className="border border-slate-600 
                  bg-blue-500 rounded-xl text-white px-2  mt-2 mr-2 py-1"
                  >
                    Read
                  </Link>
                  <Link
                    to={`/update/${values.id}`}
                    className="border border-slate-600 
                  bg-blue-800 rounded-xl text-white px-2 mt-2 mr-2 py-1"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => {
                      handleDelete(values.id);
                    }}
                    className="border border-slate-600
                  bg-red-500 text-white rounded-xl px-2  mt-2 py-1"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CrudsHome;
