import React from 'react';
import Button from '../Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Modal extends React.Component {
  closeModal = () => {
    this.props.closeModal();
  }

  render() {
    return <>
      <div className={`modal__bg ${this.props.displayModal ? '' : 'd-none'}`} onClick={this.closeModal} />
      <div className={`modal__send d-flex flex-column justify-content-center ${this.props.displayModal ? '' : 'd-none'}`}>
        <p>To each their own! Santas have been appointed. Send joyous emails?</p>
        <div className="modal__send-buttons d-flex justify-content-around mt-4">
          <Button
            text="Send away!"
            className="modal__send-buttons validate"
            prependIcon={<FontAwesomeIcon icon="gifts" className="mr-2" size="lg" />} />
          <Button
            text="I need to rethink on my actions first"
            className="modal__send-buttons cancel"
            prependIcon={<FontAwesomeIcon icon="times" className="mr-2" size="lg" />}
            onClick={this.closeModal} />
        </div>
      </div>
    </>;
  }
}

export default Modal;