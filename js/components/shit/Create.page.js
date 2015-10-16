var React = require('react');
// Routing
var Router = require('react-router-component');
var RouteHandler = Router.RouteHandler;
var Link = Router.Link;
var Navigatable = require('react-router-component').NavigatableMixin

// Flux
var Actions = require('../actions/Actions');

var Create = React.createClass({
	mixins: [Navigatable],

    render: function() {
        return (
        <div className="Page">
        	<div className="top-bar-sections blue">
				<h1 className="text-inforum-header"> inforum </h1>
			</div>
				
		<div className="grid wrap">
			
			<section>
				<form className="unit whole submit-story">
					<input ref="title" placeholder="Type the title here" type="text" />

					<input ref="link" placeholder="Link" type="text" autocorrect="off" autocapitalize="none" />

					<input ref="tags" placeholder="&#174; respectTags" type="text" autocorrect="off" autocapitalize="none" />

					<textarea ref="text" placeholder="Type your story here" rows="8" cols="55"> </textarea>
				</form>
			</section>
			

		</div>
		<button onClick={this._onSubmit}>Submit</button>
		</div>
        );
    },

    _onSubmit: function() {
    	alert("Story Created, redirecting");
    	var title = this.refs.title.getDOMNode().value;
    	var text = this.refs.text.getDOMNode().value;
    	var tags = this.refs.tags.getDOMNode().value;
    	var link = this.refs.link.getDOMNode().value;
    	Actions.createStory(title, text, tags, link);
    	this.navigate('/stories');
    }

});

module.exports = Create;