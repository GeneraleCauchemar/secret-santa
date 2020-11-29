import React from 'react';
import Person from './Person';
import Button from '../Button';

class List extends React.Component {
  pairPeople = e => {
    e.preventDefault();

    this.props.pairPeople(this.props.people);
  };

  render() {
    return (
      <div className="people__container d-flex flex-column">
        <div className={`people__container-list ${3 <= this.props.people.length ? `people__container-list-w-button` : ``}`}>
          {
            0 < this.props.people.length ?
              <ul>{
                this.props.people.map((person, index) => {
                  return <Person
                    key={index}
                    index={index + 1}
                    name={person.name}
                    email={person.email}
                    removePerson={this.props.removePerson}
                  />;
                })
              }</ul> :
              <p>No Santa's elves yet!</p>
          }
        </div>
        {
          3 <= this.props.people.length ?
            <Button
              className="button__pair"
              onClick={this.pairPeople}
              text="Pair them up!" /> :
            ''
        }

      </div>
    );
  }
}

export default List;