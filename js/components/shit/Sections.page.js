var React = require('react');

// Routing
var Router = require('react-router-component');
var RouteHandler = Router.RouteHandler;
var Link = Router.Link;
var Navigatable = require('react-router-component').NavigatableMixin
var Footer = require('./Footer.react');

// Flux
var Actions = require('../actions/Actions');

// Other
var Section = require('./Section.react');
var Header = require('./Header.react');


var Sections = React.createClass({
	mixins: [ Navigatable ],

    render: function() {
    	var user = this.props.user();
    	var colours = ['turc', 'green', 'blue', 'purple', 'yellow', 'orange'];
    	var titles = ['Top News', 'Politics', 'Tech', 'World', 'Sport', 'Nature'];
    	
    	var sectionArray = [];
    	for (var i in colours) {
    		sectionArray.push(<Section color={colours[i]} passBack={this._handleClick} title={titles[i]} />);
    	}

        return (
        	<div className="Page">
        		<Header user={user} />
        		<div className="grid wrap no-gutters">
        			{sectionArray}
        		</div>
        		<Footer />
        	</div>
        );
    },

    _handleClick: function(color) {
    	Actions.setTheme(color);
    	this.navigate('/stories');
    }

});

module.exports = Sections;