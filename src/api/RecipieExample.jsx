import React, { useEffect, useState } from "react";
import RecipeAPI from "./RecipeApi";
const { API, API2 } = RecipeAPI;
const RecipieExample = () => {
  const [dat, setDat] = useState([]);
  const [selected, setSelected] = useState(null);
  const [dab, setDab] = useState([]);

  const getCategories = async () => {
    try {
      const response = await API.get();
      if (selected) {
        const resp = await API2.get(`?c=${selected}`);
        setDab(resp.data.meals);
      }

      setDat(response.data.categories);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getCategories();
  }, [selected]);

  const selectedFun = (value) => {
    setSelected(value);
    console.log(value);
  };

  return (
    <div>
      <div className="grid  md:grid-cols-6 gap-2">
        {dat.map((category) => (
          <div
            key={category.idCategory}
            className="flex flex-col items-center max-w-sm rounded overflow-hidden 
            shadow-md shadow-purple-500 m-4 
            transition-transform duration-300 ease-in-out hover:scale-105"
          >
            <a href="#" onClick={() => selectedFun(category.strCategory)}>
              <img src={category.strCategoryThumb} className="w-full" />
            </a>
            <div className="px-6 py-4 ">
              <a href="#" onClick={() => selectedFun(category.strCategory)}>
                {category.strCategory}
              </a>
              <div className="font-bold text-xl mb-2"></div>
            </div>
          </div>
        ))}
      </div>

      <div>
        {dab !== null &&
          dab.map((byCategory) => (
            <div key={byCategory.idMeal}>
              <p>{byCategory.idMeal}</p>
              <p>{byCategory.strMeal}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default RecipieExample;
