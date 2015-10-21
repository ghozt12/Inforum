/* ****************************
  STORY Social 
  react

  Respect Crew
**************************** */

/* ****************************
  Pages
**************************** */
var React = require('react');
// Flux
var Actions = require('../../actions/Actions');
var BottomCat = require('./BottomCat.react');

/* ****************************
  React
**************************** */
var Social = React.createClass({

  getInitialState: function() {
    return {
      flag: false
    }
  },
  
  render: function() {
    
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

    if (!this.props.visible) {
      var style = "social hidden " + colours[this.props.catNum];
    } else {
      var style = "social " + colours[this.props.catNum];
    }

    var flg = (this.state.flag ? "fa fa-flag color-red" : "fa fa-flag");

    return (
      <div className={style}>
        <i onClick={this._handleShare} className="fa fa-share-alt"> </i>
        <i onClick={this._handleFlag} className={flg}> </i>
      </div>
    );
  },

  _handleShare: function() {
    // Show social
    Actions.showSocial(true);
  },

  _handleFlag: function() {
    var az = (this.state.flag ? "This post has been unflagged" : "This post has been flagged");
    alert(az);
    this.setState({
      flag: !this.state.flag
    });
    // Change color to red
  }
});

module.exports = Social;