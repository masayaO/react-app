import React, { FC, useState } from 'react';
import { useNavigate } from 'react-router';
import Header from '../../components/organisms/Header';
import { auth } from '../../firebase';
import Paths from '../../utils/paths';
import getPath from '../../utils/get-path';

const EnhancedHeader: FC = () => {
  const [activeItem, setActiveItem] = useState('home');
  const navigate = useNavigate();

  const handleItemClick = async (nextActiveItem: string) => {
    setActiveItem(nextActiveItem);
    if (nextActiveItem === 'register') {
      navigate(
        getPath<typeof Paths.items>({ path: Paths.items }),
      );
    } else if (nextActiveItem === 'logout') {
      await auth.signOut();
    } else {
      navigate(
        getPath<typeof Paths.home>({ path: Paths.home }),
      );
    }
  };

  return <Header activeItem={activeItem} handleItemClick={handleItemClick} />;
};

export default EnhancedHeader;
