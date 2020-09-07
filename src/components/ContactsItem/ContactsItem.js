import React from 'react';

function ContactsItem({ contact: { name, number, id }, onRemoveContact }) {
  return (
    <li>
      <span>
        {name}: {number}
      </span>
      <button
        type="button"
        data-id={id}
        onClick={e => {
          onRemoveContact(e.target.dataset.id);
        }}
      >
        delete
      </button>
    </li>
  );
}

export default ContactsItem;
