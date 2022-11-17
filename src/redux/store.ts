// import { configureStore } from '@reduxjs/toolkit';
// import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
// import cartSlice from './Cart/slice';
// import sectionSlice from './Section/sectionSlice';
// import productSlice from './Product/productReducer';
// // import { userReducer } from './user/userReducer';
// export const store = configureStore({
//   reducer: {
//     cart: cartSlice,
//     sectionSlice: sectionSlice,
//     product: productSlice,
//     // user: userReducer,
//   },
// });

// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;
// export const useAppDispatch: () => AppDispatch = useDispatch;
// export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

import { configureStore } from '@reduxjs/toolkit';
import { authenticationReducer } from './user/loginSlice';
import { productSliceReducer } from './product/productTypeSlice';
import { getProductSliceReducer } from './product/getProductSlice';
import { usersListReducer } from './user/userSlice';
import { footerSliceReducer } from './footer/footerSlice';
import { newProductSliceReducer } from './product/getRecentProductSlice';
import { getFiltredProductsSliceReducer } from './product/getFiltredProduct';
import { filterSliceReducer } from './filter/filterSlice';

import sectionSlice from './Section/sectionSlice';
import { cartSliceReducer } from './cart/cartSlice';
import { languageSliceReducer } from './translate/translate';
import { filteredSliceReducer } from './filter/filteredSlice';
import { serviceSliceReducer } from './services/services';
import { textSliceReducer } from './texts/texts';
export const store = configureStore({
  reducer: {
    authentication: authenticationReducer,
    productType: productSliceReducer,
    getProducts: getProductSliceReducer,
    userList: usersListReducer,
    cart: cartSliceReducer,
    sectionSlice: sectionSlice,
    footer: footerSliceReducer,
    language: languageSliceReducer,
    newProducts: newProductSliceReducer,
    filtred: getFiltredProductsSliceReducer,
    filter: filterSliceReducer,
    filtereds: filteredSliceReducer,
    services: serviceSliceReducer,
    text: textSliceReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
