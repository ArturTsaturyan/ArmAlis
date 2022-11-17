import React, { useEffect } from 'react';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { Header } from '../../components/Header/Header';
import './ProductDetails.css';
import Details from './Details/Details';
import VerticalSwiper from './Swiper/VerticalSwiper';
import { useTranslation } from 'react-i18next';
import SimilarProducts from '../../components/SimilarProducts/SimilarProducts';

export const ProductDetails = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { t } = useTranslation();
  const navigate = useNavigate();
  return (
    <div className="productDetails">
      <Header />
      <div className="details">
        <VerticalSwiper />
        <Details />
      </div>
      <h1 className="similarTitle">{t('productDetails_similarTitle')}</h1>
      <div className="similarProduct">
        {/* {data.map((elem: any, index: number) => (
          <CartBlock key={index} name={elem.name} cardSize="24%" />
        ))} */}
      </div>
      {/* <div className="btnWrapper">
        <Button className="btn_see_more" variant="contained" onClick={() => navigate('/#')}>
          {t('productDetails_btn_see_more')}
        </Button>
      </div> */}
      <SimilarProducts />
    </div>
  );
};
