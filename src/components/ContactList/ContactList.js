import React from 'react';
import ContactsItem from '../ContactsItem/ContactsItem';

function ContactsList({ contacts, onRemoveContact }) {
  return (
    <ul>
      {contacts.map(elem => (
        <ContactsItem
          key={elem.id}
          contact={elem}
          onRemoveContact={onRemoveContact}
        ></ContactsItem>
      ))}
    </ul>
  );
}

export default ContactsList;
