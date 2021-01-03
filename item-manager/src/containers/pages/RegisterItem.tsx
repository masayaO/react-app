import React, { ChangeEvent, FC, FormEvent, useContext, useState } from 'react';
import { useNavigate } from 'react-router';
import RegisterItem from '../../components/pages/RegisterItem';
import { addItem } from '../../domains';
import UserContext from '../../contexts';

const EnhancedRegisterItem: FC = () => {
  const navigate = useNavigate();
  const { userId } = useContext(UserContext);
  const [form, setForm] = useState({
    itemName: '',
    description: '',
    imageUrl: '',
  });

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    if (!userId) throw Error('');
    addItem({ ...form, userId });
    navigate('/');
  };

  return (
    <RegisterItem
      form={form}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
    />
  );
};

export default EnhancedRegisterItem;
