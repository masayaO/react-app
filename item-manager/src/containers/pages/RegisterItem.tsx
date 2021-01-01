import React, { ChangeEvent, FC, FormEvent, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import RegisterItem from '../../components/pages/RegisterItem';
import { addItem } from '../../domains';

const EnhancedRegisterItem: FC = () => {
  const navigate = useNavigate();
  const { userId } = useParams();
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
