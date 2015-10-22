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
var Storyelement = require('../Story/Storyelement.react');



var russiaDB = {
  1: {
    'key': 00001,
    'title': 'Jennifer Lawrence: All I hear and see all day are men speaking their opinions, and I give mine in the same exact manner, and you would have thought I had said something offensive, Im over trying to find the adorable way to state my opinion and still be likable!',
    'votes': 203,
    'cat': 'BU',
    'tags': 'jennifer actor celebrity',
    'catNum': 4,
    'commentnum': 32,
    'author': 'Tina',
    'time': '10:20:20',
    'url': 'ABC',
    'comments': {
      1: "I wish i was using this",
      2: "This is interesting",
      3: "Third comment",
      4: "hello"
    },
    },
  2: {
    'key': 00002,
    'title': 'A video released by one of Russias biggest state media networks shows Russian jets targeting rebel positions and the widespread damage and destruction in a Damascus suburb.',
    'votes': 34,
    'tags': 'russia drone',
    'commentnum': 54,
    'cat': 'PO',
    'catNum': 6,
    'author': 'Donald',
    'time': '10:20:20',
    'url': 'FOX News',
    'comments': {
      1: "I wish i was using this",
      2: "This is interesting",
      3: "Third comment",
      4: "hello"
    },
    },
  3: {
    'key': 00003,
    'title': 'Unlike other controversial theories of Trumps, such as those about President Barack Obamas birthplace and Mexican immigrants, many are backing the billionaires statement that former US president George W Bush failed to keep the country safe during the September 11 terrorist attack.',
    'votes': 41,
    'tags': 'Trump Donald Politics',
    'cat': 'PO',
    'catNum': 3,
    'commentnum': 22,
    'author': 'Rhain',
    'time': '10:20:20',
    'url': 'SMH',
    'comments': {
      1: "I wish i was using this",
      2: "This is interesting",
      3: "Third comment",
      4: "hello"
    },
    }
};



var Categories = React.createClass({
  mixins: [ Navigatable ],


  getInitialState:function() {
    return {
      term: '',
      database: russiaDB
    }    
  },

  render: function() {
    var stories = [];

    // Get stories here 
    var db = this.searching();

    // Create story elements from these 
    // even is match, odd is db
    for (var i in db ) {
      // each ele is a db object
      // Only push odd
      if (i % 2) {
        stories.push(<Storyelement 
          number = {db[i].key}
          keya = {db[i].key}
          story = {db[i].title}
          catNum = {db[i].catNum}
          cat = {db[i].cat}
          author = {db[i].author}
          source = {db[i].url}
          comments = {db[i].commentnum}
          votes = {db[i].votes}
          bookmarked = {db[i].bookmarked}/>);
      } else {
        // Nothing
        stories.push(<div className="search-termed">{db[i]}</div>);
      }
    }

    // Nothing while no search term

    if (this.state.term == '') {
      stories = [];
    }


      return (
        <div>
          <Header isArrow={true} fake={true} isNav={false} isColoured={false} isDot={true}  titleName="Search" name={this.props.name} img={this.props.img} preMenu={this.props.preMenu} curMenu={this.props.curMenu} />
          <input className="searching"
            placeholder = "Start Typing"
            value = {this.state.searchTerm}
            onChange = {this.filterList} 
            autoFocus></input>
            {stories}
        </div>
      );
  },


  filterList: function(event) {
    var txt = event.target.value;
    this.setState({
      term: txt
    });
    // Search
    
  },

  searching: function() {
      var searchterm = this.state.term;
      var rowsTitle = [];
      var search = [];
      var keya = '';
      var db = russiaDB;
      var counter = 0;


      for (var key in russiaDB) {
        counter = 0;
        console.log(key);
        // Split the tags
        var m = russiaDB[key].tags.toLowerCase().split(' ');

        // Search them
        for (var i in m)
          if (m[i].indexOf(searchterm.toLowerCase()) !== -1){
            keya = m[i];
            counter++;
          }
            
        if (counter) {
          rowsTitle.push(keya);
          rowsTitle.push(russiaDB[key]);
        }
      }

      return rowsTitle;
  }

});

module.exports = Categories;