import React from 'react';
import Form from '../../Form';
import List from '../../List';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Body extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      people: [], // List of signed up people
      shuffledPeople: [],
      error: '',
    };
  }

  validateData = (name, email) => {
    if ('' === name || '' === email) {
      this.setState({
        error: 'Both name and email are required!',
      });
    } else if (this.state.people.some(person => email === person.email)) {
      this.setState({
        error: 'Each email address must be unique!',
      });
    } else if (null === email.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)) {
      this.setState({
        error: 'The email provided isn\'t in a valid format!',
      });
    } else {
      this.addPerson(name, email);

      return true;
    }

    return false;
  };

  addPerson = (name, email) => {
    this.setState({
      people: [
        ...this.state.people,
        { name: name, email: email },
      ],
      error: '',
    });
  };

  removePerson = email => {
    this.setState({ people: this.state.people.filter(person => email !== person.email) });
  };

  shuffle = array => {
    for (let i = array.length - 1; 0 < i; i--) {
      const j = Math.floor(Math.random() * i), temp = array[i];

      array[i] = array[j];
      array[j] = temp;
    }
  };

  shufflePeople = people => {
    let pool = [...people];
    this.shuffle(pool);

    people.map((person, index) => {
      if (pool[index]['email'] === person['email']) {
        this.shufflePeople(people);
      }
    });

    this.setState({ shuffledPeople: pool });

    this.props.displayModal();
  };

  render() {
    return (
      <div className="body-wrap">
        <div className="d-flex justify-content-between">
          <div className="pr-5">
            <Form validateData={this.validateData} resetForm={this.state.resetForm} />
            {
              '' !== this.state.error ?
                <p className="form__error my-3">
                  <FontAwesomeIcon icon="exclamation-triangle" className="mr-2" size="lg" /> {this.state.error}</p> :
                null
            }
          </div>
          <List
            people={this.state.people}
            removePerson={this.removePerson}
            pairPeople={this.shufflePeople} />
        </div>
      </div>
    );
  }
}

export default Body;