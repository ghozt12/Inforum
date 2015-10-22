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
var Nav = require('../Profile/Nav.react');

/* ****************************
  React
**************************** */
var User = React.createClass({


  getInitialState: function() {
    return {
      followed: false
    }
  },
 
  /* *****************
    Rendering 
  ****************** */
  render: function() {

    if (this.props.fake) {
      var img = this.props.img;
      var man = (this.state.followed ? 'follow follewed' : 'follow');
      var follow = <div onClick={this._followed} className={man}><p>Follow</p></div>
    } else {
      var img = this.props.img();
      var follow = null;
    }

    return (
      <div>
      <div className="profile-cont">

      <img src={img} /> 
      {follow}

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

     <div>
      
     </div>


     </div>




    );
  },


  _followed: function() {
    this.setState({
      followed: !this.state.followed 
    });
  }

});

module.exports = User;