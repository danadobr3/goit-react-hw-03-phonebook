import { Component } from 'react';
import { nanoid } from 'nanoid';

import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

import cssapp from './App.module.css';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    
    filter: '',
  };
 
   componentDidMount() {
    
    const savedContacts = localStorage.getItem('contacts');

    if (savedContacts) {
      this.setState({ contacts: JSON.parse(savedContacts) });
    }
   }
  
   componentDidUpdate(prevProps, prevState) {
   
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
   }

  addContact = (newContact) => {
    const { contacts } = this.state;

    const loweredCase = newContact.name.toLowerCase().trim();

    const exists = contacts.some(
      (contact) => contact.name.toLowerCase().trim() === loweredCase
    );

    if (exists) {
      alert(`${newContact.name} is already in contacts!`);
    } else {
      this.setState((prevState) => ({
        contacts: [...prevState.contacts, { ...newContact, id: nanoid() }],
      }));
    }
  };

  addFilter = event => {
    this.setState({ filter: event.currentTarget.value });
  };

  filteredContacts = () => {
    const { filter, contacts } = this.state;

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  deleteContact = id =>
    this.setState(({ contacts }) => ({
      contacts: contacts.filter(contact => contact.id !== id),
    }));

  render() {
    const { filter } = this.state;

    return (
      <section className={cssapp.content}>
        <div className={cssapp.content__container}>
          <ContactForm addContact={this.addContact} />
          <ContactList
            contacts={this.filteredContacts()}
            deleteContact={this.deleteContact}
          >
            <Filter filter={filter} addFilter={this.addFilter} />
          </ContactList>
        </div>
      </section>
    );
  }
}