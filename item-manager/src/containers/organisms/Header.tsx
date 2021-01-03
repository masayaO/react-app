import React, { FC, useState } from 'react';
import { useNavigate } from 'react-router';
import Header from '../../components/organisms/Header';
import { auth } from '../../firebase';

const EnhancedHeader: FC = () => {
  const [activeItem, setActiveItem] = useState('home');
  const navigate = useNavigate();

  const handleItemClick = async (nextActiveItem: string) => {
    setActiveItem(nextActiveItem);
    if (nextActiveItem === 'register') {
      navigate(`/items`);
    } else if (nextActiveItem === 'logout') {
      await auth.signOut();
    } else {
      navigate('/');
    }
  };

  return <Header activeItem={activeItem} handleItemClick={handleItemClick} />;
};

export default EnhancedHeader;
