import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Feedback } from '../../components/Feedback/Feedback';
import { Header } from '../../components/Header/Header';
import { Heading } from '../../components/Heading/Heading';
import './Contacts.css';

export const Contacts = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { t } = useTranslation();

  return (
    <div className="contacts">
      <div className="contacs_head">
        <Header about />
        <Heading title={t('contacs_title')} about />
      </div>
      <Feedback />
    </div>
  );
};
