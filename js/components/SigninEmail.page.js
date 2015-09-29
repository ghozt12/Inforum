/* Top Level React Component */
var React = require('react');

// Routing
var Router = require('react-router-component');
var RouteHandler = Router.RouteHandler;
var Link = Router.Link;
var Navigatable = require('react-router-component').NavigatableMixin

// Flux
var Actions = require('../actions/Actions');


var SigninEmail = React.createClass({
  mixins: [ Navigatable ],

  render: function() {
      return (
        <div className="red-background">
          <div className="grid wrap">
          <div className="unit whole">
            <h1 className="main-title">Inforum</h1>
            <h2 className="main-second">A social news aggregation app that connects you with the latest stories</h2>

            <form>
              <input className="signup-username" placeholder="email" type="text"> </input>
              <input className="signup-username" placeholder="password" type="password"> </input>
            </form>

            <br /> 
            <button className="button-signup">Sign in</button>

          </div>
          </div>
          <p className="main-copyright"> By using Inforum, you agree to the Terms, Cookie Policy and Privacy Policy.</p>
      </div>
      );
  }

});

module.exports = SigninEmail;