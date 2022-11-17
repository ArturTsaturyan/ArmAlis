import React from 'react';
import { Button } from '@mui/material';
import './Button.css';

type buttonProps = {
  transparent?: any;
  onClick?: any;
  title: string;
  big?: any;
  about?: any;
  card?: any;
  style?: any;
};

export const ButtonComp: React.FC<buttonProps> = ({
  transparent,
  onClick,
  title,
  big,
  about,
  card,
  style,
}) => {
  return (
    <>
      {big ? (
        <Button
          style={style}
          onClick={onClick}
          type="submit"
          className={
            transparent ? 'btn_see_more_2' : big ? 'btn_see_more_big' : 'btn_see_more_header'
          }
          variant="contained"
        >
          <p className={transparent ? 'btn_title' : ''}>{title}</p>
        </Button>
      ) : (
        <Button
          style={style}
          onClick={onClick}
          type="submit"
          className={
            about
              ? transparent
                ? 'btn_see_more_2_'
                : 'btn_see_more_header_'
              : card
              ? transparent
                ? 'btn_see_more_2_black'
                : 'btn_see_more_header_black'
              : transparent
              ? 'btn_see_more_2'
              : 'btn_see_more_header'
          }
          variant="contained"
        >
          <p
            className={
              about
                ? transparent
                  ? 'btn_title_'
                  : ''
                : card
                ? transparent
                  ? 'btn_title_black'
                  : ''
                : transparent
                ? 'btn_title'
                : ''
            }
          >
            {title}
          </p>
        </Button>
      )}
    </>
  );
};
