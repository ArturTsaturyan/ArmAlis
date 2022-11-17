import { NewAssortmentCart } from '../NewAssortmentCart/NewAssortmentCart';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import { Title } from '../Title/Title';
import useIsMobile from '../../hooks/useisMobile';
import 'swiper/css/bundle';
import './NewAssortment.css';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '../../redux/store';
import { useTranslation } from 'react-i18next';
import { innerPageOfProduct } from '../../redux/product/getProductSlice';

export const NewAssortment = () => {
  const dispatch: AppDispatch = useDispatch();
  const { t } = useTranslation();

  const isMobile = useIsMobile();
  const newProduct = useSelector((state: any) => state?.getProducts?.recentProducts);

  const filterF = (id: number) => {
    dispatch(innerPageOfProduct(id));
  };

  return (
    <div className="section1 ">
      <div
        style={{
          marginBottom: isMobile <= 768 ? '20px' : '72px',
          marginTop: isMobile <= 768 ? '20px' : '137px',
        }}
      >
        <Title name={t('section1_title')} />
      </div>

      <div className="NewAssortment">
        <Swiper
          slidesPerView={isMobile >= 1300 ? 3 : isMobile >= 769 ? 2 : 1}
          spaceBetween={30}
          slidesPerGroup={1}
          // centeredSlides={true}
          loop={true}
          loopFillGroupWithBlank={true}
          navigation={true}
          modules={[Navigation]}
          className="my_swiper"
        >
          {newProduct.map((e: any) => (
            <SwiperSlide key={e.id} onClick={() => filterF(e.id)}>
              <NewAssortmentCart
                cart_foto={`${e.images[0]}`}
                cart_title={e.title}
                cart_subtitle={e.type}
                cart_price={e.price !== null ? `֏${e.price}` : ''}
                id={e.id}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};
