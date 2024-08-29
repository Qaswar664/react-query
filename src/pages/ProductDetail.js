// src/pages/ProductDetailPage.js
import React from "react";
import { useParams } from "react-router-dom";
import { useProducts } from "../hooks/useProducts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as faSolidStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as faRegularStar } from "@fortawesome/free-regular-svg-icons";
import Button from "../components/Button";

const ProductDetailPage = () => {
  const { id } = useParams();
  const { data: products, isLoading, error } = useProducts();

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error fetching product details</p>;

  const product = products.find((product) => product.id === parseInt(id, 10));

  if (!product) return <p>Product not found</p>;

  return (
    <div className="product-detail">
      <img
        src={product.images}
        alt={product.title}
        className="product-detail-image"
      />
      <div className="product-detail-content">
        <p className="product-category">{product.category.name}</p>

        <h1 className="product-detail-title">{product.title}</h1>
        <h6>
          <FontAwesomeIcon icon={faSolidStar} />
          <FontAwesomeIcon icon={faSolidStar} />
          <FontAwesomeIcon icon={faSolidStar} />
          <FontAwesomeIcon icon={faSolidStar} />
          <FontAwesomeIcon icon={faRegularStar} />
          {/* <span className="product-detail-rating">({product.rating.rate})</span> */}
        </h6>
        <p className="card-price">
          <span>${product.price}</span>
          <small>
            <s className="discount-price">$120</s>
          </small>
          <span className="discount-value">50%</span>
        </p>
        <p className="product-detail-description">{product.description}</p>
        <Button children={"ADD TO CART"} className="add-to-cart-btn detail-page-btn" />
      
      </div>
    </div>
  );
};

export default ProductDetailPage;
