var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var Constants = require('../constants/Constants');
var assign = require('object-assign');

var CHANGE_EVENT = 'change';

/* ********************************
  Variables
******************************** */
var _store;

var searchVisibility = false;
var curMenu = 0;
var preMenu = 3;
var catSelected = 0;
var bookmarkCount = 0;
var bookmarks = {};
var userName;
var userImg;
var showSocialVal = false;

var curProfileMenu = 0;
var preProfileMenu = 0;

var curCatMenu = 0;
var preCatMenu = 0;

/* Catogories are 
1: Enviroment
2: Sport
3: Science
4: Business
5: Politics
6: Entertainent
7: Culture
*/

var userName;
var sectionColor;
var currentArticle;
var currentKey = 3;

/* ********************************
  DATABASES (fake)
******************************** */
var selectedDB;

var _DB = {
  1: {
    'key': 00001,
    'title': 'The Baird government has raised its energy savings goal 70 per cent by 2020 in a bid to limit rising electricity and gas bills, and save an extra 730,000 tonnes of carbon emission annually by the end of the decade',
    'votes': 203,
    'cat': 'EV',
    'catNum': 0,
    'commentnum': 32,
    'author': 'Bec A',
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
    'author': 'Bec B',
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
    'title': '​While the production of fossil fuels drops in the United States, solar and wind power is skyrocketing as technology and cheaper financing drive down the costs.',
    'votes': 41,
    'cat': 'EV',
    'catNum': 0,
    'commentnum': 22,
    'author': 'Bec C',
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

var _DBEVchats = {
  1: {
    'key': 0000467,
    'title': 'Fewer tropical cyclones are expected in Australia between the November-April cyclone season as a result of this years powerful El Nino in the Pacific.',
    'votes': 54,
    'cat': 'EV',
    'catNum': 0,
    'commentnum': 312,
    'author': 'Bec D',
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
    'key': 0000367,
    'title': '​While the production of fossil fuels drops in the United States, solar and wind power is skyrocketing as technology and cheaper financing drive down the costs.',
    'votes': 41,
    'cat': 'EV',
    'catNum': 0,
    'commentnum': 222,
    'author': 'Bec C',
    'time': '10:20:20',
    'url': 'SMH',
    'comments': {
      1: "I wish i was using this",
      2: "This is interesting",
      3: "Third comment",
      4: "hello"
    },
    },
    3: {
    'key': 0000267,
    'title': 'National pledges to cut greenhouse gas emissions, even if fully implemented, would cap global warming at 3 degrees Celsius rather than the 2 degrees targeted to avoid dangerous consequences, the European Commission said',
    'votes': 34,
    'commentnum': 54,
    'cat': 'EV',
    'catNum': 0,
    'author': 'Bec B',
    'time': '10:20:20',
    'url': 'FOX News',
    'comments': {
      1: "I wish i was using this",
      2: "This is interesting",
      3: "Third comment",
      4: "hello"
    },
    },
    4: {
    'key': 0000167,
    'title': 'The Baird government has raised its energy savings goal 70 per cent by 2020 in a bid to limit rising electricity and gas bills, and save an extra 730,000 tonnes of carbon emission annually by the end of the decade',
    'votes': 203,
    'cat': 'EV',
    'catNum': 0,
    'commentnum': 32,
    'author': 'Bec A',
    'time': '10:20:20',
    'url': 'ABC',
    'comments': {
      1: "I wish i was using this",
      2: "This is interesting",
      3: "Third comment",
      4: "hello"
    },
    }
};



var _DB2 = {
  1: {
    'key': 5,
    'title': 'If the US proceeds with its proposed Freedom of Navigation operation, this will more than likely be the first in a number of encounters between rival powers in one of the worlds growing hotspots.',
    'votes': 23,
    'cat': 'SC',
    'catNum': 1,
    'commentnum': 22,
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
    'key': 6,
    'title': 'Google is throwing its might into a project to slow the ageing process, and researchers think it could be possible for humans to live until were 1,000. But many philosophers and ethicists arent so keen on the idea.',
    'votes': 22,
    'commentnum': 544,
    'cat': 'SC',
    'catNum': 1,
    'author': 'Bec C',
    'time': '10:20:20',
    'url': 'NEWS.com.au',
    'comments': {
      1: "I wish i was using this",
      2: "This is interesting",
      3: "Third comment",
      4: "hello"
    },
    },
  3: {
    'key': 7,
    'title': '​While the production of fossil fuels drops in the United States, solar and wind power is skyrocketing as technology and cheaper financing drive down the costs.',
    'votes': 51,
    'cat': 'SC',
    'catNum': 1,
    'commentnum': 24,
    'author': 'Rachel',
    'time': '10:20:20',
    'url': 'ABC',
    'comments': {
      1: "I wish i was using this",
      2: "This is interesting",
      3: "Third comment",
      4: "hello"
    },
    },
    4: {
    'key': 8,
    'title': 'In considering the public costs of alcohol, the current "nanny state" inquiry needs to look past inflated dollar figures.',    'votes': 54,
    'cat': 'SC',
    'votes': 51,
    'catNum': 1,
    'commentnum': 22,
    'author': 'Sherwina',
    'time': '10:20:20',
    'url': 'BBC',
    'comments': {
      1: "I wish i was using this",
      2: "This is interesting",
      3: "Third comment",
      4: "hello"
    },
    }
};

var _DB3 = {
  1: {
    'key': 9,
    'title': 'Rugby league legend Hazem El-Masri has been charged with serious domestic violence offences following an incident at his western Sydney home.',
        'votes': 23,
    'cat': 'SP',
    'catNum': 2,
    'commentnum': 22,
    'author': 'Sherwin',
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
    'key': 10,
    'title': 'Google is throwing its might into a project to slow the ageing process, and researchers think it could be possible for humans to live until were 1,000. But many philosophers and ethicists arent so keen on the idea.',
    'votes': 22,
    'commentnum': 544,
    'cat': 'SP',
    'catNum': 2,
    'author': 'Chamath',
    'time': '10:20:20',
    'url': 'NEWS.com.au',
    'comments': {
      1: "I wish i was using this",
      2: "This is interesting",
      3: "Third comment",
      4: "hello"
    },
    },
  3: {
    'key': 11,
    'title': 'League: Outgoing NRL CEO Dave Smith has refuted suggestions he was told to stand down from his position, saying the decision was entirely his.',    'votes': 51,
    'cat': 'SP',
    'votes': 22,
    'catNum': 2,
    'commentnum': 24,
    'author': 'Racket',
    'time': '10:20:20',
    'url': 'ABC',
    'comments': {
      1: "I wish i was using this",
      2: "This is interesting",
      3: "Third comment",
      4: "hello"
    },
    },
    4: {
    'key': 12,
    'title': 'A review committee has found South African referee Craig Joubert should not have awarded the last minute penalty that secured Australia victory over Scotland in their World Cup quarter-final on the weekend.',
    'cat': 'SP',
    'votes': 51,
    'catNum': 2,
    'commentnum': 22,
    'author': 'Char Math',
    'time': '10:20:20',
    'url': 'BBC',
    'comments': {
      1: "I wish i was using this",
      2: "This is interesting",
      3: "Third comment",
      4: "hello"
    },
    }
};


var _DB4 = {
  1: {
    'key': 92,
    'title': 'Oprah Winfrey will buy a 10 per cent stake in Weight Watchers, adding her celebrity and consumer appeal to a diet brand that has been shedding subscribers.',        'votes': 23,
    'cat': 'BU',
    'catNum': 3,
    'commentnum': 22,
    'author': 'Sherwin',
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
    'key': 102,
    'title': 'Google is throwing its might into a project to slow the ageing process, and researchers think it could be possible for humans to live until were 1,000. But many philosophers and ethicists arent so keen on the idea.',
    'votes': 22,
    'commentnum': 544,
    'cat': 'BU',
    'catNum': 3,
    'author': 'Chamath',
    'time': '10:20:20',
    'url': 'NEWS.com.au',
    'comments': {
      1: "I wish i was using this",
      2: "This is interesting",
      3: "Third comment",
      4: "hello"
    },
    },
  3: {
    'key': 112,
    'title': 'Banks exposure to property developers and investors remained the biggest single risk to Australias financial system, according to the minutes of the RBAs October meeting.',
    'cat': 'BU',
    'votes': 22,
    'catNum': 3,
    'commentnum': 24,
    'author': 'Racket',
    'time': '10:20:20',
    'url': 'ABC',
    'comments': {
      1: "I wish i was using this",
      2: "This is interesting",
      3: "Third comment",
      4: "hello"
    },
    },
    4: {
    'key': 122,
    'title': ' junior Deutsche Bank forex worker mistakenly wired $8.3 billion to the wrong client in June. The money was recovered a day later.',
    'cat': 'BU',
    'votes': 51,
    'catNum': 3,
    'commentnum': 22,
    'author': 'Char Math',
    'time': '10:20:20',
    'url': 'BBC',
    'comments': {
      1: "I wish i was using this",
      2: "This is interesting",
      3: "Third comment",
      4: "hello"
    },
    }
};
// Get the correct database



var _TopChats = {
  1: {
    'key': 00001,
    'title': 'Jennifer Lawrence: All I hear and see all day are men speaking their opinions, and I give mine in the same exact manner, and you would have thought I had said something offensive, Im over trying to find the adorable way to state my opinion and still be likable!',
    'votes': 203,
    'cat': 'BU',
    'catNum': 3,
    'commentnum': 555,
    'author': 'Bec A',
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
    'votes': 334,
    'commentnum': 544,
    'cat': 'EV',
    'catNum': 0,
    'author': 'Bec B',
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
    'title': '​While the production of fossil fuels drops in the United States, solar and wind power is skyrocketing as technology and cheaper financing drive down the costs.',
    'votes': 41,
    'cat': 'SC',
    'catNum': 1,
    'commentnum': 223,
    'author': 'Bec C',
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
    'cat': 'SP',
    'catNum': 2,
    'commentnum': 123,
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


function showSocial(val) {
  showSocialVal = val;
}


/* ********************************
  FUNCTIONS from ACTIONS
******************************** */
function pushCat(val) {
  catSelected = val;
}


function saveBookmark(val) {
  bookmarkCount = val.key;
  // Check if bookmark exists

  if (bookmarks[bookmarkCount] == null)
     bookmarks[bookmarkCount] = val;
   else 
    delete bookmarks[bookmarkCount];

  console.log(bookmarks);
}

function storeUser(name, img) {
  userName = name;
  userImg = img;
}

/* ********************************
  HELPER FUNCTIONS
******************************** */

function setSearchVisibility(val) {
  searchVisibility = val;
}
function pushMenu(val) {
  curMenu = val;
}

function setProfileMenu(val) {
  curProfileMenu = val;
}

function setCatMenu(val) {
  curCatMenu = val;
}

function setPreProfileMenu(val) {
  preProfileMenu = val;
}
function setPreCatMenu(val) {
  preCatMenu = val;
}

function pushPreMenu(val) {
  preMenu = val;
}


var _store = [
  {
    key: 0,
    vote: 100,
    title: "Title 1",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
  },
  {
    key: 1,
    vote: 200,
    title: "Title 2",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
  },
  {
    key: 2,
    vote: 300,
    title: "Title 3",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
  }
];

// Variables

// Functions
function setUserName(username) {
  userName = username;
}
function setTheme(theme) {
  sectionColor = theme;
}

function resetArticle() {
  currentArticle = null;
}

function setArticle(key) {
  for (var a in _store) {
    if (_store[a].key == key) {
      currentArticle = _store[a];
    }
  }
}

function createStory(title, text, tags, link) {
  _store.push({
    key:currentKey,
    vote: 0,
    title: title,
    text: text
  });
  currentKey++;
}

var InforumStore = assign({}, EventEmitter.prototype, {
  getEnvCat: function() {
    return _DBEVchats;
  },

  getSocial: function() {
    return showSocialVal;
  },
  getName: function() {
    return userName;
  },
  getImg: function() {
    return userImg;
  },
  getEnviroment: function() {
    return _DB;
  },
  getScience: function() {
    return _DB2;
  },
  getSport: function() {
    return _DB3;
  },
  getBusiness: function() {
    return _DB4;
  },
  getChats: function() {
    return _TopChats;
  },

  getBookmarks: function() {
    return bookmarks;
  },

  getSearchVisibility: function() {
    return searchVisibility;
  },

  getCurProfileMenu: function() {
    return curProfileMenu;
  },

  getPreProfileMenu: function() {
    return preProfileMenu;
  },

  getCurCatMenu: function() {
    return curCatMenu;
  },

  getPreCatMenu: function() {
    return preCatMenu;
  },

  getCurMenu: function() {
    return curMenu;
  },

  getPreMenu: function() {
    return preMenu;
  },

  getStoreArray: function() {
    return _store;
  },

  getUserName: function() {
    return userName;
  },

  sectionColor: function() {
    return sectionColor;
  },

  getArticleKey: function() {
    return currentArticle;
  },

  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },

  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }
});

// Register callback to handle all updates
AppDispatcher.register(function(action) {
  var text;

  switch(action.actionType) {
    
    case Constants.USER:
      storeUser(action.name, action.img);
      InforumStore.emitChange();
      break;
    case Constants.PUSH_CAT:
      pushCat(action.text);
      InforumStore.emitChange();
      break;
     case Constants.PUSH_MENU:
      pushMenu(action.text);
      InforumStore.emitChange();
      break;
    case Constants.PUSH_PRE_MENU:
      pushPreMenu(action.text);
      InforumStore.emitChange();
      break;
    case Constants.SET_SEARCH_VISIBILITY:
      setSearchVisibility(action.text);
      InforumStore.emitChange();
      break;
    case Constants.SET_USER_NAME:
      setUserName(action.text);
      InforumStore.emitChange();
      break;
     case Constants.SET_THEME:
      setTheme(action.text);
      InforumStore.emitChange();
      break;
    case Constants.RESET_ARTICLE:
      resetArticle();
      InforumStore.emitChange();
      break;
    case Constants.SET_ARTICLE:
      setArticle(action.text);
      InforumStore.emitChange();
      break;
    case Constants.CREATE_STORY:
      createStory(action.title, action.text, action.tags, action.link);
      InforumStore.emitChange();
      break;
    case Constants.PUSH_BOOKMARK:
      saveBookmark(action.text);
      InforumStore.emitChange();
      break;
    case Constants.SHOWSOCIAL:
      showSocial(action.text);
      InforumStore.emitChange();
      break;
    case Constants.PUSH_PROFILE_MENU:
      setProfileMenu(action.text);
      InforumStore.emitChange();
      break;
    case Constants.PUSH_PRE_PROFILE_MENU:
      setPreProfileMenu(action.text);
      InforumStore.emitChange();
      break;
    case Constants.PUSH_CAT_MENU:
      setCatMenu(action.text);
      InforumStore.emitChange();
      break;
    case Constants.PUSH_PRE_CAT_MENU:
      setPreCatMenu(action.text);
      InforumStore.emitChange();
      break;
      
    default:
  }
});

module.exports = InforumStore;
