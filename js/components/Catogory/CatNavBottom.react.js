/* ****************************
  HEADER Navigation Bottom slider 
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
var CatNavBottom = React.createClass({

  /* *****************
    Rendering 
  ****************** */
  render: function() {    
    
    var cases = {
      0: "nav1",
      1: "nav2"
    };

    var style = "nav3-bottom " + cases[this.props.curMenu()];
    
    return (
        <div className={style}></div>
    );
  }
});

module.exports = CatNavBottom;