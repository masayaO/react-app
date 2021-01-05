import { db } from '../../firebase';

const deleteItem = async (itemId: string): Promise<void> => {
  const docRef = db.collection('items').doc(itemId);
  await docRef
    .delete()
    .then()
    .catch((error) => {
      // eslint-disable-next-line no-console
      console.log(error);
    });
};

export default deleteItem;
