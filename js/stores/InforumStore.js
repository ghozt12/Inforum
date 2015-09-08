var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var Constants = require('../constants/Constants');
var assign = require('object-assign');

var CHANGE_EVENT = 'change';

var _store;

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
var userName;
var sectionColor;
var currentArticle;
var currentKey = 3;

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
      
    default:
  }
});

module.exports = InforumStore;
