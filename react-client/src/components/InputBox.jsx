import React from 'react';

class InputBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      value: event.target.value
    });
    
     this.props.renderItems(event.target.value);
  }

  render () {
    return (
      <div class="input-group">
        <div class="input-group-prepend">
          <span class="input-group-text"><b>Do it:</b></span>
        </div>
        <textarea class="form-control" aria-label="With textarea"  value={this.state.value} onChange={this.handleChange}></textarea>
      </div>
  )};
}

export default InputBox;
