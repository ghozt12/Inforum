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
var Storyelement = require('./Storyelement.react');
var Nav = require('./Nav.react');
var Search = require('./Search.react');


var TopStories = React.createClass({
  mixins: [ Navigatable ],

  render: function() {
      return (
        <div>
          <Action />
          <Header />
          <div className="categories">
          <div className="grid wrap">
          <div className="unit whole">
          <Search search={this.props.search} />
          <Nav preMenu={this.props.preMenu} curMenu={this.props.curMenu} navNum={0} />
          <Storyelement />
          </div>
          </div>
          </div>
        </div>
      );
  }


});

module.exports = TopStories;