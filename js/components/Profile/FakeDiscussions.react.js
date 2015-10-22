/* ****************************
  FakeStories for demo 
  React

  Respect Crew
**************************** */

/* ****************************
  Pages
**************************** */
/* Top Level React Component */
var React = require('react');
// Flux
var Actions = require('../../actions/Actions');

var Storyelement = require('../Story/Storyelement.react');


/* ****************************
  Fake DBs
**************************** */
var fakeDB = {

  1: {
    'key': 00003,
    'title': 'While the production of fossil fuels drops in the United States, solar and wind power is skyrocketing as technology and cheaper financing drive down the costs.',
    'votes': 41,
    'cat': 'EV',
    'catNum': 0,
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
    },
  2: {
    'key': 00004,
    'title': 'Fewer tropical cyclones are expected in Australia between the November-April cyclone season as a result of this years powerful El Nino in the Pacific.',
    'votes': 54,
    'cat': 'EV',
    'catNum': 0,
    'commentnum': 12,
    'author': 'Bec D',
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


/* ****************************
  React
**************************** */
var FakeDiscussions = React.createClass({

  /* *****************
    Rendering 
  ****************** */
  render: function() {
    var stories = [];

    i = 2;
    while (i) {
       stories.push(<Storyelement
            number = {fakeDB[i].key}
            keya = {fakeDB[i].key}
            story = {fakeDB[i].title}
            catNum = {fakeDB[i].catNum}
            cat = {fakeDB[i].cat}
            author = {fakeDB[i].author}
            source = {fakeDB[i].url}
            comments = {fakeDB[i].commentnum}
            votes = {fakeDB[i].votes}
            bookmarked = {fakeDB[i].bookmarked} />);
      i--;
    };

    return (
      <div>
        {stories}
      </div>
    );
  }

});

module.exports = FakeDiscussions;