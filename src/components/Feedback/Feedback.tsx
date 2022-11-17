import React from 'react';
import { Title } from '../Title/Title';
import { ContactsForm } from '../ContactsForm/ContactsForm';
import './Feedback.css';
import { useTranslation } from 'react-i18next';

export const Feedback = () => {
  const { t } = useTranslation();

  return (
    <div className="feedBack">
      <Title name={t('feedBack_title')} />
      <ContactsForm />
    </div>
  );
};
