import React from "react";
import { useParams } from "react-router-dom";

const Category = () => {
  const { categoryName } = useParams();

  return (
    <div>
      <p>{categoryName}</p>
    </div>
  );
};

export default Category;
