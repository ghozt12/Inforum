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
    'key': 00001,
    'title': 'The Baird government has raised its energy savings goal 70 per cent by 2020 in a bid to limit rising electricity and gas bills, and save an extra 730,000 tonnes of carbon emission annually by the end of the decade',
    'votes': 203,
    'cat': 'EV',
    'catNum': 0,
    'commentnum': 32,
    'author': 'Rhain',
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
    'title': 'National pledges to cut greenhouse gas emissions, even if fully implemented, would cap global warming at 3 degrees Celsius rather than the 2 degrees targeted to avoid dangerous consequences, the European Commission said',
    'votes': 34,
    'commentnum': 54,
    'cat': 'EV',
    'catNum': 0,
    'author': 'Rhain',
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
    4: {
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



var stevoDB = {
  1: {
    'key': 00001,
    'title': 'Sydney could have its own Silicon Valley on the harbour after NSW Premier Mike Baird announced plans for the countrys first tech precinct.',
    'votes': 203,
    'cat': 'TE',
    'catNum': 6,
    'commentnum': 32,
    'author': 'Stevo',
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
    'title': 'The social networking giant has created a standalone website dedicated to increasing diversity in tech through targeting the pipeline of young engineers',
    'votes': 34,
    'commentnum': 54,
    'cat': 'TE',
    'catNum': 6,
    'author': 'Stevo',
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
    'title': 'Its going to be quite a battle at the pre-Halloween box office as Danny Boyles Steve Jobs biopic expands nationwide.',
    'votes': 41,
    'cat': 'TE',
    'catNum': 6,
    'commentnum': 22,
    'author': 'Stevo',
    'time': '10:20:20',
    'url': 'SMH',
    'comments': {
      1: "I wish i was using this",
      2: "This is interesting",
      3: "Third comment",
      4: "hello"
    },
    },
    4: {
    'key': 00004,
    'title': 'Apple News, which replaced Apple Newsstand. is now available to Australian and UK users who upgrade to Apples latest iOS version',
    'votes': 54,
    'cat': 'TE',
    'catNum': 6,
    'commentnum': 12,
    'author': 'Stevo',
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
var FakeStories = React.createClass({

  /* *****************
    Rendering 
  ****************** */
  render: function() {
    var stories = [];
    var db = (this.props.fake ? stevoDB : fakeDB);

    i = 3;
    while (i) {

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
            bookmarked = {db[i].bookmarked} />);
      i--;
    };

    return (
      <div>
        {stories}
      </div>
    );
  }

});

module.exports = FakeStories;