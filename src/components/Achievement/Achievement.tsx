import React from 'react';
import { useTranslation } from 'react-i18next';
import './Achievement.css';

const Achievement = () => {
  const { t } = useTranslation();

  return (
    <div className="achievement">
      <div className="achievement_text_block">
        <p className="achievement_text">{t('achievement_text')}</p>
      </div>
    </div>
  );
};

export default Achievement;
