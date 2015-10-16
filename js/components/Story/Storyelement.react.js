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

/* ****************************
  React
**************************** */
var Storyelement = React.createClass({
  render: function() {

    return (
      <div className='element'>
        <Bookmark _handleBookmark={this._handleBookmark} catNum={this.props.catNum} bookmarked={this.props.bookmarked} />
        <p >{this.props.story}</p>
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