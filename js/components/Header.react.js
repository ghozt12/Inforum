var React = require('react');

var Header = React.createClass({

	render: function() {
		// Grab the user name
		var user = this.props.user;
		var showHeader = "text-inforum-username fa fa-check";
		this.props.showHeader ? '' : showHeader = '';

		return (
			<div className="top-bar-sections">
				<h1 className="text-inforum-header"> inforum </h1>
				<h1 className="text-inforum-username"> {user} </h1>
				<i onClick={this._clickHandler} className={showHeader}></i>
			</div>
		);
	},

	_clickHandler: function(event) {
		this.props.headerClick();
	}

});

module.exports = Header;