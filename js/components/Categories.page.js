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
var Header = require('./Header.react');
var Catogory = require('./Catogory.react');
var Action = require('./Action.react');

var Categories = React.createClass({
  mixins: [ Navigatable ],

  render: function() {
      return (
        <div>
          <Action />
          <Header />
          <Catogory preMenu={this.props.preMenu} curMenu={this.props.curMenu} search={this.props.search} />
        </div>
      );
  }


});

module.exports = Categories;