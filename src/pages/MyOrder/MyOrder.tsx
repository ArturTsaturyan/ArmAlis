import React, { useEffect } from 'react';
import { Header } from '../../components/Header/Header';
import { UserContent } from '../../components/UserContent/UserContent';
import './MyOrder.css';

export const MyOrder = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="user">
      <Header user card />
      <UserContent myorders />
    </div>
  );
};
