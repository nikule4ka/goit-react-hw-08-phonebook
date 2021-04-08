import React, { Component } from 'react';

import { Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class LoginView extends Component {
  render() {
    return (
      <div>
        <h3>Страница логина</h3>
        <Form onSubmit={this.handleSubmit} autoComplete="off">
          <Form.Group controlId="formBasicEmail">
            <Form.Label>
              Email address
              <Form.Control type="email" name="email" placeholder="Enter email" />
            </Form.Label>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>
              Email address
              <Form.Control type="password" name="password" placeholder="Password" />
            </Form.Label>
          </Form.Group>
          <Button type="submit" variant="outline-dark">
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}

export default LoginView;
