import React from 'react';
import Header from './Header';
import Body from './Body';
import Modal from './Body/Modal';

class Layout extends React.Component {
  constructor(props) {
    super(props);

    this.state = [{ displayModal: false }];
  }

  displayModal = (value = true) => {
    this.setState({ displayModal: value });
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
      </>
    );
  }
}

export default Layout;