import React from 'react';
import { useTranslation } from 'react-i18next';
import EmptyCardContentImg from '../../../images/emptyCardContent.png';
import './EmptyCardContent.css';

export const EmptyCardContent = () => {
  const { t } = useTranslation();

  return (
    <div className="emptyCardContent">
      <div className="emptyCardContent_title_block">
        <p className="emptyCardContent_title">{t('emptyCardContent_title')}</p>
      </div>
      <div className="emptyCardContent_subTitle_block">
        <p className="emptyCardContent_subTitle">{t('emptyCardContent_subTitle')}</p>
      </div>
      <div className="emptyCardContent_img_block">
        <img src={EmptyCardContentImg} alt="png" />
      </div>
    </div>
  );
};
