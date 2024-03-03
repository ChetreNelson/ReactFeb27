import React, { useEffect, useState } from "react";
import axios from "axios";
function ApiHitAxios() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/comments")
      .then((response) => {
        setData(response.data);
      });
  }, []); 

  return (
    <div>
      {/* <ul>
        {data.map((post) => (
          <li key={post.id}>{post.email}</li>
        ))}
      </ul> */}
      <div>
        {/* Display email addresses in JSON format */}
        <pre>
          {JSON.stringify(
            data.map((post) => post.email),
            null,
          1
          )}
        </pre>
      </div>
    </div>
  );
}

export default ApiHitAxios;
