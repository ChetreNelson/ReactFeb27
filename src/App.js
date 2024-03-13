import "./components/UseStateExample";
import RecipieExample from "./api/RecipieExample";
import { Routes, Route } from "react-router-dom";
import MealsAcCat from "./api/MealsAcCat";
import FinalRecipe from "./api/FinalRecipe";
import Index from "./homepage/Index";
import UseStateExample from "./components/UseStateExample";
import BGColor from "./components/BGColor";
import RandomHooks from "./components/RandomHooks"
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/randomhook" element={<RandomHooks/>} />
        <Route path="/bgcolor" element={<BGColor />} />
        <Route path="/counter" element={<UseStateExample />} />
        <Route path="/category" element={<RecipieExample />} />
        <Route path="/category/:categoryName" element={<MealsAcCat />} />
        <Route path="/category/:categoryName/id" element={<FinalRecipe />} />
      </Routes>
    </>
  );
}

export default App;
