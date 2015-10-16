/* ****************************
  STORY Container 
  react

  Respect Crew
**************************** */

/* ****************************
  Pages
**************************** */
var React = require('react');
// Flux
var Actions = require('../../actions/Actions');
var ReactSwipe = require('react-swipe');

var Storyelement = require('./Storyelement.react');
var Bookmark = require('./Bookmark.react');
var Bottom = require('./Bottom.react');

/* ****************************
  React
**************************** */
var StoryContainer = React.createClass({
  render: function() {
    var stories = [];
    var db = this.props.db();
    num = 1;
    // Split up the database
   for (num in db) {
      console.log(db[num]);
      console.log(db[num].author);
      stories.push(
        <div>
        <Storyelement
          number = {num}
          keya = {db[num].key}
          story = {db[num].title}
          catNum = {db[num].catNum}
          cat = {db[num].cat}
          author = {db[num].author}
          source = {db[num].url}
          comments = {db[num].commentnum}
          votes = {db[num].votes}
          bookmarked = {db[num].bookmarked}
          bookmark = {this._bookmark}
          /> 
          </div>
        );
    };
    

    return (
      <ReactSwipe continuous={false}>
        {stories}
      </ReactSwipe>
    );
  },

  _bookmark: function(num, bm) {
    this.props.db()[num].bookmarked = bm;
    console.log(" MEMEMEMEME " + this.props.db()[num].bookmarked);
  }
});

module.exports = StoryContainer;