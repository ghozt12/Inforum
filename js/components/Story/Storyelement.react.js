/* ****************************
  STORY storyelement 
  react

  Respect Crew
**************************** */

/* ****************************
  Pages
**************************** */
var React = require('react');
// Flux
var Actions = require('../../actions/Actions');

var Bookmark = require('./Bookmark.react');
var Bottom = require('./Bottom.react');
var Social = require('./Social.react');

/* ****************************
  React
**************************** */
var Storyelement = React.createClass({
  
  getInitialState: function() {
    return {
      going: false,
      visible: false
    };
  },

  render: function() {
    return (
      <div onClick={this._touchStart} onTouchStart={this._touchStart} onTouchEnd={this._touchend} className='element'>
        <Social catNum={this.props.catNum} visible={this.state.visible} />
        <Bookmark _handleBookmark={this._handleBookmark} catNum={this.props.catNum} bookmarked={this.props.bookmarked} />
        <p onTouchStart={this._close}>{this.props.story}</p>
        <Bottom 
          catNum={this.props.catNum}
          cat={this.props.cat}
          author={this.props.author}
          source={this.props.source}
          comments={this.props.comments}
          votes ={this.props.votes}
          />
      </div>
    );
  },

  _close: function() {
    if (this.state.visible) {
      this.setState({
        visible: false
      });
    }
  },

  _touchStart: function() {
    if (!this.state.visible) {
      this.setState({
        going: true 
      });
      var timer = setTimeout(this._checkEnd, 1000);
    }
  },

  _checkEnd: function() {
    if (this.state.going) {
      this.setState({
        visible: !this.state.visible,
        going: false
      });
    }
  },

  _touchend: function() {
    this.setState({
      going: false 
    });
  },

  _social: function() {
    this.setState({
      visible: !this.state.visible
    });
  },

  _handleBookmark: function(bm) {

    var bookmarkedElement = {
      'key': this.props.keya,
      'story': this.props.story,
      'author': this.props.author,
      'cat': this.props.cat,
      'catNum': this.props.catNum,
      'source': this.props.source,
      'comments': this.props.comments,
      'votes': this.props.votes
    };

    Actions.pushBookmark(bookmarkedElement);

    // Save bookmark in array
    this.props.bookmark(this.props.number, bm);
  }
});

module.exports = Storyelement;