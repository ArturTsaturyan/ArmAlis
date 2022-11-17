import React, { FC } from 'react';
import { Title } from '../Title/Title';
import AboutImg from '../../images/aboutImg.png';
import './AboutUs.css';
import { useTranslation } from 'react-i18next';

type Texts = {
  aboutUs_title?: any;
  aboutUs_content_text?: any;
};

const AboutUs: FC<Texts> = ({ aboutUs_title, aboutUs_content_text }) => {
  const { t } = useTranslation();

  return (
    <div className="aboutUs ">
      {/* <Title name={t('aboutUs_title')} /> */}
      <Title name={aboutUs_title} />
      <div className="aboutUs_content container">
        <div className="aboutUs_content_img">
          <div>
            <img src={AboutImg} alt="Icon" />
          </div>
        </div>
        <div className="aboutUs_content_text_block">
          <p
            className="aboutUs_content_text"
            // dangerouslySetInnerHTML={{ __html: `${t('aboutUs_content_text')} ` }}
            dangerouslySetInnerHTML={{ __html: `${t('aboutUs_content_text')} ` }}
          >
            {/* {aboutUs_content_text} */}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
