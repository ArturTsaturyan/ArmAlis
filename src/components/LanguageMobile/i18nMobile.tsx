import React, { useEffect, useState } from 'react';
import './i18nMobile.css';
import clsx from 'clsx';
import { useTranslation } from 'react-i18next';

export default function languageMobile() {
  const { i18n } = useTranslation();
  const currentLang = i18n.language;

  const changeLang = (lang: any) => {
    i18n.changeLanguage(lang);
    location.reload();
  };
  const [age, setAge] = useState('');

  useEffect(() => {
    const getStorage = localStorage.getItem('test');

    setAge(JSON.parse(getStorage || '{}'));
    if (currentLang == 'en-US') {
      setAge('10');
      changeLang('hy');
    }
  }, []);

  // useEffect(() => {
  //   const setStorage = JSON.stringify(age);
  //   localStorage.setItem('test', setStorage);
  // }, [age]);
  return (
    <div className="languageMobile">
      <div className="languageM">
        <button
          className={clsx('LinkActiveMobile', currentLang === 'hy' && 'LinkMobile')}
          onClick={() => changeLang('hy')}
        >
          ՀԱՅ
        </button>
        <button
          className={clsx('LinkActiveMobile', currentLang === 'ru' && 'LinkMobile')}
          onClick={() => changeLang('ru')}
        >
          РУС
        </button>
        <button
          className={clsx('LinkActiveMobile', currentLang === 'en' && 'LinkMobile')}
          onClick={() => changeLang('en')}
        >
          ENG
        </button>
      </div>
    </div>
  );
}
