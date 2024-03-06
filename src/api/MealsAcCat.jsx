import React, { useCallback, useEffect, useState } from "react";
import RecipeAPI from "./RecipeApi";
import { useNavigate, useParams } from "react-router-dom";
const { API2 } = RecipeAPI;
function MealsAcCat() {
  const [getprops, setGetProps] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const { categoryName } = useParams();
  const Navigate = useNavigate();

  const getApis = useCallback(async () => {
    try {
      setLoading(true);
      const resp = await API2.get(`?c=${categoryName}`);
      setGetProps(resp.data.meals);
      setLoading(false);
    } catch (e) {}
  }, [categoryName]);

  useEffect(() => {
    getApis();
  }, [getApis]);

  const goBack = () => {
    Navigate(-1);
  };
  return (
    <div className="m-2 px-3">
      {isLoading && (
        <div className="flex items-center justify-center h-screen">
          <p className="text-xl font-bold">Loading...</p>
        </div>
      )}
      <button
        onClick={goBack}
        className="bg-gray-300 hover:bg-gray-400 text-gray-800 
        font-bold py-3 px-6 mx-4 rounded-l"
      >
        GO BACK
      </button>

      <div className="grid  md:grid-cols-6 gap-2">
        {getprops !== null &&
          getprops.map((val) => (
            <div
              key={val.idMeal}
              className="flex flex-col items-center max-w-sm rounded overflow-hidden 
          shadow-md shadow-gray-600 m-4 
          transition-transform duration-300 ease-in-out hover:scale-105"
            >
              {/* <a href="#" onClick={() => selectedFun(category.strCategory)}>
              <img src={category.strCategoryThumb} className="w-full" />
            </a> */}
              <img
                src={val.strMealThumb}
                alt=""
                className="w-full"
                style={{ height: "125px", objectFit: "cover" }}
              />
              <div className="px-6 py-4 ">{val.strMeal}</div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default MealsAcCat;
