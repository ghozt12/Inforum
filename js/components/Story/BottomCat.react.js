/* ****************************
  STORY Bottom 
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
var BottomCat = React.createClass({
  
  render: function() {
    // Get the colour 
    var colours = {
      0: 'red',
      1: 'blue',
      2: 'green',
      3: 'orange',
      4: 'pink',
      5: 'purple',
      6: 'lightblue',
      7: 'yellow'
    };

    var style = 'bottom-cat ' + colours[this.props.catNum];
    return (
      <div className =  {style}>
        {this.props.cat}
      </div>
  );
}
});

module.exports = BottomCat;