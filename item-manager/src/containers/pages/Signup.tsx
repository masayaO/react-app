import React, { ChangeEvent, FC, FormEvent, useState } from 'react';
import { useNavigate } from 'react-router';
import { auth } from '../../firebase';
import Signup from '../../components/pages/Signup';
import Paths from '../../utils/paths';
import getPath from '../../utils/get-path';

const EnhancedSignup: FC = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  const signup = async (email: string, password: string) => {
    await auth
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        navigate(
          getPath<typeof Paths.home>({ path: Paths.home }),
        );
      })
      .catch((error) => {
        // eslint-disable-next-line no-alert
        alert(error);
      });
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await signup(form.email, form.password);
  };

  return (
    <Signup
      form={form}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
    />
  );
};

export default EnhancedSignup;
