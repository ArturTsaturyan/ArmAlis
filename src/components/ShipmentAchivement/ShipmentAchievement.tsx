import React from 'react';
import { useTranslation } from 'react-i18next';
import './ShipmentAchievement.css';

const ShipmentAchievement = () => {
  const { t } = useTranslation();

  return (
    <div className="shipmentAchievement">
      <div className="shipmentAchievement_text_block">
        <p className="shipmentAchievement_text">{t('achievement_text')}</p>
      </div>
    </div>
  );
};

export default ShipmentAchievement;
