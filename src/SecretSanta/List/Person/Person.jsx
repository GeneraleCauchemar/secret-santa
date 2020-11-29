import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from '../../Layout/Body/Button';

class Person extends React.Component {
  removePerson = e => {
    e.preventDefault();

    this.props.removePerson(this.props.email);
  };

  render() {
    return (
      <li className="d-flex justify-content-between">
        <div className="person__container d-flex">
          <span className="person__index">{this.props.index}</span>
          <span className="person__name">{this.props.name}</span>
          <span className="person__email">{this.props.email}</span>
          <Button
            className="person__remove ml-auto"
            onClick={this.removePerson}
            text={<span>Remove?</span>}
            appendIcon={<FontAwesomeIcon icon="backspace" />}
          />
        </div>
      </li>
    );
  }
}

export default Person;