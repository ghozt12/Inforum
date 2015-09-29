/* Top Level React Component */
var React = require('react');

// Routing
var Router = require('react-router-component');
var RouteHandler = Router.RouteHandler;
var Link = Router.Link;
var Navigatable = require('react-router-component').NavigatableMixin

// Flux
var Actions = require('../actions/Actions');

var NavBottom = require('./NavBottom.react');

var Nav = React.createClass({

  render: function() {
    var navEl = [];
    var names = ['Categories', 'Top News', 'Top Charts', 'Bookmarks']; 
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
  },

  _handleClick: function(i) {
    Actions.pushPrevMenu(this.props.curMenu());
    Actions.pushMenu(i);
    console.log("Selected menu number: " + i);
  }

});

module.exports = Nav;