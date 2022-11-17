import React, { useEffect } from 'react';
import './Home.css';
import { Header } from '../../components/Header/Header';
import { Heading } from '../../components/Heading/Heading';
import { NewAssortment } from '../../components/NewAssortment/NewAssortment';
import { Sections } from '../../components/Sections/Sections';
import { AppDispatch } from '../../redux/store';
import { useDispatch } from 'react-redux';
import { loadRecentProducts } from '../../redux/product/getProductSlice';
// import { addCunter } from '../../redux/Cart/slice'
import { useTranslation } from 'react-i18next';

export const Home = () => {
  const { t } = useTranslation();
  const dispatch: AppDispatch = useDispatch();
  // const add = () => {
  //   dispatch(addCunter(123))
  // }
  useEffect(() => {
    dispatch(loadRecentProducts());
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      {/* <button onClick={add}>caaaaaaaaaaaaaaaaaaaaaaaaaaaaal</button> */}
      <div className="head">
        <Header />
        <Heading title={t('head_title')} subtitle={t('head_subtitle')} button />
      </div>
      <NewAssortment />
      <Sections />
    </div>
  );
};
