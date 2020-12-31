import { isUserItems, UserItem } from '../models/user-item';
import userItems from '../../data/user-items';

const getUserItems = async (userId: string): Promise<UserItem[]> => {
  const filterItems = (id: string) =>
    userItems.filter((item) => item.userId === id);

  const response = (id: string) =>
    new Promise((resolve) => {
      setTimeout(() => resolve(filterItems(id)));
    });

  const items = (await response(userId)) as unknown[];

  if (!isUserItems(items)) {
    throw Error('Api Error');
  }

  return items;
};

export default getUserItems;
