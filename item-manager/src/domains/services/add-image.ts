import { storage } from '../../firebase';

type RegisteredImageData = {
  imageName: string;
  imageUrl: string;
};
const registerImage = async (
  userId: string,
  image: File,
): Promise<RegisteredImageData> => {
  const imageName = `${Date.now()}_${image.name}`;
  const uploadTask = storage.ref(`/${userId}/${imageName}`);
  await uploadTask
    .put(image)
    .then((u) => {
      // eslint-disable-next-line no-console
      console.log(u.ref.name);
    })
    .catch((error) => {
      // eslint-disable-next-line no-console
      console.log(error);
    });

  return storage
    .ref()
    .child(`/${userId}/${imageName}`)
    .getDownloadURL()
    .then((url) => ({ imageName, imageUrl: String(url) }));
};

export default registerImage;
