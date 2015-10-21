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
var Catogories = require('./components/Pages/Categories.page');
var Profile = require('./components/Pages/Profile.page');


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

  _getEnviroment: function() {
    return InforumStore.getEnviroment();
  },
  _getScience: function() {
    return InforumStore.getScience();
  },
  _getSport: function() {
    return InforumStore.getSport();
  }, 

  _getBusiness: function() {
    return InforumStore.getBusiness();
  },
  _getChats: function() {
    return InforumStore.getChats();
  },

  _getBookmarks: function() {
    return InforumStore.getBookmarks();
  }, 
  _getName: function() {
    return InforumStore.getName();
  }, 
  _getImg: function() {
    return InforumStore.getImg();
  },  
  _getSocial: function() {
    return InforumStore.getSocial();
  },

  render: function() {

    var searchVisibility = this._getSearchVisibility;
    var curMenu = this._getCurMenu;
    var preMenu = this._getPreMenu;
  	var user = this._getUserName;
  	var col = this._getSectionColor;
  	var array = this._getArray;
  	var article = this._getArticle;
    var social = this._getSocial;

    // User info 
    var name = this._getName;
    var img = this._getImg;

    // Databases (select one depending on catogory)
    var DBenviroment = this._getEnviroment;
    var DBScience = this._getScience;
    var DBSport = this._getSport;
    var DBBusiness = this._getBusiness;
    var DBChats = this._getChats();
    var Bookmarks = this._getBookmarks;

    return (
    <AnimatedLocations hash className="Main" transitionName="moveUp" popStateTransitionName="fade">
        <Location path="/" handler={Signin} />
        <Location path="/signin-email" handler={SigninEmail} />
        <Location path="/signin-fb" handler={SigninFB} />
        <Location path="/catogories" 
        name={name}
        img={img}
        social={social}

        db1={DBenviroment} 
        db2={DBScience} 
        db3={DBSport} 
        db4={DBBusiness} 
        dbChats={DBChats} 

        db_bm={Bookmarks} 
        preMenu={preMenu} 
        curMenu={curMenu} 
        search={searchVisibility} 
        handler={Catogories} />

        <Location path="/profile" 
        name={name}
        img={img}
        social={social}

        db1={DBenviroment} 
        db2={DBScience} 
        db3={DBSport} 
        db4={DBBusiness} 
        dbChats={DBChats} 

        db_bm={Bookmarks} 
        preMenu={preMenu} 
        curMenu={curMenu} 
        search={searchVisibility} 

        handler={Profile} />

     </AnimatedLocations>    
     );
  }
})

React.render(<App />, document.getElementById('app'));