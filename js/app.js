// Dep
var React = require('react');
var Router = require('react-router-component');
var AnimatedLocations = require('react-router-component-transition');
var Location = Router.Location;
var NotFound = Router.NotFound;

// Componenets
var Signin = require('./components/Signin.page');
var SigninEmail = require('./components/SigninEmail.page');
var SigninFB = require('./components/SigninFB.page');
var Catogories = require('./components/Categories.page');

var Inforum = require('./components/Inforum.react');
var Header = require('./components/Header.react');
var Sections = require('./components/Sections.page');
var Stories = require('./components/Stories.page');
var Story = require('./components/Story.page');
var Create = require('./components/Create.page');
var NotFoundPage = require('./components/NotFound.page');

// FLux
var InforumStore = require('./stores/InforumStore');
var Actions = require('./actions/Actions');

// Functions
function getState() {
	return {
		userName: InforumStore.getUserName()
	}
}

// This is the top level componenet
var App = React.createClass({

	getInitialState: function() {
		return getState();
	}, 

	componentDidMount: function() {
		InforumStore.addChangeListener(this._onChange);
	},

	componentWillUnmount: function() {
		InforumStore.removeChangeListener(this._onChange);
	},

	_onChange: function() {
    	this.setState(getState());
    	this.forceUpdate();
	},

	_getUserName: function() {
		return InforumStore.getUserName();
	},

	_getSectionColor: function() {
		return InforumStore.sectionColor();
	},

	_updateProps: function() {
		var user = this.state.userName;
		return user;
	},

	_getArray: function() {
		return InforumStore.getStoreArray();
	}, 

	_getArticle: function() {
		return InforumStore.getArticleKey();
	},

  _getSearchVisibility: function() {
    return InforumStore.getSearchVisibility();
  },

  _getCurMenu: function() {
    return InforumStore.getCurMenu();
  },

  _getPreMenu: function() {
    return InforumStore.getPreMenu();
  },

  render: function() {

    var searchVisibility = this._getSearchVisibility;
    var curMenu = this._getCurMenu;
    var preMenu = this._getPreMenu;
  	var user = this._getUserName;
  	var col = this._getSectionColor;
  	var array = this._getArray;
  	var article = this._getArticle;

    return (
    <AnimatedLocations hash className="Main" transitionName="moveUp" popStateTransitionName="fade">
        <Location path="/" handler={Signin} />
        <Location path="/signin-email" handler={SigninEmail} />
        <Location path="/signin-fb" handler={SigninFB} />
        <Location path="/catogories" preMenu={preMenu} curMenu={curMenu} search={searchVisibility} handler={Catogories} />

        <Location user={user} path="/sections" handler={Sections} />
        <Location array={array} colour={col} path="/stories" handler={Stories} />
        <Location article={article} path="/story" handler={Story} />
        <Location path="/create" handler={Create} />
     </AnimatedLocations>    
     );
  }
})

React.render(<App />, document.getElementById('app'));