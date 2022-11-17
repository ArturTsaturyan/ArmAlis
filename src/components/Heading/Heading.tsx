import React from 'react';
import { Button, Stack } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import HeadingIcon from '../../images/car.svg';
import HeadingIconChec from '../../images/carChec.svg';
import './Heading.css';
import { useTranslation } from 'react-i18next';

type HeadingProps = {
  title?: string;
  subtitle?: string;
  button?: boolean;
  about?: boolean;
  conact?: boolean;
};

export const Heading: React.FC<HeadingProps> = ({ title, subtitle, button, about }) => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <div className={about ? 'about_heading' : 'heading'}>
      <div className={about ? '' : 'Search_Login'}>
        <div className={about ? 'about_title' : 'heading_title'}>{title}</div>
        {!about && <div className="heading_subtitle">{subtitle}</div>}

        <div>{/* <Search / > */}</div>
        {button && (
          <div className="btns">
            <Stack spacing={2} direction="row" className="btns_div">
              <Button
                className="btn_see_more"
                variant="contained"
                onClick={() => navigate('/about')}
              >
                {t('head_button_title')}
              </Button>
            </Stack>
          </div>
        )}
      </div>
      {!about && (
        <div className="just_icon_">
          <img src={HeadingIcon} alt="Icon" className="just_icon1" />
          <img src={HeadingIconChec} alt="Icon" className="just_icon" />
        </div>
      )}
    </div>
  );
};
