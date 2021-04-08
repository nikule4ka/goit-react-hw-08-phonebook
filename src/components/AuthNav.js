import React from 'react';
import { NavLink } from 'react-router-dom';

const styles = {
  link: {
    display: 'inline-block',
    textDecoration: 'none',
    padding: 12,
    fontWeight: 700,
    color: '#2A363B',
  },
  activeLink: {
    color: '#E84A5F',
  },
};

const AuthNav = () => {
  return (
    <div>
      <NavLink exact to="/register" style={styles.link} activeStyle={styles.activeLink}>
        Регистрация
      </NavLink>
      <NavLink exact to="/login" style={styles.link} activeStyle={styles.activeLink}>
        Логин
      </NavLink>
    </div>
  );
};

export default AuthNav;
