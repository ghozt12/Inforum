/* Top Level React Component */

var React = require('react');

// Routing
var Router = require('react-router-component');
var RouteHandler = Router.RouteHandler;
var Link = Router.Link;
var Navigatable = require('react-router-component').NavigatableMixin

// Flux
var Actions = require('../actions/Actions');


var Inforum = React.createClass({
	mixins: [ Navigatable ],

    render: function() {
        return (
        	<div className="Page">
				<div className="top-bar"></div>
				
				<div className="grid wrap">
					<section>
						<div className="unit whole">
							<h1 className="text-inforum-large"> inforum </h1>
							<h2 className="text-inforum-small"> your News </h2>
						</div>
					</section>

					<section>
						<form className="unit whole">
							<input ref="myInput" placeholder="Username" type="text" autoCorrect="off" autoCapitalize="none" />
							<input placeholder="Password" type="password" />	
						</form>
					</section>
					
					<section>
						<div className="unit whole">
							<h3 className="text-inforum-powered"> powered by respect </h3>
						</div>
					</section>

				</div>
					<button onClick={this._handleChange}>Submit</button> 
        	</div>
        );
    },

    _handleChange: function() {
    	Actions.setUserName(this.refs.myInput.getDOMNode().value);
    	this._onSubmit();
    }, 

    _onSubmit: function() {
    	this.navigate('/sections');
    }

});

module.exports = Inforum;