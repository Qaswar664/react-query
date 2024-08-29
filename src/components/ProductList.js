import React, { useState } from "react";
import { useProducts } from "../hooks/useProducts";
import Card from "./Card";

const ProductList = ({ search }) => {
  const { data: products, isLoading, error } = useProducts();
  const [visibleCount, setVisibleCount] = useState(8); // Number of products to show initially

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error fetching products</p>;

  const searchProduct = products.filter((product) =>
    product.title.toLowerCase().includes(search.toLowerCase())
  );

  // Function to handle "Show More" button click
  const handleShowMore = () => {
    setVisibleCount((prevCount) => prevCount + 8); // Increase count by 8
  };

  return (
    <div className="product-list">
      {searchProduct.slice(0, visibleCount).map((product) => (
        <Card
          key={product.id}
          id={product.id}
          title={product.title}
          image={product.images}
          description={product.description}
          price={product.price}
          category={product.category.name}
        />
      ))}
      {searchProduct.length > visibleCount && (
        <button onClick={handleShowMore} className="show-more-btn">
          Show More
        </button>
      )}
    </div>
  );
};

export default ProductList;
