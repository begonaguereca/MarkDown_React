import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import InputBox from './components/InputBox.jsx';
import Display from './components/Display.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: ''
    }
    this.renderItems = this.renderItems.bind(this);
  }

renderItems(e) {
console.log('e', e)
  $.ajax({
    type: "POST",
    url: '/translate',
    data: {data: e},
    success: (data)=> {
      this.setState({
        display: data
      });
    },
    error: (err) => {
      console.log('err', err);
    }
  });
}

  render () {
    return (
      <div className= "container-fluid">

        <div className="row">
          <div className="col col-md-12">
            <h1 className="text-center">Markdown Parser</h1>
          </div>
        </div>

        <div className="row">
          <div className="col col-md-6">
            <Display text={this.state.display}/>
          </div>
          <div className="col col-md-6">
            <InputBox renderItems={this.renderItems}/>
          </div>
        </div>

    </div>
  )}
}

ReactDOM.render(<App />, document.getElementById('app'));
