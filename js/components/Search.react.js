/* Top Level React Component */
var React = require('react');

// Routing
var Router = require('react-router-component');
var RouteHandler = Router.RouteHandler;
var Link = Router.Link;
var Navigatable = require('react-router-component').NavigatableMixin;

// Flux
var Actions = require('../actions/Actions');

// Pages

var Search = React.createClass({

  componentDidUpdate: function(){
      this.refs.searchBar.getDOMNode().focus(); 
  },

  render: function() {
    // Check to see if we show or hide search bar
    var searchClass = (this.props.search() ? "search" : "search hidden");
    return (
      <input ref="searchBar" autoFocus="true" className={searchClass} placeholder="Search" type="text"></input>
    );
  }

});

module.exports = Search;