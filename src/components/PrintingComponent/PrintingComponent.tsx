import React from 'react';
import { Title } from '../Title/Title';
import PrintingImg from '../../images/printingImage.jpg';
import './PrintingComponent.css';
import { useTranslation } from 'react-i18next';

const PrintingComponent = () => {
  const { t } = useTranslation();

  return (
    <div className="printing">
      <Title name={'Printing'} />
      <div className="aboutUs_content container">
        <div className="aboutUs_content_img">
          <div>
            <img className="printingImage" src={PrintingImg} alt="Icon" />
          </div>
        </div>
        <div className="aboutUs_content_text_block">
          <p
            className="printing_content_text"
            dangerouslySetInnerHTML={{ __html: `${t('aboutUs_content_text')} ` }}
          ></p>
        </div>
      </div>
    </div>
  );
};

export default PrintingComponent;
