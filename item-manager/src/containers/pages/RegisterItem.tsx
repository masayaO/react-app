import React, { FC, useContext } from 'react';
import RegisterItem from '../../components/pages/RegisterItem';
import UserContext from '../../contexts';
import useRegisterItem from '../../hooks/use-register-item';

const EnhancedRegisterItem: FC = () => {
  const { userId } = useContext(UserContext);
  if (!userId) {
    throw Error('UserId Not Found');
  }

  const [form, handleFormChange, handleSubmit] = useRegisterItem(userId);

  return (
    <RegisterItem
      form={form}
      handleFormChange={handleFormChange}
      handleSubmit={handleSubmit}
    />
  );
};

export default EnhancedRegisterItem;
