/* Top Level React Component */
var React = require('react');

// Routing
var Router = require('react-router-component');
var RouteHandler = Router.RouteHandler;
var Link = Router.Link;
var Navigatable = require('react-router-component').NavigatableMixin

// Flux
var Actions = require('../actions/Actions');

var Action = React.createClass({

  render: function() {
    
    return (
      <div onClick={this._handleClick} id="action"><i className="fa fa-user"></i></div>

    );
  },

  _handleClick: function(i) {
    alert("Clicked action button");
  }

});

module.exports = Action;