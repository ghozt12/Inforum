/* ****************************
  HEADER Side menu 
  react

  Respect Crew
**************************** */

// Nav
var Router = require('react-router-component');
var RouteHandler = Router.RouteHandler;
var Link = Router.Link;
var Navigatable = require('react-router-component').NavigatableMixin;


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
  mixins: [ Navigatable ],

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
          <li onClick={this._handleClick3}>Home</li>
          <li onClick={this._handleClick}>#hashtags</li>
          <li onClick={this._handleClick}>Publications</li>
          <div className="reddot2"><p>1</p></div>
          <li onClick={this._handleClick} >Profile Stats</li>
          <li onClick={this._handleClick}>Draft Stories</li>
          <li onClick={this._handleClick}>Help</li>
          <li onClick={this._handleClick}>Settings</li>
          <li onClick={this._handleClick2}>Logout</li>
        </ul>
      </div>
    );
  },

  _handleClick: function() {
    this.navigate('/profile');
  },
  _handleClick3: function() {
    this.navigate('/catogories');
  },
  _handleClick2: function() {
    this.navigate('/');
  }
});

module.exports = Sidemenu;