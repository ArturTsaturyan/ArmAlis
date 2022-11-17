import React from 'react';
import { Header } from '../Header/Header';
import { EmptyCardContent } from './EmptyCardContent/EmptyCardContent';

export const EmptyCart = () => {
  return (
    <div>
      <Header card />
      <EmptyCardContent />
    </div>
  );
};
