import React from 'react';
import { useTranslation } from 'react-i18next';
import './PrintingAchievement.css';

const PrintingAchievement = () => {
  const { t } = useTranslation();

  return (
    <div className="printingAchievement">
      <div className="printingAchievement_text_block">
        <p className="printingAchievement_text">{t('achievement_text')}</p>
      </div>
    </div>
  );
};

export default PrintingAchievement;
