/* ****************************
  STORY bookmark 
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
var Bookmark = React.createClass({

  getInitialState: function() {
    return {
      bookmarked: false || this.props.bookmarked
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

    // make red if bookmarked
    var style = (this.state.bookmarked ? 'fa fa-bookmark ' + colours[this.props.catNum] : 'fa fa-bookmark');
    return (
      <div onClick={this._handleClick} className='bookmark'>
        <i className={style}></i>
      </div>
    );
  },

  _handleClick: function() {
    this.props._handleBookmark(!this.state.bookmarked);

    this.setState({
      bookmarked: !this.state.bookmarked 
    });
  }
});

module.exports = Bookmark;