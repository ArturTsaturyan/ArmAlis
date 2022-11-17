import React, { useEffect } from 'react';
import { Header } from '../../components/Header/Header';
import { OrderContent } from '../../components/OrderContent/OrderContent';
// import { addCunter, selectCart } from '../../redux/Cart/slice'
// import { useAppDispatch, useAppSelector } from '../../redux/store'
import './Order.css';

export const Order = () => {
  // const {counter} = useAppSelector(selectCart)
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="order">
      <Header card />
      <OrderContent />
    </div>
  );
};
