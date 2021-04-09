import React from 'react';
import { connect } from 'react-redux';
import defaultAvatar from './avatar.png';
import { getUserName } from '../../redux/auth/auth-selectors';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { logOut } from '../../redux/auth/auth-operations';

const UserMenu = ({ avatar, name, onLogOut }) => {
  return (
    <div>
      <img src={avatar} alt="" width="32" />
      <span>Welcome, {name}</span>
      <Button type="button" onClick={onLogOut} variant="outline-dark">
        Logout
      </Button>
    </div>
  );
};

const mapStateToProps = state => ({
  name: getUserName(state),
  avatar: defaultAvatar,
});

const mapDispatchToProps = {
  onLogOut: logOut,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);
