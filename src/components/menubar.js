import React, { Component } from 'react';
import { Menu, Image, Container } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import Logo from '../images/logo.png';
import User from '../images/user.jpg';

class MenuBar extends Component {

  state = {
    activeItem: 'tests'
  };

  handleClick = (e, { name }) => {
    this.setState({
      activeItem: name
    });
  }

  render () {
    const { activeItem } = this.state;

    return (<Menu inverted borderless={true} fixed="top">
      <Container>
        <Link to="/pruebas">
          <Menu.Item as="span" name="home" onClick={this.handleClick}>
            <img alt="Logo" src={Logo}/>
          </Menu.Item>
        </Link>
        <Link to="/pruebas">
          <Menu.Item as="span" name="tests" active={activeItem === 'tests' || activeItem === 'home'} onClick={this.handleClick}>
            Pruebas
          </Menu.Item>
        </Link>
        <Link to="/amigos">
          <Menu.Item as="span" name="friends" active={activeItem === 'friends'} onClick={this.handleClick}>
            Amigos
          </Menu.Item>
        </Link>
        <Menu.Menu position="right">
          <Link to="/login">
            <Menu.Item as="span">
              Ingresar
            </Menu.Item>
          </Link>
          <Link to="/signup">
            <Menu.Item as="span">
              Registrarme
            </Menu.Item>
          </Link>
          <Link to="/profile">
            <Menu.Item as="span" name="profile" active={activeItem === 'profile'} onClick={this.handleClick}>
              <Image src={User} avatar/>
            </Menu.Item>
          </Link>
        </Menu.Menu>

      </Container>
    </Menu>);
  }


}
export default MenuBar;
