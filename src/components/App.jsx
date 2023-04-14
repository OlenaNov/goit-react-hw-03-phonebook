import { Component } from "react";
import { nanoid } from 'nanoid';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

import ContactForm from "./ContactForm";
import ContactList from "./ContactList";
import Filter from "./Filter";

export class App extends Component {

  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: '',
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
