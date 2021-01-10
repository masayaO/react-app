import React, { FC } from 'react';
import { useNavigate } from 'react-router';
import DeleteButton from '../../components/molecules/DeleteButton';
import { deleteItem } from '../../domains';
import Paths from '../../utils/paths';
import getPath from '../../utils/get-path';

const EnhancedDeleteButton: FC<{ itemId: string }> = ({ itemId }) => {
  const navigate = useNavigate();
  const handleClick = async () => {
    await deleteItem(itemId);
    navigate(
      getPath<typeof Paths.home>({ path: Paths.home }),
    );
  };

  return <DeleteButton handleDelete={handleClick} />;
};

export default EnhancedDeleteButton;
