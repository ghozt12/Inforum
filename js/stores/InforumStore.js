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


// Get the correct database



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


  getName: function() {
    return userName;
  },
  getImg: function() {
    return userImg;
  },
  getEnviroment: function() {
    return _DB;
  },

  getBookmarks: function() {
    return bookmarks;
  },

  getSearchVisibility: function() {
    return searchVisibility;
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
      
    default:
  }
});

module.exports = InforumStore;
