import { useSelector } from 'react-redux';

export const useDefaultValueContractCreate = () => {
  const userData = useSelector((state: any) => state?.authentication?.success1);
  const isToken = localStorage.getItem('token');

  const defaultValue = {
    name: isToken ? userData?.name : '',
    lastname: isToken ? userData?.lastname : '',
    phone: isToken ? userData?.phone : '',
    email: isToken ? userData?.email : '',
    address: isToken ? userData?.address : '',
    password: '',
  };
  return defaultValue;
};
