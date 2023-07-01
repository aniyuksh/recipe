import React, { useContext, useEffect, useState } from "react";
import { Context } from "../context/ContextFile";
import SingleProduct from "./SingleProduct";

const ItemLists = () => {
  const { data, searchChoice, inpData } = useContext(Context);

  const [dataShow, setDataShow] = useState(data);

  useEffect(() => {
    if (inpData.length === "") {
      setDataShow(data);
    } else if (searchChoice === "Name") {
    
      setDataShow([
        ...data.filter((item) =>
          item.name.toLowerCase().includes(inpData.toLowerCase())
        ),
      ]);
    } else if (searchChoice === "Ingredients") {
      const matchingRecipes = [];

      for (let i = 0; i < data.length; i++) {
        const recipe = data[i];
        const recipeIngredients = recipe.ingredients;

        if (recipeIngredients.includes(inpData.toLowerCase())) {
          matchingRecipes.push(recipe);
        }
      }
      if(inpData.length === 0){
        setDataShow(data)
      }
      setDataShow(matchingRecipes);
      // return matchingRecipes;
    } else {
        setDataShow([
            ...data.filter((item) =>
              item.cuisine.toLowerCase().includes(inpData.toLowerCase())
            ),
          ]);
    }
  }, [searchChoice, inpData]);

  return (
    <div>
      <h1>All Recipes:</h1>
      <div className="flex flex-wrap gap-5 p-5">
        {dataShow.map((item) => {
          return (
            <div key={item.id}>
              <SingleProduct item={item} />
            </div>
          );
        })}
        <button className="p-2 border border-gray-300 rounded-r-lg">
          Add Data
        </button>
      </div>
    </div>
  );
};

export default ItemLists;
