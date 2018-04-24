import React from 'react';
import { Menu, Image } from 'semantic-ui-react';
import Logo from '../images/logo.png';
import User from '../images/user.jpg';

const MenuBar = () => (
  <Menu>
    <Menu.Item>
      <img alt="Logo" src={Logo}/>
    </Menu.Item>
    <Menu.Item>
      Tests
    </Menu.Item>
    <Menu.Item>
      Amigos
    </Menu.Item>
    <Menu.Menu position="right">
      <Menu.Item>
        <Image src={User} avatar/>
      </Menu.Item>
    </Menu.Menu>
  </Menu>
);

export default MenuBar;
