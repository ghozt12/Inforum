/* ****************************
  ActivityElement
  React

  Respect Crew
**************************** */

/* ****************************
  Pages
**************************** */
/* Top Level React Component */
var React = require('react');
// Flux
var Actions = require('../../actions/Actions');

/* ****************************
  React
**************************** */
var ActivityElement = React.createClass({

  getInitialState: function() {
    return {
      isOpen: false
    }
  },
  
  render: function() {

    var style = (this.state.isOpen ? 'activity-element open' : 'activity-element');

    return (
      <div onTouchStart={this._handleClick} onTouchEnd={this._handleClick2} className={style}>
        {this.props.text}
        <i>{this.props.time}</i>
      </div>
    );
  },


  _handleClick: function() {
    this.setState({
      isOpen: true
    });
  },

  _handleClick2: function() {
    this.setState({
      isOpen: false
    });
  }

});

module.exports = ActivityElement;