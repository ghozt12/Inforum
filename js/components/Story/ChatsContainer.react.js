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
var Comments = require('../Pages/Comments.page');

/* ****************************
  React
**************************** */
var ChatsContainer = React.createClass({

  getInitialState: function() {
    return {
      comments: false
    }
  },

  render: function() {
    var chats = [];
      
   dbchats = this.props.aaa;    
    this._getStory(dbchats, chats);

    return (
      <div>
        {chats}

      </div>
    );
  },

  _getStory: function(db, array) {    
    // Split up the database
    for (num in db) {

      if (num == this.state.num && this.state.comments) {
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
          openComment = {this._openComment}
          /> 
          <Comments />
          </div>);
        } else {
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
          openComment = {this._openComment}
          /> 

          </div>);
        }
      
        
    };
  },

  _openComment: function(a) {
    this.setState({
      num: a,
      comments: true 
    });
  },

  _bookmark: function(num, bm) {
    this.props.db()[num].bookmarked = bm;
    console.log(" MEMEMEMEME " + this.props.db()[num].bookmarked);
  }
});

module.exports = ChatsContainer;