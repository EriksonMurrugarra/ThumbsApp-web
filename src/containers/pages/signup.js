import React, { Component } from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react';


class SignUpPage extends Component {

  render () {
    return (
      <Form>
        <Form.Field>
          <label>Nombre</label>
          <input placeholder='Nombre' />
        </Form.Field>
        <Form.Field>
          <label>Email</label>
          <input placeholder='Email' />
        </Form.Field>
        <Form.Field>
          <label>Contraseña</label>
          <input placeholder='Contraseña' />
        </Form.Field>
        <Form.Field>
          <Checkbox label='Acepto los términos y condiciones.' />
        </Form.Field>
        <Button type='submit'>Ingresar</Button>
      </Form>
    )
  }

}

export default SignUpPage;