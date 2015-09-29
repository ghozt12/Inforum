/* Top Level React Component */
var React = require('react');

// Routing
var Router = require('react-router-component');
var RouteHandler = Router.RouteHandler;
var Link = Router.Link;
var Navigatable = require('react-router-component').NavigatableMixin

// Flux
var Actions = require('../actions/Actions');


var NavBottom = React.createClass({

  render: function() {    
    var cases = {
      0: "nav1",
      1: "nav2",
      2: "nav3",
      3: "nav4"
    };

    var style = "nav-bottom " + cases[this.props.curMenu()];
    
    return (
        <div className={style}></div>
    );
  }

});

module.exports = NavBottom;