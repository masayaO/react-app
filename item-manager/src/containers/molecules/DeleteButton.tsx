import React, { FC } from 'react';
import { Navigate } from 'react-router-dom';
import { useQueryClient } from 'react-query';
import DeleteButton from '../../components/molecules/DeleteButton';
import { deleteItem } from '../../domains';

const EnhancedDeleteButton: FC<{ itemId: string }> = ({ itemId }) => {
  const client = useQueryClient();
  const handleClick = async () => {
    await deleteItem(itemId);
    client.removeQueries(['items']);

    return <Navigate to="/" replace />;
  };

  return <DeleteButton handleDelete={handleClick} />;
};

export default EnhancedDeleteButton;
