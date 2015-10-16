/* ****************************
  Catogory List
  react

  Respect Crew
**************************** */

/* ****************************
  Pages
**************************** */
var React = require('react');
// Flux
var Actions = require('../../actions/Actions');

/* ****************************
  React
**************************** */
var Catogorylist = React.createClass({

  render: function() {
    return (
      <li onClick={this._handleClick}>
        <p>{this.props.name}</p>
      </li>
    )
  },

  _handleClick: function(event) {
    var cases = {
      'Enviroment': 1,
      'Sport': 2,
      'Science': 3,
      'Business': 4,
      'Politics': 5,
      'Lesuire': 6,
      'Culture': 7
    }
    Actions.pushCatogory(cases[this.props.name]);
    console.log("Catogory selected: " + this.props.name);
  }

});

module.exports = Catogorylist;