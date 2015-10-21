/* ****************************
  User info 
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
var User = React.createClass({
 
  /* *****************
    Rendering 
  ****************** */
  render: function() {

    var img = this.props.img();

    return (
     <div className="profile-cont">
      <img src={img} /> 

      <div> 
        <ul>
          <li>Following</li>
          <li>Followers</li>
          <li>Posts</li>
        </ul>
        <ul>
          <li>302</li>
          <li>1.3m</li>
          <li>245</li>
        </ul>
      </div>

     </div>

    );
  }

});

module.exports = User;