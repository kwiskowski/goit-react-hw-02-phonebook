import { Component } from 'react';
import css from './PhonebookForm.module.css';
import PropTypes from 'prop-types';

import { nanoid } from 'nanoid';
const id = nanoid(); //=> "Uakgb_J5m9g-0JDMbcJqLJ"

export class PhonebookForm extends Component {
  state = {
    name: '',
    id: '',
  };

  handleSubmit = evt => {
    evt.preventDefault();
    const { name, id } = this.state;
    console.log('submit');
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className={css.input}>
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <button type="submit" className="submitButton">
          Add contact
        </button>
      </form>
    );
  }
}

PhonebookForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
