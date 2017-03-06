const React = require('react'),
      ReactDOM = require('react-dom');

const Main = React.createClass({
  render(){
    return(
      <div>
        <h1>Welcome</h1>
        {this.props.children}
      </div>
    )
  }
})

module.exports = Main;
