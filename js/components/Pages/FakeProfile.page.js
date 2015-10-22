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
var Nav = require('../Profile/Nav.react');

var FakeStories = require('../Profile/FakeStories.react');
var FakeDiscussions = require('../Profile/FakeDiscussions.react');
var ActivityHolder = require('../Profile/ActivityHolder.react');

var User = require('../Profile/User.react');


var FakeProfile = React.createClass({
  mixins: [ Navigatable ],

  render: function() {
    var rendering;
    var other;
    // Check if we show this social
    if (this.props.social()) {
      other = <SocialShow />
    }

    var pages = {
      0: <FakeStories />,
      1: <FakeDiscussions />,
      2: <ActivityHolder />
    };

    rendering = pages[this.props.curMenu()];

      return (
        <div>
          <Header isNav={false} isColoured={true} isArrow={true} isDot={false} titleName="Inforum" name={this.props.name} img={this.props.img} preMenu={this.props.preMenu} curMenu={this.props.curMenu} />
          <User preMenu={this.props.preMenu} fake={true} curMenu={this.props.curMenu} img="./assets/stevo.jpg" />
          <Nav preMenu={this.props.preMenu} curMenu={this.props.curMenu} />
          
          {rendering}

        </div>
      );
  }

});

module.exports = FakeProfile;