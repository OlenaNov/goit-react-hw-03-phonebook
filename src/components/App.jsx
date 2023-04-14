import { Component } from "react";
import { nanoid } from 'nanoid';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

import ContactForm from "./ContactForm";
import ContactList from "./ContactList";
import Filter from "./Filter";

const CONTACTS_STORAGE_KEY = 'contacts-storage';

export class App extends Component {

  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const contactsData = JSON.parse(localStorage.getItem(CONTACTS_STORAGE_KEY));
    if(contactsData) {
      this.setState({ contacts: contactsData });
    };
  };

  componentDidUpdate(prevProps, prevState) {
    if(prevState.contacts !== this.state.contacts) {
      localStorage.setItem(CONTACTS_STORAGE_KEY, JSON.stringify(this.state.contacts));
    }
  };
            
  addContact = (name, number) => {
  if(this.controllingUniqueness(name)) {
    Notify.warning(`${name} is already in contacts`);
    return;
  };

  const newContact = {id: nanoid(), name, number};
      
  this.setState(prevState => ({
    "contacts": [newContact, ...prevState.contacts],
  }));        
  };

  controllingUniqueness = (name) => {
    const { contacts } = this.state;

    return contacts.some(contact => contact.name === name)
  };

  deleteContact = idItem => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact =>
        contact.id !== idItem)
    }))
  };

  getVisibileContacts = () => {
    const { contacts, filter } = this.state;
    const nameNormalized = filter.toLowerCase();

    return contacts.filter(contact => (
      contact.name.toLowerCase().includes(nameNormalized)
    ))

  };
 
  filterContacts = e => {
    this.setState({
      filter: e.currentTarget.value,
    })
  };

  render() {
    const { filter } = this.state;
    const visibleContacts = this.getVisibileContacts();
    return (
      <div>
        <h1>Phonebook</h1>
          <ContactForm 
          onAddContact={this.addContact}
          />
        <h2>Contacts</h2>
        <Filter 
        value={filter}
        onFilter={this.filterContacts}
        />
        <ContactList 
          contacts={visibleContacts}
          onDeleteContact={this.deleteContact}
          />
      </div>
   );
  };
};
