var React = require('react');
var Router = require('react-router-component');
var RouteHandler = Router.RouteHandler;
var Link = Router.Link;

var NotFound = React.createClass({

    render: function() {
        return (
        	<div>
            <Link href="/search">user page</Link>
        	NOT FOUND
        	</div>
        );
    }

});

module.exports = NotFound;