import React, { FC } from 'react';
import './Usersorder.css';

type UsersorderProps = {
  img?: string;
  title?: string;
  // subTitle: string;
  price?: number;
  sale?: number;
  count?: number;
  date?: string;
};

export const Usersorder: FC<UsersorderProps> = ({
  img,
  title,
  // subTitle,
  price,
  sale,
  count,
  date,
}) => {
  return (
    <div className="user_details_order">
      <div className="user_details_order_body">
        <div className="user_details_order_body_img">
          <img src={img} alt="alt" />
        </div>
        <div className="user_details_order_body_texts">
          <div className="user_details_order_body_title_block">
            <p className="user_details_order_body_title">{title}</p>
          </div>
          {/* <div className="user_details_order_body_subTitle_block">
            <p className="user_details_order_body_subTitle">{subTitle}</p>
          </div> */}
        </div>
        <div className="user_details_order_body_pricees">
          <div className="user_details_order_body_price_block">
            <p className="user_details_order_body_price">֏{price}</p>
          </div>
          {sale && (
            <div className="user_details_order_body_sale_block">
              <p className="user_details_order_body_sale">{sale}</p>
            </div>
          )}
        </div>
        <div className="user_details_order_body_count_block">
          <p className="user_details_order_body_count">{`${count} հատ`}</p>
        </div>
        <div className="user_details_order_body_row_block"></div>
        <div className="user_details_order_body_date_block">
          <p className="user_details_order_body_date">{date}</p>
        </div>
      </div>
    </div>
  );
};
