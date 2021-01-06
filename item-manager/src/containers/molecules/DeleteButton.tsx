import React, { FC } from 'react';
import { useNavigate } from 'react-router';
import DeleteButton from '../../components/molecules/DeleteButton';
import { deleteItem } from '../../domains';
import paths from '../../paths';

const EnhancedDeleteButton: FC<{ itemId: string }> = ({ itemId }) => {
  const navigate = useNavigate();
  const handleClick = async () => {
    await deleteItem(itemId);
    navigate(paths.home);
  };

  return <DeleteButton handleDelete={handleClick} />;
};

export default EnhancedDeleteButton;
