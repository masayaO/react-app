import React, { FC } from 'react';
import { Helmet } from 'react-helmet';
import { Divider, Header } from 'semantic-ui-react';
import './PageTitle.css';

const PageTitle: FC<{ title: string }> = ({ title }) => (
  <>
    <Helmet>
      <title>{title}</title>
    </Helmet>
    <Header as="h1">
      <Header.Content>{title}</Header.Content>
    </Header>
    <Divider />
  </>
);

export default PageTitle;
