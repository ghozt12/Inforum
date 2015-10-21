/* ****************************
  Show Social 
  react

  Respect Crew
**************************** */

/* ****************************
  Pages
**************************** */
/* Top Level React Component */
var React = require('react');
// Flux
var Actions = require('../../actions/Actions');

/* ****************************
  React
**************************** */
var SocialShow = React.createClass({

  /* *****************
    Rendering 
  ****************** */
  render: function() {


    return (
      <div onClick={this._handleClick} className="sharingMenu">
        
        <div className="head">
          <h1> Share this story with </h1>
        </div>

        <i className="fa fa-facebook-official"></i>
        <i className="fa fa-google-plus-square"></i>
        <i className="fa fa-twitter-square"></i>
        
        <br />
        
        <i className="fa fa-envelope-square"></i>
        <i className="fa fa-dropbox"></i>
        <i className="fa fa-chrome"></i>

      </div>
    );
  },

  _handleClick: function() {
    Actions.showSocial(false);
  }

});

module.exports = SocialShow;