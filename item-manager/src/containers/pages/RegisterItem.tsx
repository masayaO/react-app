import React, { ChangeEvent, FC, FormEvent, useState } from 'react';
import { useParams } from 'react-router';
import RegisterItem from '../../components/pages/RegisterItem';

const EnhancedRegisterItem: FC = () => {
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
    // eslint-disable-next-line no-console
    console.log(
      `userId: ${userId}, form: ${form.itemName}, ${form.imageUrl}, ${form.description}`,
    );
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
