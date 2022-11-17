import React, { useEffect } from 'react';
import AboutUs from '../../components/AboutUs/AboutUs';
import { Header } from '../../components/Header/Header';
import { Heading } from '../../components/Heading/Heading';
import Achievement from '../../components/Achievement/Achievement';
import './About.css';
import { useTranslation } from 'react-i18next';
import { loadText } from '../../redux/texts/texts';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '../../redux/store';

export const About = () => {
  const dispatch: AppDispatch = useDispatch();
  const text = useSelector((state: any) => state?.text?.text);
  console.log(text, 'text');
  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(loadText());
  }, []);
  const { t } = useTranslation();

  return (
    <div>
      <div className="about_head">
        <Header about />
        <Heading title={t('about_title')} about />
      </div>
      <AboutUs aboutUs_title={t('aboutUs_title')} aboutUs_content_text />
      <Achievement />
    </div>
  );
};
