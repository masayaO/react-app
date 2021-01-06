import React, { FC, useState } from 'react';
import { useNavigate } from 'react-router';
import Header from '../../components/organisms/Header';
import { auth } from '../../firebase';
import paths from '../../paths';

const EnhancedHeader: FC = () => {
  const [activeItem, setActiveItem] = useState('home');
  const navigate = useNavigate();

  const handleItemClick = async (nextActiveItem: string) => {
    setActiveItem(nextActiveItem);
    if (nextActiveItem === 'register') {
      navigate(paths.items);
    } else if (nextActiveItem === 'logout') {
      await auth.signOut();
    } else {
      navigate(paths.home);
    }
  };

  return <Header activeItem={activeItem} handleItemClick={handleItemClick} />;
};

export default EnhancedHeader;
