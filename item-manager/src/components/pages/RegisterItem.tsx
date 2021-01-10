import React, { ChangeEvent, FC, FormEvent } from 'react';
import { Card, Form, Grid } from 'semantic-ui-react';
import PageTitle from '../molecules/PageTitle';
import Header from '../../containers/organisms/Header';

type FormState = {
  itemName: string;
  description: string;
  imageUrl: string;
};

type Props = {
  form: FormState;
  handleFormChange: (event: ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (event: FormEvent<HTMLFormElement>) => void;
};

const RegisterItem: FC<Props> = (props) => {
  const { form, handleFormChange, handleSubmit } = props;

  return (
    <>
      <Header />
      <PageTitle title="Register Item" />
      <Grid columns={2}>
        <Grid.Column>
          <Form onSubmit={handleSubmit}>
            <Form.Input
              label="Item Name"
              type="text"
              name="itemName"
              value={form.itemName}
              onChange={handleFormChange}
            />
            <Form.Input
              label="Description"
              type="text"
              name="description"
              value={form.description}
              onChange={handleFormChange}
            />
            <Form.Input type="file" onChange={handleFormChange} />
            <Form.Button type="submit" color="black">
              Register
            </Form.Button>
          </Form>
        </Grid.Column>
        <Grid.Column>
          <Card
            image={form.imageUrl}
            header={form.itemName}
            description={form.description}
          />
        </Grid.Column>
      </Grid>
    </>
  );
};

export default RegisterItem;
