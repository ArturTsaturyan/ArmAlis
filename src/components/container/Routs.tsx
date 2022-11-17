import React, { useEffect, useLayoutEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { About } from '../../pages/About/About';
import { Contacts } from '../../pages/Contacts/Contacts';
import { Home } from '../../pages/Home/Home';
import { MyOrder } from '../../pages/MyOrder/MyOrder';
import { Order } from '../../pages/Order/Order';
import { OrderConfirm } from '../../pages/OrderConfirm/OrderConfirm';
import { Section } from '../../pages/Section/Section';
import { User } from '../../pages/User/User';
import { ProductDetails } from '../../pages/ProductDetails/ProductDetails';
import Error from '../../pages/404/404Page';
import Services from '../../pages/Services/Services';
import Service from '../../pages/Service/Service';
import Category from '../../pages/Categoryes/Category';
import Shipment from '../../pages/Shipment/Shipment';
import Printing from '../../pages/Printing/Printing';

function Routs() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/category/:id" element={<Section />} />
      <Route path="/product/:code" element={<ProductDetails />} />
      <Route path="/category" element={<Category />} />
      <Route path="/about" element={<About />} />
      <Route path="/contacts" element={<Contacts />} />
      <Route path="/card" element={<Order />} />
      <Route path="/cardconfirm" element={<OrderConfirm />} />
      <Route path="/user" element={<User />} />
      <Route path="/user/myorders" element={<MyOrder />} />
      <Route path="/services/:id" element={<Services />} />
      <Route path="/service/:code" element={<Service />} />
      <Route path="/shipment" element={<Shipment />} />
      <Route path="/printing" element={<Printing />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
}

export default Routs;
