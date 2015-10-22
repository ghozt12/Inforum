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
var CommentBottom = React.createClass({

  getInitialState: function() {
    return {
      respect: false,
      votes: this.props.votes
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

    var style = "aa " + colours[this.props.catNum];
    var showRespect = (this.state.respect ? 
      <div className="respected">RESPECTED </div> : 
      null);

    return (
      <div className='bottom-bar'>
        {showRespect}
        <BottomCat catNum={this.props.catNum} cat={this.props.cat} />
        <p className={style}> 
        <i onClick={this._comment} className="fa fa-comment">{this.props.comments}</i>
        <i onClick={this._respect} className="fa fa-thumbs-up">{this.state.votes}</i>
        </p>
      </div>
    );
  },

  _respect: function() {
    this.setState({
      respect: true,
      votes: this.props.votes + 1
    });
    setInterval(this._changeState, 1000);
  },

  _comment: function() {
    this.props.comment();
  },

  _changeState: function() {
    this.setState({
      respect: false
    });
  }
});

module.exports = CommentBottom;