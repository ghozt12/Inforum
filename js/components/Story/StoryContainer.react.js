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
    var stories1 = [];
    var stories2 = [];
    var stories3 = [];
    var stories4 = [];

    var db = this.props.db();    
    var db2 = this.props.db2();    
    var db3 = this.props.db3();    
    var db4 = this.props.db4();    

    this._getStory(db, stories1);
    this._getStory(db2, stories2);
    this._getStory(db3, stories3);
    this._getStory(db4, stories4);

  
    return (
      <div>
      <ReactSwipe continuous={false}>
        {stories1}
      </ReactSwipe>
      <ReactSwipe continuous={false}>
        {stories2}
      </ReactSwipe>
      <ReactSwipe continuous={false}>
        {stories3}
      </ReactSwipe>
      <ReactSwipe continuous={false}>
        {stories4}
      </ReactSwipe>
      </div>
    );
  },

  _getStory: function(db, array) {    
    // Split up the database
    for (num in db) {
      array.push(
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
  },

  _bookmark: function(num, bm) {
    this.props.db()[num].bookmarked = bm;
    console.log(" MEMEMEMEME " + this.props.db()[num].bookmarked);
  }
});

module.exports = StoryContainer;