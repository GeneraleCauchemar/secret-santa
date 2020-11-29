import React from 'react';
import Header from './Header';
import Body from './Body';
import Modal from '../Modal';
import Snow from '../Snow';

class Layout extends React.Component {
  constructor(props) {
    super(props);

    this.state = [{
      displayModal: false,
      displaySnow: false,
    }];
  }

  displayModal = (value = true) => {
    this.setState({
      displayModal: value,
      displaySnow: value
    });
  };

  closeModal = () => {
    this.displayModal(false);
  }

  render() {
    return (
      <>
        <Header />
        <Body displayModal={this.displayModal} />
        <Modal displayModal={this.state.displayModal} closeModal={this.closeModal} />
        <Snow display={this.state.displaySnow} />
      </>
    );
  }
}

export default Layout;