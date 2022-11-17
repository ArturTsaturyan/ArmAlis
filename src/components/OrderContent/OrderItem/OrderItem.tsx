import React from 'react';
import { useDispatch } from 'react-redux';
import { Button } from '@mui/material';
import { ReactComponent as RemoveIcon } from '../../../images/RemoveIcon.svg';
import './OrderItem.css';
import { AppDispatch } from '../../../redux/store';
import { addtoCart2, removeFromCart } from '../../../redux/cart/cartSlice';

type OrderItemProps = {
  src: any;
  product_title: string;
  product_subTitle: string;
  price: number;
  id: number;
  quantity: number;
  onClick?: any;
  userId: any;
  size: string;
  type: any;
  thickness: any;
  code: any;
  color: any;
};

export const OrderItem: React.FC<OrderItemProps> = ({
  src,
  product_title,
  product_subTitle,
  price,
  id,
  userId,
  quantity,
  size,
  type,
  thickness,
  code,
  color,
}) => {
  const [count, setCount] = React.useState(quantity);
  const dispatch: AppDispatch = useDispatch();
  const idNotUser = window.localStorage.getItem('id');

  const incriment = () => {
    setCount(count + 1);
    dispatch(addtoCart2({ cart_id: idNotUser, product_id: id, quantity: count + 1 }));
  };

  const decriment = () => {
    if (count > 1) {
      setCount(count - 1);
      dispatch(addtoCart2({ cart_id: idNotUser, product_id: id, quantity: count - 1 }));
    }
  };
  const removeItem = () => {
    dispatch(removeFromCart(userId, id));
  };
  return (
    <>
      <div style={{ width: '100%', height: '32px' }}></div>
      <div className="product_details_block">
        <div className="product_cart_first_div">
          <div className="imgDiv">
            <div className="remove_img">
              <button className="remove_icon" onClick={removeItem}>
                <RemoveIcon />
              </button>
              <div className="cart_image">
                <img style={{ minWidth: '100px' }} src={src} alt="img" />
              </div>
            </div>
          </div>
          <div className="title_description_span">
            <div className="product_name_order">
              <p className="product_title_order">{product_title}</p>
              <p className="product_subTitle_order">{size}</p>
              <p className="product_subTitle_order">{type}</p>
              <p className="product_subTitle_order">{thickness}</p>
              <p className="product_subTitle_order">{code}</p>
              <p className="product_subTitle_order">{color}</p>
              {product_subTitle ? (
                <p
                  className="product_subTitle_order"
                  dangerouslySetInnerHTML={{ __html: `${product_subTitle} ` }}
                ></p>
              ) : (
                ''
              )}
            </div>
          </div>
        </div>
        <div className="product_cart_second_div">
          <div className="price_span">
            {price && <p className="product_price_order">{`֏${price}`}</p>}
          </div>
          <div className="count_block_div">
            <div className="count_block">
              <Button variant="outlined" className="count_block_btn" onClick={decriment}>
                -
              </Button>
              <div className="count_block_">
                <p className="product_count">{count}</p>
              </div>
              <Button variant="outlined" className="count_block_btn" onClick={incriment}>
                +
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
