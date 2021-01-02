import React, { ChangeEvent, FC, FormEvent } from 'react';
import { Form } from 'semantic-ui-react';
import PageTitle from '../molecules/PageTitle';

type LoginFormState = {
  email: string;
  password: string;
};

type Props = {
  form: LoginFormState;
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (event: FormEvent<HTMLFormElement>) => void;
};

const Login: FC<Props> = (props) => {
  const { form, handleChange, handleSubmit } = props;

  return (
    <>
      <PageTitle title="Login" />
      <Form onSubmit={handleSubmit}>
        <Form.Input
          label="Email"
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
        />
        <Form.Input
          label="Password"
          type="password"
          name="password"
          value={form.password}
          onChange={handleChange}
        />
        <Form.Button type="submit" color="black">
          Login
        </Form.Button>
      </Form>
    </>
  );
};

export default Login;
