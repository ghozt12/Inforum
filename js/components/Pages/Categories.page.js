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

var Categories = React.createClass({
  mixins: [ Navigatable ],

  render: function() {
    var rendering;
    var other;
    // Check if we show this social
    if (this.props.social()) {
      other = <SocialShow />
    }

    var pages = {
      0: <Catogory />,
      1: <StoryContainer 
          db={this.props.db1} 
          db2={this.props.db2} 
          db3={this.props.db3} 
          db4={this.props.db4} />,
      2: <ChatsContainer 
        db4={this.props.db4}
        aaa={this.props.dbChats} />,
      3: <BookmarksContainer db={this.props.db_bm} odb={this.props.db1}/>
    };

    rendering = pages[this.props.curMenu()];

      return (
        <div>
          <Header isNav={true} isColoured={false} isDot={true}  titleName="Inforum" name={this.props.name} img={this.props.img} preMenu={this.props.preMenu} curMenu={this.props.curMenu} />
          {other}
          {rendering}
        </div>
      );
  }

});

module.exports = Categories;