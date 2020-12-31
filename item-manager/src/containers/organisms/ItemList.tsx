import React, { FC } from 'react';
import { useQuery } from 'react-query';
import { getUserItems } from '../../domains';
import ItemList from '../../components/organisms/ItemList';

const EnhancedItemList: FC<{ userId: string }> = ({ userId }) => {
  const { data: items = [] } = useQuery([userId, 'items'], () =>
    getUserItems(userId),
  );

  return <ItemList items={items} />;
};

export default EnhancedItemList;
