import React, { Component } from 'react';
import { Button, Form } from 'semantic-ui-react';


class LoginPage extends Component {

  render () {
    return (
      <Form>
        <Form.Field>
          <label>Email</label>
          <input placeholder='Email' />
        </Form.Field>
        <Form.Field>
          <label>Contraseña</label>
          <input placeholder='Contraseña' />
        </Form.Field>
        <Button type='submit'>Ingresar</Button>
      </Form>
    )
  }

}

export default LoginPage;