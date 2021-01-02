import React, { ChangeEvent, FC, FormEvent } from 'react';
import { Form } from 'semantic-ui-react';
import PageTitle from '../molecules/PageTitle';

type SignupFormState = {
  email: string;
  password: string;
};

type Props = {
  form: SignupFormState;
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (event: FormEvent<HTMLFormElement>) => void;
};

const Signup: FC<Props> = (props) => {
  const { form, handleChange, handleSubmit } = props;

  return (
    <>
      <PageTitle title="Signup" />
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
          Signup
        </Form.Button>
      </Form>
    </>
  );
};

export default Signup;
