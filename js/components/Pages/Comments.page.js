/* Top Level React Component */
var React = require('react');

// Routing
var Router = require('react-router-component');
var RouteHandler = Router.RouteHandler;
var Link = Router.Link;
var Navigatable = require('react-router-component').NavigatableMixin;

// Flux
var Actions = require('../../actions/Actions');

// Pages
var Header = require('../Header/Header.react');
var Catogory = require('../Catogory/Catogory.react');
var StoryContainer = require('../Story/StoryContainer.react');
var BookmarksContainer = require('../Bookmarks/BookmarksContainer.react');
var ChatsContainer = require('../Story/ChatsContainer.react');
var SocialShow = require('../Pages/SocialShow.react');
var CatNav = require('../Catogory/CatNav.react');
var FakeStories = require('../Profile/FakeStories.react');
var FakeDiscussions = require('../Profile/FakeDiscussions.react');
var ActivityHolder = require('../Profile/ActivityHolder.react');
var CommentElement = require('../Story/CommentElement.react');
var User = require('../Profile/User.react');
var StoryElement = require('../Story/StoryElement.react');



var comments = {
  1: <p className="comment-like"><b>Jennifer Lawrence</b>: All I hear and see all day are men speaking their opinions, and I give mine in the same exact manner, and you would have thought I had said something offensive, Im over trying to find the adorable way to state my opinion and still be likable!</p>,
  2: <p className="comment-like"><b>Amber Marie </b>: Its not about her millions, its about the FACT that women doing the same job get less pay. Its about being taught as a young girl, dont complain, be happy with what you have as young boys are taught, go after what you want, dont settle for less than you deserve.</p>,
  3: <p className="comment-like"><b>Ryan Banik</b>: Sexism is sexism. Doesnt matter if it is in the film industry or in the retail assistant industry. It really has no place in the world. People wouldnt stand for racism right? So no one should stand for sexism. The money she makes no difference to the argument. If it can happen so publicly, then imagine what its like lower down the food chain.</p>,
  4: <p className="comment-like"><b>Chloe Roblyer</b>: I really love this because it seems like youve actually thought about your stance. You havent always thought of yourself as a victim of your gender, and you still dont. I totally understand the fear of you looking like a brat, because that is what women are sometimes portrayed as, were as men can say basically whatever they feel.</p>,
};

var comments2 = {
  1: <p className="comment-like"><b>Saba Iqbal</b>: Woman of today, not afraid to speak her mind!</p>,
  2: <p className="comment-like"><b>Ryan Philips</b>: I agree! Once again Jennifer Lawrence proves that her head has not gotten too big to realize everyday and sometimes serious problems. Shes a woman that speaks her mind and is who she is regardless of what others think.</p>,
  3: <p className="comment-like"><b>Hilary Gerald</b>: Love this!</p>,
};

var Comments = React.createClass({
  mixins: [ Navigatable ],

  getInitialState: function() {
    return {
      showSec: false
    }
  },

  render: function() {

    // Show second layer of comments  
    var second = <div>

          <CommentElement comment={this._comment} comments={0}
          votes={3} isSec={true} story={comments2[1]} />
          
          <CommentElement comment={this._comment} comments={0}
          votes={3} isSec={true} story={comments2[2]} />
          
          <CommentElement comment={this._comment} comments={0}
          votes={1} isSec={true} story={comments2[3]} />

    </div>;

    if (!this.state.showSec) 
      second = null;

      return (
        <div>
          <CommentElement comment={this._comment} comments={3}
          votes ={3} story={comments[1]} />
          {second}
          <CommentElement comment={this._comment} comments={0}
          votes ={3} story={comments[2]} />
          <CommentElement comment={this._comment} comments={0}
          votes ={1} story={comments[3]} />
          <CommentElement comment={this._comment} comments={0}
          votes ={0} story={comments[4]} />
        </div>
      );
  },

  _comment: function() {
    // Show second Layer of comments
    this.setState({
      showSec: true 
    });
  }

});

module.exports = Comments;