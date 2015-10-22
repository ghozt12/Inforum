var AppDispatcher = require('../dispatcher/AppDispatcher');
var Constants = require('../constants/Constants');

var Actions = {

  pushUserInfo: function(name, img) {
    AppDispatcher.dispatch({
          actionType: Constants.USER,
          name: name,
          img: img
      });
  },

  showSocial: function(val) {
    AppDispatcher.dispatch({
      actionType: Constants.SHOWSOCIAL,
      text: val
    });
  },

  pushBookmark: function(val) {
    AppDispatcher.dispatch({
      actionType: Constants.PUSH_BOOKMARK,
      text: val
    });

  },

  pushCatogory: function(val) {
  AppDispatcher.dispatch({
      actionType: Constants.PUSH_CAT,
      text: val
    });
  },

  pushMenu: function(val) {
    AppDispatcher.dispatch({
      actionType: Constants.PUSH_MENU,
      text: val
    });
  },

  pushPrevMenu: function(val) {
    AppDispatcher.dispatch({
      actionType: Constants.PUSH_PRE_MENU,
      text: val
    });
  },

  pushProfileMenu: function(val) {
    AppDispatcher.dispatch({
      actionType: Constants.PUSH_PROFILE_MENU,
      text: val
    });
  },

  pushPrevProfileMenu: function(val) {
    AppDispatcher.dispatch({
      actionType: Constants.PUSH_PRE_PROFILE_MENU,
      text: val
    });
  },



  showSearch: function(val) {
    AppDispatcher.dispatch({
      actionType: Constants.SET_SEARCH_VISIBILITY,
      text: val
    });
  },

	setUserName: function(userName) {
		AppDispatcher.dispatch({
      		actionType: Constants.SET_USER_NAME,
      		text: userName
    	});
	},

	setTheme: function(theme) {
		AppDispatcher.dispatch({
      		actionType: Constants.SET_THEME,
      		text: theme
    	});
	},

	resetArticle: function() {
		AppDispatcher.dispatch({
      		actionType: Constants.RESET_ARTICLE
    	});
	},

	setArticle: function(key) {
		AppDispatcher.dispatch({
      		actionType: Constants.SET_ARTICLE,
      		text: key
    	});
	},

	createStory: function(title, text, tags, link) {
		AppDispatcher.dispatch({
      		actionType: Constants.CREATE_STORY,
      		title: title,
      		text: text,
      		tags: tags,
      		link: link
    	});
	}
};

module.exports = Actions;
