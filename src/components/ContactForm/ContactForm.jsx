import { Component } from 'react';
import { nanoid } from 'nanoid';
import cssform from '../ContactForm/ContactForm.module.css';

export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleFormSubmit = event => {
    event.preventDefault();

    const { name, number } = this.state;
    const { addContact } = this.props;

    addContact({ id: nanoid(), name, number });
    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;

    return (
      <section className={cssform.form}>
        <h1 className={cssform.form__title}>Phonebook</h1>
        <form className={cssform.form__container} onSubmit={this.handleFormSubmit}>
          <label className={cssform.form__label}>Name</label>
          <input
            name="name"
            type="text"
            className={cssform.form__input}
            placeholder="Enter name"
            required
            value={name}
            onChange={this.handleInputChange}
            
          />
          <label className={cssform.form__label}>Number</label>
          <input
            name="number"
            type="tel"
            className={cssform.form__input}
            placeholder="Enter phone number"
            required
            value={number}
            onChange={this.handleInputChange}
          />
          <button className={cssform.form__btn} type="submit">
            Add contact
          </button>
        </form>
      </section>
    );
  }
}