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

/* ****************************
  React
**************************** */
var Header = React.createClass({

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

  _handleClick: function(event) {
    this.setState({
      menu: !this.state.menu
    });
  },

  _handleSearch: function() {
    Actions.showSearch(!this.state.visible);
    this.setState({
      visible: !this.state.visible 
    });
  },

  /* *****************
    Rendering 
  ****************** */
  render: function() {

    var menu = (this.state.menu ? '' : 'flipper');

    return (
      <div className="top-bar">
        <Sidemenu name={this.props.name} img={this.props.img} visible={this.state.menu} />


        <div className="top-bar">
          <div onClick={this._handleClick} id="menu" className={menu}>
          <span></span>
          <span></span>
        </div>

        <h1 onClick={this._handleLogo}>Inforum</h1>

        <i onClick={this._handleSearch} className="fa fa-search"></i>
        

        <Nav preMenu={this.props.preMenu} curMenu={this.props.curMenu}/>
      </div>
      </div>

    );
  }

});

module.exports = Header;