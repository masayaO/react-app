import React, { ChangeEvent, FC, FormEvent } from 'react';
import { Card, Form, Grid } from 'semantic-ui-react';
import { useParams } from 'react-router';
import PageTitle from '../molecules/PageTitle';
import Header from '../../containers/organisms/Header';

type FormState = {
  itemName: string;
  description: string;
  imageUrl: string;
};

type Props = {
  form: FormState;
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (event: FormEvent<HTMLFormElement>) => void;
};

const RegisterItem: FC<Props> = (props) => {
  const { userId } = useParams();
  const { form, handleChange, handleSubmit } = props;

  return (
    <>
      <Header userId={userId} />
      <PageTitle title="Register Item" />
      <Grid columns={2}>
        <Grid.Column>
          <Form onSubmit={handleSubmit}>
            <Form.Input
              label="Item Name"
              type="text"
              name="itemName"
              value={form.itemName}
              onChange={handleChange}
            />
            <Form.Input
              label="Item Image"
              type="text"
              name="imageUrl"
              value={form.imageUrl}
              onChange={handleChange}
            />
            <Form.Input
              label="Description"
              type="text"
              name="description"
              value={form.description}
              onChange={handleChange}
            />
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
