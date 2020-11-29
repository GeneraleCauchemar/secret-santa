import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Person extends React.Component {
  removePerson = e => {
    e.preventDefault();

    this.props.removePerson(this.props.index - 1);
  }

  render() {
    return (
      <li className="d-flex justify-content-between">
        <div className="person__container d-flex">
          <span className="person__index">{this.props.index}</span>
          <span className="person__name">{this.props.name}</span>
          <span className="person__email">{this.props.email}</span>
          <button className="person__remove ml-auto" onClick={this.removePerson}>
            <span>Remove?</span><FontAwesomeIcon icon="backspace" />
          </button>
        </div>
      </li>
    );
  }
}

export default Person;