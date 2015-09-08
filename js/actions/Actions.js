var AppDispatcher = require('../dispatcher/AppDispatcher');
var Constants = require('../constants/Constants');

var Actions = {

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
