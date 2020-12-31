import React, { FC, useState } from 'react';
import { useNavigate } from 'react-router';
import Header from '../../components/organisms/Header';

const EnhancedHeader: FC<{ userId: string }> = ({ userId }) => {
  const [activeItem, setActiveItem] = useState('home');
  const navigate = useNavigate();

  const handleItemClick = (nextActiveItem: string) => {
    setActiveItem(nextActiveItem);

    if (nextActiveItem === 'register') {
      navigate(`/${userId}/register`);
    } else {
      navigate('/');
    }
  };

  return <Header activeItem={activeItem} handleItemClick={handleItemClick} />;
};

export default EnhancedHeader;
