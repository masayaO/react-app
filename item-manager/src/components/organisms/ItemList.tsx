import React, { FC } from 'react';
import { Card, Image } from 'semantic-ui-react';
import { UserItem } from '../../domains';
import DeleteButton from '../../containers/molecules/DeleteButton';

const ItemList: FC<{ items: UserItem[] }> = ({ items = [] }) => (
  <>
    <Card.Group className="item-list-container">
      {items.map((item) => (
        <Card key={item.itemId}>
          <Image src={item.imageUrl} wrapped ui={false} />
          <Card.Content>
            <Card.Header>{item.itemName}</Card.Header>
            <Card.Description>{item.description}</Card.Description>
          </Card.Content>
          <Card.Content extra textAlign="right">
            <DeleteButton itemId={item.itemId} />
          </Card.Content>
        </Card>
      ))}
    </Card.Group>
  </>
);

export default ItemList;
