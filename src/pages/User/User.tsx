import React, { useEffect } from 'react';
import { Header } from '../../components/Header/Header';
import { UserContent } from '../../components/UserContent/UserContent';
import './User.css';

export const User = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="user">
      <Header user card />
      <UserContent />
    </div>
  );
};
