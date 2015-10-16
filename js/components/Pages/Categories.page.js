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

var Categories = React.createClass({
  mixins: [ Navigatable ],

  render: function() {
    var rendering;
    
    var pages = {
      0: <Catogory />,
      1: <StoryContainer db={this.props.db1} />,
      2: <Catogory />,
      3: <BookmarksContainer db={this.props.db_bm} odb={this.props.db1}/>
    };

    rendering = pages[this.props.curMenu()];

      return (
        <div>
          <Header name={this.props.name} img={this.props.img} preMenu={this.props.preMenu} curMenu={this.props.curMenu} />
          {rendering}
        </div>
      );
  }

});

module.exports = Categories;