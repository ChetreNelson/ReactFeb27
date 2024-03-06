import axios from "axios";

const API = axios.create({
  baseURL: "https://www.themealdb.com/api/json/v1/1/categories.php",
});

const API2 = axios.create({
  baseURL: "https://www.themealdb.com/api/json/v1/1/filter.php",
});

export  default { API, API2 };
