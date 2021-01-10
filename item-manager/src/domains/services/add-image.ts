import { storage } from '../../firebase';

const registerImage = async (userId: string, image: File): Promise<string> => {
  const uploadTask = storage.ref(`/${userId}/${image.name}`);
  uploadTask
    .put(image)
    .then((u) => {
      // eslint-disable-next-line no-console
      console.log(u.ref.name);
    })
    .catch((error) => {
      // eslint-disable-next-line no-console
      console.log(error);
    });

  return uploadTask.getDownloadURL().then((url) => String(url));
};

export default registerImage;
