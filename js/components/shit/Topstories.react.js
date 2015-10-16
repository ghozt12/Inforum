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
var Storyelement = require('./Storyelement.react');

var TopStories = React.createClass({
  mixins: [ Navigatable ],

  render: function() {
    // Get all the story elements
    var rendering;

      return (
        <div>
          {rendering}
        </div>
      );
  }


});

module.exports = TopStories;