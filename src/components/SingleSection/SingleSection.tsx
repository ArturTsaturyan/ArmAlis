import { Typography } from '@mui/material';
import React, { FC } from 'react';
import './SingleSection.css';
import useIsMobile from '../../hooks/useisMobile';

type SingleSectionProps = {
  title: string;
  img: string;
  index: number;
  bigOrSmall: boolean;
};

export const SingleSection: FC<SingleSectionProps> = ({ title, img, bigOrSmall }) => {
  const isMobile = useIsMobile();

  return (
    <div
      className="item_section1"
      style={{
        width: '100%',
        height: isMobile >= 1200 ? (bigOrSmall ? '494px' : '384px') : '350px',
      }}
    >
      <div
        className="img_block____"
        style={{
          backgroundImage: `url(${img})`,
          width: '100%',
          height: '100%',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          borderRadius: 12,
        }}
      ></div>
      <div className="_product_name">
        <Typography className="product_name" gutterBottom variant="h5" component="p">
          {title}
        </Typography>
      </div>
    </div>
  );
};
