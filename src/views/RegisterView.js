import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as authOperations from '../redux/auth/auth-operations';

const styles = {
  form: {
    width: 320,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  label: {
    display: 'flex',
    flexDirection: 'column',

    marginBottom: 15,
  },
};

class RegisterView extends Component {
  state = {
    name: '',
    email: '',
    password: '',
  };

  handleChange = e => {
    const { name, value } = e.currentTarget;

    this.setState({
      [name]: value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
    console.log(this.props.onRegister);
    this.props.onRegister(this.state);
    this.setState({ name: '', email: '', password: '' });
  };

  render() {
    const { name, email, password } = this.state;

    return (
      <div>
        <h3>Страница регистрации</h3>

        <form autoComplete="off" style={styles.form} onSubmit={this.handleSubmit}>
          <label style={styles.label}>
            Name
            <input
              value={name}
              onChange={this.handleChange}
              type="text"
              name="name"
              placeholder="Enter name"
            />
          </label>

          <label style={styles.label}>
            Email address
            <input
              value={email}
              onChange={this.handleChange}
              type="email"
              name="email"
              placeholder="Enter email"
            />
          </label>

          <label style={styles.label}>
            Email address
            <input
              value={password}
              onChange={this.handleChange}
              type="password"
              name="password"
              placeholder="Password"
            />
          </label>

          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = {
  onRegister: authOperations.register,
};

export default connect(null, mapDispatchToProps)(RegisterView);
