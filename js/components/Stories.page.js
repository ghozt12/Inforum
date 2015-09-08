var React = require('react');

// Routing
var Router = require('react-router-component');
var RouteHandler = Router.RouteHandler;
var Link = Router.Link;
var Navigatable = require('react-router-component').NavigatableMixin
var Footer = require('./Footer.react');
var Header = require('./Header.react');

var Story = require('./Story.react');
// Flux
var Actions = require('../actions/Actions');


var Stories = React.createClass({
	mixins: [Navigatable],

	componentDidMount: function() {
		// reset article
		Actions.resetArticle();
	}, 

    render: function() {
    	var color = this.props.colour();
    	color = color !== undefined ? color : 'blue';
    	var classnames1 =  color + " top-bar-sections";
        var classnames2 =  color + " side";
        var array = this.props.array();

        // Create Stories
        listStories = [];

        for (var i in array) {
        	listStories.push(<Story theKey={array[i].key} clickHander={this._storyClicked} title={array[i].title} classnames2={classnames2} />)
        }
        return (
        	<div className="Page">
        		<Header showHeader='true' headerClick={this._addStory} />

				<div className="Page grid wrap no-gutters">
					<div className="unit whole">
						{listStories}
					</div>
				</div>

				<Footer />
			</div>
        );
    },

    _addStory: function() {
    	this.navigate('/create');
    },

    _storyClicked: function(key) {
    	Actions.setArticle(key);
    	this.navigate('/story');
    }

});

module.exports = Stories;