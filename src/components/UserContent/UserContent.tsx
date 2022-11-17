import React, { useEffect, useState } from 'react';
import { UserInfoItem } from './UserInfoItem/UserInfoItem';
import './UserContent.css';
// import Img from '../../images/userinfoCard.svg';
import { ReactComponent as Carticon } from '../../images/userinfoCard.svg';
import { ReactComponent as PersonIcon } from '../../images/Person.svg';
import { ReactComponent as LogOut } from '../../images/LogOut.svg';
// import Laminat from '../../images/laminatcart.png';
import UserIcon from '../../images/UserIconBig.png';
import { ChangeInfo } from './ChangeInfo/ChangeInfo';
import { ChangePassword } from './ChangePassword/ChangePassword';
import { Usersorder } from './Usersorder/Usersorder';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import MyOrders from '../../http/myOrders/myOrders';

// const myorderslist = [
//   {
//     title: 'Լամինատ',
//     subTitle:
//       'Լորեմ Իպսումը տպագրության և տպագրական արդյունաբերության համար նախատեսված մոդելային տեքստ է։',
//     price: 15000,
//     count: 2,
//     img: Laminat,
//     date: '05.07.2022 20:14',
//   },
//   {
//     title: 'Լամինատ',
//     subTitle:
//       'Լորեմ Իպսումը տպագրության և տպագրական արդյունաբերության համար նախատեսված մոդելային տեքստ է։',
//     price: 15000,
//     count: 2,
//     img: Laminat,
//     date: '05.07.2022 20:14',
//   },
// ];

type UserContentProps = {
  myorders?: boolean;
};

export const UserContent: React.FC<UserContentProps> = ({ myorders }) => {
  const [myorderslist, setMyorderslist] = useState([]);
  useEffect(() => {
    MyOrders.getMyOrders().then((res: any) => setMyorderslist(res?.data?.data));
  }, []);
  const { t } = useTranslation();
  const userInfo = [
    { title: `${t('userContent_title')}`, img: <Carticon />, href: '/user' },
    { title: `${t('userContent_title1')}`, img: <PersonIcon />, href: '/user/myorders' },
    { title: `${t('userContent_title2')}`, img: <LogOut /> },
  ];
  return (
    <div className="userContent">
      <div className="userContent_body">
        <div className="users_info">
          {userInfo.map((elem: any, index: number) => (
            <UserInfoItem key={index} title={elem.title} img={elem.img} href={elem.href} />
          ))}
        </div>
        {!myorders ? (
          <div className="user_details_info">
            <div className="userIconBig">
              <img src={UserIcon} alt="UserIcon" />
            </div>

            <ChangeInfo />
            <ChangePassword />
          </div>
        ) : (
          <div className="user_details_orders">
            {myorderslist?.map(
              (elem: any) =>
                elem?.items?.length > 0 &&
                elem?.items?.map((e: any, index: number) => {
                  return (
                    <div key={index}>
                      <Usersorder
                        key={index}
                        title={e.product.title}
                        img={e.product.images[0]}
                        // subTitle={e.subTitle}
                        count={e.quantity}
                        price={e.product.price}
                        date={e?.date}
                      />
                    </div>
                  );
                }),
            )}
          </div>
        )}
      </div>
    </div>
  );
};
