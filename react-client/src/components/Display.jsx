import React from 'react';

class Display extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    }

  }



  render () {
    return (
      <div>
        <h1>I'm here</h1>
        <div className="text-Display">{this.props.text}</div>
      </div>
  )};
}

export default Display;
