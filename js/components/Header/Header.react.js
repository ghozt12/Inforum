/* ****************************
  Header 
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

// Side bar
var Sidemenu = require('./Sidemenu.react');
// Navigation
var Nav = require('./Nav.react');

// Routing
var Router = require('react-router-component');
var RouteHandler = Router.RouteHandler;
var Link = Router.Link;
var Navigatable = require('react-router-component').NavigatableMixin;


/* ****************************
  React
**************************** */
var Header = React.createClass({
  mixins: [ Navigatable ],

  /* *****************
    State 
  ****************** */
  getInitialState: function() {
    return {
      visible: false,
      menu: true
    }
  },

  /* *****************
    Functions 
  ****************** */
  _handleLogo: function(event) {

  },
  
  _handleArrow: function(event) {
    this.navigate('/catogories');
  },

  _handleClick: function(event) {
    this.setState({
      menu: !this.state.menu
    });
  },

  _handleSearch: function() {
    this.navigate('/search');
  },

  /* *****************
    Rendering 
  ****************** */
  render: function() {

    var colouredHeader = (this.props.isColoured ? "top-bar coloured" : "top-bar");
    if (this.props.isEnv)
      colouredHeader = "top-bar envir-color";
    var menu = (this.state.menu ? '' : 'flipper');
    var nav = <Nav preMenu={this.props.preMenu} curMenu={this.props.curMenu} />;
    var ham = <div onClick={this._handleClick} id="menu" className={menu}>
        <span></span>
        <span></span>
      </div>;

    var arrow = <div onClick={this._handleArrow} id="arrow" > <i className="fa fa-arrow-left"></i> </div>
    var doty =  <div className="reddot"><p>1</p></div>;

    // Check if this is arrow or nav
    var hamburger = (this.props.isArrow ? arrow : ham);
    var isDot = (this.props.isDot ? doty : null);
    var isNav = (this.props.isNav ? nav : null);


    return (
      <div className={colouredHeader}>
        <Sidemenu name={this.props.name} img={this.props.img} visible={this.state.menu} />

        <div className="top-bar">
          {isDot}
          {hamburger}
          
          <h1 onClick={this._handleLogo}>{this.props.titleName}</h1>
          <i onClick={this._handleSearch} className="fa fa-search"></i>
        
          {isNav}
        </div>
      </div>

    );
  }

});

module.exports = Header;