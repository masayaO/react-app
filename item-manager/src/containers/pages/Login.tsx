import React, { ChangeEvent, FC, FormEvent, useState } from 'react';
import { useNavigate } from 'react-router';
import { auth } from '../../firebase';
import Login from '../../components/pages/Login';
import paths from '../../paths';
import errorMessages, { AuthError } from '../../firebase/error-messages';

const EnhancedLogin: FC = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    email: '',
    password: '',
  });
  const [authError, setError] = useState('');

  const login = async (email: string, password: string) => {
    await auth
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        navigate(paths.home);
      })
      .catch((error) => {
        // eslint-disable-next-line no-console
        console.log(error);
        const e = error as AuthError;
        if (Object.keys(errorMessages).includes(e.code)) {
          setError(errorMessages[e.code]);
        } else {
          setError(e.message);
        }
      });
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    setError('');
    event.preventDefault();
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    await login(form.email, form.password);
  };

  return (
    <Login
      form={form}
      error={authError}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
    />
  );
};

export default EnhancedLogin;
