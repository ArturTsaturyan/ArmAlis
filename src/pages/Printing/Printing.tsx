import React, { useEffect } from 'react';
import { Header } from '../../components/Header/Header';
import { Heading } from '../../components/Heading/Heading';
import { useTranslation } from 'react-i18next';
import './Printing.css';
import PrintingComponent from '../../components/PrintingComponent/PrintingComponent';
import PrintingAchievement from '../../components/PrintingAchievement/PrintingAchievement';

export default function Printing() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { t } = useTranslation();
  return (
    <div>
      <div className="printing_head">
        <Header about />
        <Heading title={t('about_title')} about />
      </div>
      <PrintingComponent />
      <PrintingAchievement />
    </div>
  );
}
