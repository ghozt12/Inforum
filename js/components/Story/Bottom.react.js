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
var BottomCat = require('./BottomCat.react');

/* ****************************
  React
**************************** */
var Bottom = React.createClass({
  
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

    var style = "aa " + colours[this.props.catNum];

    return (
      <div className='bottom-bar'>
        <BottomCat catNum={this.props.catNum} cat={this.props.cat} />
        <p className={style}> {this.props.author} <b> shares from </b> {this.props.source}
        <i className="fa fa-comment">{this.props.comments}</i>
        <i className="fa fa-thumbs-up">{this.props.votes}</i>
        </p>
      </div>
  );
}
});

module.exports = Bottom;