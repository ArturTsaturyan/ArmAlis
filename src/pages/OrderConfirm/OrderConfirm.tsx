import React, { useEffect } from 'react';
import { Header } from '../../components/Header/Header';
import { OrderConfirmContent } from '../../components/OrderConfirmContent/OrderConfirmContent';
import './OrderConfirm.css';

export const OrderConfirm = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="orderconfirm">
      <Header card />
      <OrderConfirmContent />
    </div>
  );
};
