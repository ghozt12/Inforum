/* Top Level React Component */
var React = require('react');

// Routing
var Router = require('react-router-component');
var RouteHandler = Router.RouteHandler;
var Link = Router.Link;
var Navigatable = require('react-router-component').NavigatableMixin;

// Flux
var Actions = require('../actions/Actions');


var Signin = React.createClass({
  mixins: [ Navigatable ],

  render: function() {
      return (
        <div className="red-background">
          <div className="grid wrap">
          <div className="unit whole">
            <h1 className="main-title">Inforum</h1>
            <h2 className="main-second">A social news aggregation app that connects you with the latest stories</h2>

            <button onClick={this.handleFacebook} className="button-login">Sign in with Facebook</button>
            <button onClick={this.handleEmail} className="button-login">Sign in with Email</button>
            <br />
            <br />
            <button onClick={this.handleSignup} className="button-signup">Sign up</button>
          </div>
          </div>
          <p className="main-copyright"> By using Inforum, you agree to the Terms, Cookie Policy and Privacy Policy.</p>
      </div>
      );
  },

  handleEmail: function(event) {
    this.navigate('/signin-email');
  },

  handleFacebook: function(event) {
     this.navigate('/signin-fb');
  },

  handleSignup: function(event) {
    this.navigate('/catogories');
  },


});

module.exports = Signin;