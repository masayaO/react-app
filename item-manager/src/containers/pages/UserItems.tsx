import React, { FC } from 'react';
import UserItems from '../../components/pages/UserItems';

const EnhancedUserItems: FC<{ userId: string }> = ({ userId }) => (
  <UserItems userId={userId} />
);

export default EnhancedUserItems;
