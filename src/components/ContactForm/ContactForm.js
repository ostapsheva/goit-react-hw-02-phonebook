import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = ({ target: { value, name } }) => {
    this.setState({ [name]: value });
  };

  handleSubmitForm = event => {
    const { name, number } = this.state;

    event.preventDefault();
    const contact = {
      name: name,
      number: number,
      id: uuidv4(),
    };
    this.props.onAddContact(contact);
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmitForm}>
          <label>
            Name
            <input
              name="name"
              type="text"
              value={this.state.name}
              onChange={this.handleChange}
              required
            />
          </label>
          <label>
            Number
            <input
              name="number"
              type="text"
              value={this.state.number}
              onChange={this.handleChange}
              required
            />
          </label>
          <button type="submit">Add contact</button>
        </form>
      </>
    );
  }
}

export default ContactForm;
