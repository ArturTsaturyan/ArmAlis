import React, { useEffect } from 'react';
import './ServicesDetails.css';
// import { useLocation } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
import { ReactComponent as Cart_icon } from '../../../images/Cart_Icon.svg';
// import { AppDispatch } from '../../../redux/store';
// import { innerPageOfProduct } from '../../../redux/product/getProductSlice';
// import { addtoCart } from '../../../redux/cart/cartSlice';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
// import { loadServices } from '../../../redux/services/services';
type sectionData = {
  title?: any;
  price?: any;
  onClick?: any;
  type?: any;
  description?: any;
};

const DetailsServices: React.FC<sectionData> = ({ title, price, onClick, type, description }) => {
  //   const dispatch: AppDispatch = useDispatch();
  //   const location: any = useLocation();
  //   const idNotUser = window.localStorage.getItem('id');
  //   const servicess = useSelector((state: any) => state?.services?.service?.data[0]);
  const { t } = useTranslation();
  const { id } = useParams();

  //   console.log(servicess, 'mmmmmmmmmmmmmmmmmmmmmmmmm');
  //   const id = location?.state?.id;

  //   useEffect(() => {
  //     dispatch(loadServices(id));
  //   }, []);
  //   const onAddCart = () => {
  //     dispatch(addtoCart({ cart_id: idNotUser, product_id: servicess?.id, quantity: 1 }));
  //   };

  return (
    <div className="detailsTitle_mobile">
      <div className="detailsTitlePrice">
        <h2 className="detailsTitle">{title} </h2>
        <span className="priceDetails">
          {id == '1' ? `${price}/${t('serviceCart_price')}` : `${price}/${t('serviceCart_price1')}`}
        </span>
      </div>

      <p className="detailsText">
        <span>{t('detailsText1')}</span> {type}
      </p>
      <p className="detailsText" dangerouslySetInnerHTML={{ __html: `${description} ` }}></p>
      <button onClick={onClick} className="addBasket">
        <Cart_icon />
        <p className="detailsSize">{t('details_title')}</p>
      </button>
    </div>
  );
};

export default DetailsServices;
