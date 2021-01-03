import React, { FC, useContext } from 'react';
import { useQuery } from 'react-query';
import { getUserItems } from '../../domains';
import ItemList from '../../components/organisms/ItemList';
import UserContext from '../../contexts';

const EnhancedItemList: FC = () => {
  const { userId } = useContext(UserContext);
  if (!userId) throw Error('');
  const { data: items = [] } = useQuery([userId, 'items'], () =>
    getUserItems(userId),
  );

  return <ItemList items={items} />;
};

export default EnhancedItemList;
