import React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { useDispatch, useSelector } from 'react-redux';
import { CardActions } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { ReactComponent as Cart_icon } from '../../images/Cart_Icon.svg';
import { ReactComponent as Arrow } from '../../images/seemorearrow.svg';
// import Img from '../../images/cardImg.png';
import './CartBlock.css';
import { AppDispatch } from '../../redux/store';
import { addtoCart } from '../../redux/cart/cartSlice';
import { useTranslation } from 'react-i18next';
import { BsCheck } from 'react-icons/bs';

type cartProps = {
  name?: string;
  link?: string;
  cardSize?: string;
  code?: string;
  price?: any;
  properties?: string;
  product_id?: number;
  img?: any;
  in_stock?: any;
  description?: any;
  codes?: any;
};

// const StyledBadge = styled(BadgeUnstyled)`
//   box-sizing: border-box;
//   margin: 0;
//   padding: 0;
//   color: rgba(0, 0, 0, 0.85);
//   font-size: 14px;
//   list-style: none;
//   font-family: IBM Plex Sans, sans-serif;
//   position: relative;
//   display: inline-block;
//   line-height: 1;

//   & .${badgeUnstyledClasses.badge} {
//     z-index: auto;
//     min-width: 20px;
//     height: 20px;
//     padding: 0 6px;
//     color: #fff;
//     font-weight: 400;
//     font-size: 12px;
//     line-height: 20px;
//     white-space: nowrap;
//     text-align: center;
//     background: #f68d10;
//     border-radius: 10px;
//     box-shadow: 0 0 0 1px #fff;
//     position: absolute;
//     top: 0;
//     left: 10px;
//     transform: translate(50%, -50%);
//     transform-origin: 100% 0;
//     opacity: 1;
//     transition: opacity 0.2s ease-in-out;
//   }

//   & .${badgeUnstyledClasses.invisible} {
//     opacity: 0;
//     pointer-events: none;
//   }
// `;

export const CartBlock: React.FC<cartProps> = ({
  name,
  properties,
  price,
  product_id,
  img,
  code,
  in_stock,
  description,
  codes,
}) => {
  const navigate = useNavigate();
  const dispatch: AppDispatch = useDispatch();
  const idNotUser = window.localStorage.getItem('id');
  const { t } = useTranslation();

  const productInnerPage = () => {
    navigate(`/product/${code}`, { state: { id: product_id } });
  };
  const servicesInnerPage = () => {
    navigate(`/service/${codes}`, { state: { id: product_id } });
  };
  const onAddCart = () => {
    dispatch(addtoCart({ cart_id: idNotUser, product_id: product_id, quantity: 1 }));
  };

  // const product = useSelector((state: any) => state?.getProducts?.product);

  return (
    <div className="cartItem">
      <Card style={{ boxShadow: 'unset', background: '#F9F9F9' }}>
        <CardMedia
          style={{ borderRadius: '3px 3px 0px 0px', userSelect: 'none' }}
          component="img"
          image={img}
          alt="green"
          onClick={codes ? servicesInnerPage : productInnerPage}
        />

        <div className="title_icons">
          <div
            onClick={codes ? servicesInnerPage : productInnerPage}
            className="cartItem_title"
            style={{ textAlign: 'left', padding: '0px', marginTop: '22px' }}
          >
            <Typography
              className="product_name"
              gutterBottom
              variant="h5"
              component="p"
              style={{
                fontSize: '18px',
                lineHeight: '23px',
                color: '#121212',
                fontWeight: '700',
                marginBottom: '12px',
              }}
            >
              {name}
            </Typography>
            <Typography
              variant="body2"
              style={{
                fontSize: '16px',
                lineHeight: '130%',
                color: '#121212',
                fontWeight: '600',
              }}
            >
              {properties}
            </Typography>
            {description && (
              <p
                className="product_description"
                dangerouslySetInnerHTML={{ __html: description }}
              ></p>
            )}
          </div>
          <div className="inStockButton">
            {in_stock > 0 ? (
              <div className="instocks">
                <BsCheck />
                {t('instocks_text')}
              </div>
            ) : (
              <div className="instocks instock">x {t('instocks_text1')}</div>
            )}
            <button className="icons" onClick={onAddCart}>
              <div className="cart_icon_">
                <Cart_icon />
              </div>
            </button>
          </div>
        </div>
        <div className="test">
          {price !== null && <span className="price">{`֏${price}`}</span>}
          <button
            onClick={codes ? servicesInnerPage : productInnerPage}
            style={{ background: 'transparent' }}
          >
            <CardActions>
              <div className="see_more_card_block">
                <p className="see_more_card"> {`${t('cartBlock_see_more_card')}`}</p>
                <Arrow />
              </div>
            </CardActions>
          </button>
        </div>
      </Card>
    </div>
  );
};
