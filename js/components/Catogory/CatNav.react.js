/* ****************************
  CATOGORY Navigation two sided
  react

  Respect Crew
**************************** */

/* ****************************
  Pages
**************************** */
/* Top Level React Component */
var React = require('react');
// Routing
var Navigatable = require('react-router-component').NavigatableMixin
// Flux
var Actions = require('../../actions/Actions');

// Pages
var CatNavBottom = require('./CatNavBottom.react');

/* ****************************
  React
**************************** */
var Nav = React.createClass({
  mixins: [ Navigatable ],

  /* *****************
    Functions 
  ****************** */
  _handleClick: function(i) {
    Actions.pushCatPreMenu(this.props.curMenu());
    Actions.pushCatMenu(i);
  },

  /* *****************
    Rendering 
  ****************** */
  render: function() {
    var navEl = [];
    var names = ['Top Stories', 'Top Discussions']; 

    for (var i = 0; i < 2; i++) {
      if (i == this.props.curMenu())
        navEl.push( <li onClick={this._handleClick.bind(null, i)} className="selected-nav">{names[i]}</li>);
      else
        navEl.push( <li onClick={this._handleClick.bind(null, i)} >{ names[i] }</li>);
    };

    return (
      <div>
        <div className="nav-profile2">
          {navEl}
        </div>
        <CatNavBottom preMenu={this.props.preMenu} curMenu={this.props.curMenu} />
      </div>
    );
  }
});

module.exports = Nav;