import React, { useState } from "react";
import Button from "./Button";
import { useNavigate } from "react-router-dom";
import { FaHeart, FaRegHeart } from "react-icons/fa";

const Card = ({ id, title, image, description, price,category }) => {
  const navigate = useNavigate();
  


  const handleClick = () => {
    navigate(`/product/${id}`);
  };
  return (
    <div className="card">
      <div className="image-wrapper">
        <img src={image} alt={title} className="card-image" />
        <div className="heart-icon">
          <FaHeart className="icon"/>
        </div>
        <div className="btn-wrapper">
          <Button children={"QUICK VIEW"} className="quick-view-cart-btn" />
          <Button children={"ADD TO CART"} className="add-to-cart-btn" />
        </div>
      </div>
      <div className="card-content" onClick={handleClick}>
        <h2 className="card-title">{title}</h2>
        <p className="card-description">{description}</p>
        <p className="card-price">
          <span>${price}</span>
          <small>
            <s className="discount-price">$120</s>
          </small>
          <span className="discount-value">50%</span>
        </p>
        
      </div>
    </div>
  );
};

export default Card;
