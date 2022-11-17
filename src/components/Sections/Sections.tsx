import React, { FC, useState, useEffect } from 'react';
import { Button } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import './Sections.css';

import { Title } from '../Title/Title';
import Section from '../Section/Section';
import useIsMobile from '../../hooks/useisMobile';
import { AppDispatch } from '../../redux/store';
import { loadProductTypes } from '../../redux/product/productTypeSlice';
import { useTranslation } from 'react-i18next';

export const Sections: FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const sections = useSelector((state: any) => state?.productType?.productTypes);
  const isMobile = useIsMobile();
  const { t } = useTranslation();

  useEffect(() => {
    dispatch(loadProductTypes(currentPage));
  }, [currentPage]);

  const addNewProducts = () => {
    setCurrentPage(currentPage + 1);
  };
  const arr1: any[] = [];
  let count = -1;
  for (let i = 0; i < sections.length; i++) {
    arr1.push((count += 1));
    arr1.push((count += 5));
  }

  return (
    <div className="section2 container">
      <div
        style={{
          marginTop: isMobile <= 768 ? '10px' : '177px',
          marginBottom: isMobile <= 768 ? '80px' : '130px',
        }}
      >
        <Title name={t('section2_title')} subtitle={t('section2_title_subtitle')} />
      </div>
      {isMobile >= 1200 ? (
        <div className="bigsmall">
          {sections?.map((elem: any, index: number) => {
            return (
              <Section
                key={elem.id}
                title={elem.name}
                slug={elem.id}
                id={elem.id}
                index={index}
                img={elem.image}
                bigImage={arr1}
              />
            );
          })}
        </div>
      ) : (
        <div className="standart">
          {sections?.map((elem: any, index: number) => {
            return (
              <Section
                key={elem.id}
                title={elem.name}
                slug={elem.id}
                id={elem.id}
                index={index}
                bigImage={arr1}
                img={elem.image}
              />
            );
          })}
        </div>
      )}

      <Button
        variant="contained"
        style={{
          margin: isMobile <= 768 ? '80px auto 20px' : '83px auto 100px',
          color: '#27272C',
          background: '#ffffff',
          borderRadius: '50px',
          width: '214px',
          textTransform: 'unset',
          fontSize: '20px',
        }}
        onClick={addNewProducts}
      >
        {t('section2_button_title')}
      </Button>
    </div>
  );
};
