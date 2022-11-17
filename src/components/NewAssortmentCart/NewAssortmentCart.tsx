import React, { FC } from 'react';
import './NewAssortmentCart.css';
import { useNavigate } from 'react-router-dom';

type NewAssortmentCart = {
  cart_title: string;
  cart_subtitle: string;
  cart_price: string;
  cart_foto: string;
  id: any;
};

export const NewAssortmentCart: FC<NewAssortmentCart> = ({
  cart_title,
  cart_subtitle,
  cart_price,
  cart_foto,
  id,
}) => {
  const navigate = useNavigate();
  const productNewPage = () => {
    navigate(`/product/${id}`);
  };
  return (
    <div className="newAssortmentCart" onClick={productNewPage}>
      <div className="cart_info">
        <p className="cart_title">{cart_title}</p>
        <p className="cart_subtitle">{cart_subtitle}</p>
        <p className="cart_price">{cart_price}</p>
      </div>
      <div className="cart_photo">
        <img src={cart_foto} alt="img" className="cart_foto" />
      </div>
    </div>
  );
};
