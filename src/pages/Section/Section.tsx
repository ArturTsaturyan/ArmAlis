import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Header } from '../../components/Header/Header';
import { SectionContent } from '../../components/SectionContent/SectionContent';
import { SectionHeading } from '../../components/SectionHeading/SectionHeading';
import './Section.css';

export const Section = () => {
  const filterProducts = useSelector((state: any) => state?.filtereds?.start?.data);

  useEffect(() => {
    window.scrollTo(800, 800);
  }, [filterProducts]);

  return (
    <div className="section_page">
      <div className="section_page_head">
        <Header />
      </div>
      <SectionHeading />
      <SectionContent />
    </div>
  );
};
