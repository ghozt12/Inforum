 /* Top Level React Component */
var React = require('react');

// Routing
var Router = require('react-router-component');
var RouteHandler = Router.RouteHandler;
var Link = Router.Link;
var Navigatable = require('react-router-component').NavigatableMixin

// Flux
var Actions = require('../actions/Actions');


var Firebase = require('firebase');
// Firebase login
var ref = new Firebase("https://inforum.firebaseio.com");


var SigninFB = React.createClass({
  mixins: [ Navigatable ],

  getInitialState: function() {
    return {
      ready: false,
      username: '',
      image: ''
    }
  },

  componentDidMount: function() {
    ref.authWithOAuthPopup("facebook", function(error, authData) {
      if (error) {
        console.log("Login Failed!", error);
      } else {
        console.log("Authenticated successfully with payload:", authData);
        var user = authData.facebook.displayName;
        var image = authData.facebook.profileImageURL;

        this.setState({
          ready: true,
          username: user,
          image: image
        });


      }
    }.bind(this));
  },

  render: function() {

    // Render a loading circle
    var loading = (
      <div>
        <div className="loader "></div>
      </div>);
    // Render the users info
    var content = (
      <div>
        <img className="facebook-profile" src={this.state.image} />
        <br />
        <br />  
        <button className="button-login">Continue as {this.state.username}</button>
        <p className="main-fbswitch"> Switch Account </p>
      </div>
      );

    var con = (this.state.ready ? content : loading);

      return (
        <div className="red-background">
          <div className="grid wrap">
          <div className="unit whole">
            <h1 className="main-title">Inforum</h1>
            <h2 className="main-second">A social news aggregation app that connects you with the latest stories</h2>

            
            {con}

          </div>
          </div>
          <p className="main-copyright"> By using Inforum, you agree to the Terms, Cookie Policy and Privacy Policy.</p>
      </div>
      );
  }

});


module.exports = SigninFB;