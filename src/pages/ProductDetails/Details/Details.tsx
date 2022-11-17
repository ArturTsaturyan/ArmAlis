import React, { useEffect } from 'react';
import './Details.css';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { ReactComponent as Cart_icon } from '../../../images/Cart_Icon.svg';
import { AppDispatch } from '../../../redux/store';
import { innerPageOfProduct } from '../../../redux/product/getProductSlice';
import { addtoCart } from '../../../redux/cart/cartSlice';
import { useTranslation } from 'react-i18next';
import { BsCheck } from 'react-icons/bs';

const Details = () => {
  const dispatch: AppDispatch = useDispatch();
  const location: any = useLocation();
  const idNotUser = window.localStorage.getItem('id');
  const product = useSelector((state: any) => state?.getProducts?.product?.product);
  const { t } = useTranslation();

  useEffect(() => {
    dispatch(innerPageOfProduct(location?.state?.id));
  }, []);
  const onAddCart = () => {
    dispatch(addtoCart({ cart_id: idNotUser, product_id: product?.id, quantity: 1 }));
  };

  return (
    <div className="detailsTitle_mobile">
      <h2 className="detailsTitle">{product?.title} </h2>
      {product?.in_stock > 0 ? (
        <div className="instocks">
          <BsCheck />
          {t('instocks_text')}
        </div>
      ) : (
        <div className="instocks instock">x {t('instocks_text1')}</div>
      )}
      {product?.price !== null && <span className="priceDetails">{`֏${product?.price}`}</span>}
      <button onClick={onAddCart} className="addBasket">
        <Cart_icon />
        <p className="detailsSize">{t('details_title')}</p>
      </button>
      <p className="detailsText">
        <span>{t('detailsText')}</span> {product?.size}
      </p>
      <p className="detailsText">
        <span>{t('detailsText1')}</span> {product?.type}
      </p>
      <p className="detailsText">
        <span>{t('detailsText2')}</span> {product?.thickness}
      </p>
      <p className="detailsText">
        <span>{t('detailsText3')}</span> {product?.code}
      </p>
      {product?.color !== null && (
        <p className="detailsText">
          <span>{t('detailsText4')}</span> {product?.color}
        </p>
      )}
    </div>
  );
};

export default Details;
