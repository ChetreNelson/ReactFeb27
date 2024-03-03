import axios from "axios";
import React, { useEffect, useState } from "react";

function ExampleApi() {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts"
        );
        await new Promise((resolve) => setTimeout(resolve, 2000));
        setData(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    })();
  }, []);

  return (
    <div className="container mx-auto p-4">
      {isLoading && <h1 className="text-2xl font-bold text-center mb-4">Loading ...</h1>}
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {data.map((post) => (
          <li key={post.id} className="bg-gray-100 p-4 rounded shadow">
            <h2 className="text-lg font-semibold mb-2">{post.title}</h2>
            <p className="text-gray-700">{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ExampleApi;
