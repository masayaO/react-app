import { isUserItems, UserItem } from '../models/user-item';
import { db } from '../../firebase';

const getUserItems = async (userId: string): Promise<UserItem[]> => {
  const docRef = db.collection('items');

  const items = await docRef
    .where('userId', '==', userId)
    .get()
    .then((querySnapshot) =>
      querySnapshot.docs.map((doc) => ({ itemId: doc.id, ...doc.data() })),
    );

  if (!isUserItems(items)) {
    throw Error('Api Error');
  }

  return items;
};

export default getUserItems;
