/* ****************************
  HEADER Navigation menu 
  react

  Respect Crew
**************************** */

/* ****************************
  Pages
**************************** */
/* Top Level React Component */
var React = require('react');
// Routing
var Navigatable = require('react-router-component').NavigatableMixin
// Flux
var Actions = require('../../actions/Actions');

// Pages
var NavBottom = require('./NavBottom.react');

/* ****************************
  React
**************************** */
var Nav = React.createClass({
  mixins: [ Navigatable ],

  /* *****************
    Functions 
  ****************** */
  _handleClick: function(i) {
    Actions.pushPrevMenu(this.props.curMenu());
    Actions.pushMenu(i);
  },

  /* *****************
    Rendering 
  ****************** */
  render: function() {
    var navEl = [];
    var names = ['Categories', 'Top News', 'Top Chats', 'Bookmarks']; 
    
    for (var i = 0; i < 4; i++) {
      if (i == this.props.curMenu())
        navEl.push( <li onClick={this._handleClick.bind(null, i)} className="selected-nav">{names[i]}</li>);
      else
        navEl.push( <li onClick={this._handleClick.bind(null, i)} >{ names[i] }</li>);
    };

    return (
      <div>
        <nav>
          {navEl}
        </nav>
        <NavBottom preMenu={this.props.preMenu} curMenu={this.props.curMenu} />
      </div>
    );
  }
});

module.exports = Nav;