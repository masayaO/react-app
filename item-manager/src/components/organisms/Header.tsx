import React, { FC } from 'react';
import { Menu } from 'semantic-ui-react';

type Props = {
  activeItem: string;
  handleItemClick: (nextActiveItem: string) => void;
};

const Header: FC<Props> = (props) => {
  const { activeItem, handleItemClick } = props;

  return (
    <>
      <Menu inverted>
        <Menu.Item
          name="home"
          active={activeItem === 'home'}
          onClick={() => handleItemClick('home')}
        />
        <Menu.Item
          name="register"
          active={activeItem === 'register'}
          onClick={() => handleItemClick('register')}
        />
      </Menu>
    </>
  );
};

export default Header;
