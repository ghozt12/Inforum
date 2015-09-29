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
var Search = require('./Search.react');
var Nav = require('./Nav.react');


var Catogory = React.createClass({

  render: function() {
    return (
      <div className="categories">
        <div className="grid wrap">
        <div className="unit whole">

          <Search search={this.props.search} />
          <Nav preMenu={this.props.preMenu} curMenu={this.props.curMenu} navNum={0} />
          <ul>
                <li>
                  <p>Enviroment</p>
                </li>
                <li>
                  <p>Sport</p>
                </li>
                 <li>
                  <p>Science</p>
                </li>
                <li>
                  <p>Business</p>
                </li>
                 <li>
                  <p>Politics</p>
                </li>
                 <li>
                  <p>Entertainment</p>
                </li>
                <li>
                  <p>Culture</p>
                </li>
              </ul>
        </div>
        </div>
      </div>
    );
  },

  _handleClick: function(event) {
    alert("Menu");
  }

});

module.exports = Catogory;