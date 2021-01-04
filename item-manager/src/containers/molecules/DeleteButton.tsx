import React, { FC } from 'react';
import DeleteButton from '../../components/molecules/DeleteButton';

const EnhancedDeleteButton: FC<{ itemId: string }> = ({ itemId }) => {
  const handleClick = () => {
    // eslint-disable-next-line no-console
    console.log(`${itemId}`);
  };

  return <DeleteButton handleDelete={handleClick} />;
};

export default EnhancedDeleteButton;
