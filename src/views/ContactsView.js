import React, { Component } from 'react';
import Container from '../components/Container';
import ContactForm from '../components/ContactForm';
import Filter from '../components/Filter';
import ContactList from '../components/ContactList';

class ContactsView extends Component {
  render() {
    return (
      <Container>
        <h1>Phonebook</h1>
        <ContactForm />

        <Filter />

        <h2>Contacts</h2>
        <ContactList />
      </Container>
    );
  }
}

export default ContactsView;
