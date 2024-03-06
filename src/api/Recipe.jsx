import React, { useEffect, useState } from "react";
import Axios from "./RecipeApi";
function Recipe() {
  const [data, setData] = useState([]);

  const getApi = async () => {
    try {
      const response = await Axios.get();
      console.log(response);
      setData(response.data.categories);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getApi();
  }, []);

  return (
    <div>
      {/* <ul>
        {data.map((category) => (
          <li key={category.idCategory}>{category.strCategory}</li>
        ))}
      </ul> */}

      <div>
        {data.map((category) => (
          <div key={category.idCategory}>
            <h1 className="bg-red-300">{category.strCategory}</h1>
            <img src={category.strCategoryThumb} alt="" />
            <div>{category.strCategoryDescription}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Recipe;
