import React from 'react';

const SubmitButton = ({ className, method, icon, text }) => {
  // const { className, method, icon, text } = submitButton;

  return (
    <button className={ className } onClick={ method }>
      {/* TODO: voir comment inclure une condition */}
      <img src={ icon } className="santa-icon" alt="santa-icon" />
      { text }
    </button>
  )
};

export default SubmitButton;