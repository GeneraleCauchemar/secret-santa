import React from 'react';

class Snow extends React.Component {
  render() {
    return <div className={this.props.display ? '' : 'd-none'}>
      <div className="snow layer1 a" />
      <div className="snow layer1" />
      <div className="snow layer2 a" />
      <div className="snow layer2" />
      <div className="snow layer3 a" />
      <div className="snow layer3" />
    </div>;
  }
}

export default Snow;