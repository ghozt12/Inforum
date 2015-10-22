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

var User = require('../Profile/User.react');


var Enviroment = React.createClass({
  mixins: [ Navigatable ],

  render: function() {
    
    var pages = {
      0: <ChatsContainer aaa={this.props.db1()} />,
      1: <ChatsContainer aaa={this.props.env()} />
    };

    console.log(this.props.curMenu());

    var rendering = pages[this.props.curMenu()];

      return (
        <div>
          <Header isEnv={true} isNav={false} isColoured={true} isArrow={true} isDot={false} titleName="Enviroment" name={this.props.name} img={this.props.img} preMenu={this.props.preMenu} curMenu={this.props.curMenu} />
          <CatNav preMenu={this.props.preMenu} curMenu={this.props.curMenu} />
          {rendering}
        </div>
      );
  }

});

module.exports = Enviroment;