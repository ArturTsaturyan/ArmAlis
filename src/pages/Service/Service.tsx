import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { Header } from '../../components/Header/Header';
import { addtoCart } from '../../redux/cart/cartSlice';
import { loadServices } from '../../redux/services/services';
import { AppDispatch } from '../../redux/store';
import './Service.css';
import ServiceDetails from './ServiceDetails/ServiceDetails';
import DetailsServices from './ServicesDetails/ServicesDetails';

export default function Service() {
  const dispatch: AppDispatch = useDispatch();
  const location: any = useLocation();
  const idNotUser = window.localStorage.getItem('id');
  const servicess = useSelector((state: any) => state?.services?.service?.data);
  const id = location?.state?.id;

  useEffect(() => {
    dispatch(loadServices(id));
  }, []);
  const onAddCart = () => {
    dispatch(addtoCart({ cart_id: idNotUser, product_id: servicess[0]?.id, quantity: 1 }));
  };

  return (
    <div>
      <Header />
      <div className="details">
        <ServiceDetails />
        {servicess && (
          <DetailsServices
            title={servicess[0]?.title}
            price={servicess[0]?.price}
            type={servicess[0]?.type}
            description={servicess[0]?.description}
            onClick={onAddCart}
          />
        )}
      </div>
    </div>
  );
}
