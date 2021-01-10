import { ChangeEvent, FormEvent, useState } from 'react';
import { useNavigate } from 'react-router';
import registerImage from '../domains/services/add-image';
import { addItem } from '../domains';
import Paths from '../utils/paths';
import getPath from '../utils/get-path';

type RegisterItemForm = {
  itemName: string;
  description: string;
  imageName: string;
  imageUrl: string;
};

const useRegisterItem = (
  userId: string,
): [
  RegisterItemForm,
  (event: ChangeEvent<HTMLInputElement>) => Promise<void>,
  (event: FormEvent<HTMLFormElement>) => void,
] => {
  const navigate = useNavigate();
  const [form, setForm] = useState<RegisterItemForm>({
    itemName: '',
    description: '',
    imageName: '',
    imageUrl: '',
  });

  const handleFormChange = async (event: ChangeEvent<HTMLInputElement>) => {
    const imageOpt = event.target.files?.[0];

    if (imageOpt) {
      const imageData = await registerImage(userId, imageOpt);
      setForm({
        ...form,
        imageName: imageData.imageName,
        imageUrl: imageData.imageUrl,
      });
    } else {
      setForm({ ...form, [event.target.name]: event.target.value });
    }
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    addItem({ ...form, userId });
    navigate(
      getPath<typeof Paths.home>({ path: Paths.home }),
    );
  };

  return [form, handleFormChange, handleSubmit];
};

export default useRegisterItem;
