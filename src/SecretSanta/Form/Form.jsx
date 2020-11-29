import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from '../Layout/Body/Button';

class Form extends React.Component {
  validateData = e => {
    e.preventDefault();

    const resetForm = this.props.validateData(
      e.target.elements.name.value.trim(),
      e.target.elements.email.value.trim(),
    );

    if (resetForm) {
      document.getElementById('elf-form').reset();
    }
  };

  render() {
    return (
      <>
        <form autoComplete="off" onSubmit={this.validateData} id="elf-form" className="d-flex flex-column align-items-center">
          <input type="text" name="name" className="input" placeholder="Name" />
          <input type="text" name="email" className="input" placeholder="Email" />
          <Button
            prependIcon={<FontAwesomeIcon icon="candy-cane" className="mr-2" size="lg" />}
            text="Add to your list"
          />
        </form>
      </>
    );
  }
}

export default Form;