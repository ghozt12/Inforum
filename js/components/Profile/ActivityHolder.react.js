/* ****************************
  ActivityElement Holder
  React

  Respect Crew
**************************** */

/* ****************************
  Pages
**************************** */
/* Top Level React Component */
var React = require('react');
// Flux
var Actions = require('../../actions/Actions');
var ActivityElement = require('../Profile/ActivityElement.react');

/* ****************************
  React
**************************** */
var ActivityHolder = React.createClass({

  render: function() {

    var array = [];

    var text = {
      0: <p><b>Steve Jobs</b> started following you</p>,
      1: <p><b>Bec A</b> respected your story from the <b>Verge</b></p>,
      2: <p><b>Barack Obama</b> started following you</p>,
      3: <p><b>Sherwin</b> started following you</p>,
      4: <p><b>Barack Obama</b> respected your story from the <b>ABC</b></p>,
      5: <p><b>Roger Feder</b> commented on your story from the <b>ABC</b></p>,
      6: <p><b>Tina</b> started following you</p>,
      7: <p><b>Roger Feder</b> commented on your story from the <b>Verge</b></p>,
      8: <p><b>Rach</b> started following you</p>,
      9: <p><b>Rach</b> respected your story from the <b>Verge</b></p>,
      10: <p><b>Cham</b> started following you</p>,
      11: <p><b>Nikhil</b> started following you</p>,
    };

    var times = {
      0: "3s",
      1: '4s',
      2: '50s',
      3: '2m',
      4: '5m',
      5: '14m',
      6: '2h',
      7: '3h',
      8: '3h',
      9: '3h',
      10: '3h',
      11: '3h',
    };

    for (i=1; i < 12; i++) {
      array.push(<ActivityElement
        text={text[i]}
        time={times[i]}
        />);
    };

    return (
      <div>
        {array}
      </div>
    );
  }

});
module.exports = ActivityHolder;