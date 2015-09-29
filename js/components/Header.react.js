/* Top Level React Component */
var React = require('react');

// Routing
var Router = require('react-router-component');
var RouteHandler = Router.RouteHandler;
var Link = Router.Link;
var Navigatable = require('react-router-component').NavigatableMixin;

// Flux
var Actions = require('../actions/Actions');

var Header = React.createClass({

  getInitialState: function() {
    return {
      visible: false
    }
  },

  render: function() {
    return (
      <div>
        <div className="grid wrap">
        <div className="unit whole">
        <div className="top-bar">
          <div onClick={this._handleClick} id="menu">
          <span></span>
          <span></span>
          </div>
        <h1>Inforum</h1>
        <i onClick={this._handleSearch} className="fa fa-search"></i>
        </div>
        </div>
        </div>
      </div>
    );
  },

  _handleClick: function(event) {
    alert("Menu");
  },

  _handleSearch: function() {
    Actions.showSearch(!this.state.visible);

    this.setState({
      visible: !this.state.visible 
    });
  }

});

module.exports = Header;