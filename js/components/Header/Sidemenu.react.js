/* ****************************
  HEADER Side menu 
  react

  Respect Crew
**************************** */

/* ****************************
  Pages
**************************** */
var React = require('react');

// Flux
var Actions = require('../../actions/Actions');

/* ****************************
  React
**************************** */
var Sidemenu = React.createClass({

  render: function() {
    // if visible, show it
    var visible = "side-menu hide";
    var invisible = "side-menu show";
    var used;
    var img = this.props.img();
    var name = this.props.name();
    used = (this.props.visible ? visible : invisible);

    return (
     <div className={used}>
      <div className="part1">
        <img src={img} /> 
        <h2> {name} </h2>
      </div>
        <ul>
          <li>Home</li>
          <li>#hashtags</li>
          <li>Publications</li>
          <li>Profile Stats</li>
          <li>Draft Stories</li>
          <li>Help</li>
          <li>Settings</li>
          <li>Logout</li>
        </ul>
      </div>
    );
  }
});

module.exports = Sidemenu;