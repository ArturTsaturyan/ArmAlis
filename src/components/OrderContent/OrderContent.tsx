import React, { useEffect } from 'react';
import { Button } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { OrderItem } from './OrderItem/OrderItem';
import './OrderContent.css';
// import Visa from '../../images/visa.png';
// import Master from '../../images/master.png';
// import Paypal from '../../images/paypal.png';
// import Applepay from '../../images/applepay.png';
import { useNavigate } from 'react-router-dom';
import { AppDispatch } from '../../redux/store';
import { addtoOnCart } from '../../redux/cart/cartSlice';
import { EmptyCardContent } from '../EmptyCart/EmptyCardContent/EmptyCardContent';
import { useTranslation } from 'react-i18next';

export const OrderContent = () => {
  const { t } = useTranslation();
  const arr = [
    { title: `${t('orderContent_title')}` },
    { title: `${t('orderContent_title1')}` },
    { title: `${t('orderContent_title2')}` },
  ];
  const navigate = useNavigate();
  const dispatch: AppDispatch = useDispatch();
  const goConfirm = () => {
    navigate('/cardconfirm');
  };
  const products = useSelector((state: any) => state?.cart?.items);
  const id = useSelector((state: any) => state?.authentication?.accessToken?.id);
  const idNotUser = window.localStorage.getItem('id');
  useEffect(() => {
    dispatch(addtoOnCart(id ? id : idNotUser));
  }, []);

  return (
    <>
      {products?.items?.length < 0 || products?.items?.length === undefined ? (
        <EmptyCardContent />
      ) : (
        <div className="orderContent">
          <div className="about_products">
            <div className="about_products_header">
              {arr?.map(({ title }, index) => (
                <div key={index} className="about_products_header_title">
                  <div className="about_products_header_title__">{title}</div>
                </div>
              ))}
            </div>
            {products?.items?.map((elem: any) => {
              return (
                <OrderItem
                  key={elem.product.id}
                  product_title={elem.product.title}
                  price={elem.product.price}
                  product_subTitle={elem.product.description}
                  src={elem.product.images[0]}
                  id={elem.product.id}
                  size={elem.product.size}
                  quantity={elem.quantity}
                  userId={id ? id : idNotUser}
                  type={elem.product.type}
                  thickness={elem.product.thickness}
                  code={elem.product.code}
                  color={elem.product.color}
                />
              );
            })}
          </div>
          <div className="all_about">
            {/* <div className="all_about_title_block">
              <p className="all_about_title">Ընդամենը</p>
            </div> */}
            <div className="all_about_discription_block">
              {/* <div className="all_about_all_price">
                <p className="all_price_title">Ընդհանուր Գումար</p>
                <p className="all_delevry_price">{`֏ ${products?.total_price}`}</p>
              </div> */}
              <div className="buy">
                <Button
                  className="btn_contact"
                  variant="contained"
                  type="submit"
                  onClick={goConfirm}
                >
                  {`${t('orderContent_button')}`}
                </Button>
              </div>
              {/* <div className="we_accept_block">
                <div>
                  <p className="we_accept">Մենք ընդունում ենք.</p>
                </div>
                <div className="we_accept_imgs">
                  <div className="we_accept_img">
                    <img src={Visa} alt="Visa" />
                  </div>
                  <div className="we_accept_img">
                    <img src={Master} alt="Master" />
                  </div>
                  <div className="we_accept_img">
                    <img src={Paypal} alt="Paypal" />
                  </div>
                  <div className="we_accept_img">
                    <img src={Applepay} alt="Applepay" />
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      )}
    </>
  );
};
