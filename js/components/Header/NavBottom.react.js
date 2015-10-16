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
var NavBottom = React.createClass({

  /* *****************
    Rendering 
  ****************** */
  render: function() {    
    
    var cases = {
      0: "nav1",
      1: "nav2",
      2: "nav3",
      3: "nav4"
    };

    var style = "nav-bottom " + cases[this.props.curMenu()];
    
    return (
        <div className={style}></div>
    );
  }
});

module.exports = NavBottom;