/* ****************************
  Bookmarks Container 
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

var Storyelement = require('../Story/Storyelement.react');
var Bookmark = require('../Story/Bookmark.react');
var Bottom = require('../Story/Bottom.react');

/* ****************************
  React
**************************** */
var BookmarksContainer = React.createClass({
  
  render: function() {
    var stories = [];
    var db = this.props.db();
    
    var tf = this._isEmpty(db);
    // Check if empty 

    if (tf) {
      stories.push(<div className="bookmarked">Bookmarked stories will appear here</div>);
    }
    else {
        // Split up the database
       for (var num in db) {
          stories.push(
            <Storyelement 
              number = {num}
              bookmarked = {true}
              keya = {db[num].key}
              story = {db[num].story}
              catNum = {db[num].catNum}
              cat = {db[num].cat}
              author = {db[num].author}
              source = {db[num].url}
              comments = {db[num].commentnum}
              votes = {db[num].votes}
              bookmark = {this._bookmark}
            /> 
          );
        };
      }
    
    return (
      <div>
        {stories}
      </div>
    );
  },

  _isEmpty: function(obj)  {
    for(var prop in obj) {
        if(obj.hasOwnProperty(prop))
            return false;
    }
    return true;
  },

  _bookmark: function(num, bm) {
    this.props.odb()[num].bookmarked = bm;
    console.log(" MEMEMEMEME " + this.props.odb()[num].bookmarked);
  }

});

module.exports = BookmarksContainer;