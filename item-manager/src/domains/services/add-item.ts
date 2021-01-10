import { db } from '../../firebase';

type RegisterItem = {
  itemName: string;
  userId: string;
  description: string;
  imageName: string;
  imageUrl: string;
};

const addItem = (item: RegisterItem): void => {
  const docRef = db.collection('items');
  docRef
    .add(item)
    .then((doc) => doc.id)
    .catch((error) => {
      // eslint-disable-next-line no-console
      console.log(error);
    });
};

export default addItem;
