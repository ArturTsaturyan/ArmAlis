import React, { useEffect } from 'react';
import { Header } from '../../components/Header/Header';
import { Heading } from '../../components/Heading/Heading';
import { useTranslation } from 'react-i18next';
import './Shipment.css';
import ShipmentComponent from '../../components/ShipmentComponent/ShipmentComponent';
import ShipmentAchievement from '../../components/ShipmentAchivement/ShipmentAchievement';

export default function Shipment() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { t } = useTranslation();
  return (
    <div>
      <div className="about_head">
        <Header about />
        <Heading title={t('about_title')} about />
      </div>
      <ShipmentComponent />
      <ShipmentAchievement />
    </div>
  );
}
