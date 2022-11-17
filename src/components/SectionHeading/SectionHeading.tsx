import React from 'react';
import { useTranslation } from 'react-i18next';
import SectionHead from '../../images/SectionHead.png';
import './SectionHeading.css';
import { useSelector } from 'react-redux';

export const SectionHeading = () => {
  let filterProducts = useSelector((state: any) => state?.filtred?.filtredProduct?.data);
  filterProducts = filterProducts?.[0]?.category;
  const { t } = useTranslation();

  return (
    <div className="sectionHeading">
      <div className="sectionHeading_body">
        <div className="sectionHeading_text_block">
          <p className="sectionHeading_text">
            {filterProducts
              ? `${filterProducts} ${t('sectionHeading_text')}`
              : `${t('sectionHeading_text1')}`}
          </p>
        </div>
        <div className="sectionHeading_img_block">
          <img src={SectionHead} alt="SectionHead" />
        </div>
      </div>
    </div>
  );
};
