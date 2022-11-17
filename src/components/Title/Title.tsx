import React from 'react';
import './Title.css';

type cartProps = {
  name: string;
  subtitle?: string;
};

export const Title: React.FC<cartProps> = ({ name, subtitle }) => {
  return (
    <div>
      <p className="_title">{name}</p>
      {subtitle && <p className="_subtitle">{subtitle}</p>}
    </div>
  );
};
