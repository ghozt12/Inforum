var React = require('react');

var Story = React.createClass({

	render: function() {
		return (
			<div onClick={this._clickHandler} className="story-container">
				<p> {this.props.title} </p>
				<div className={this.props.classnames2}>
					<i className="fa fa-thumbs-up"></i> 
					<i className="fa fa-comment"></i>
					<i className="fa fa-link"></i> 
					<i className="fa fa-flag"></i>
				</div>
			</div>
		);
	},

	_clickHandler: function() {
		this.props.clickHander(this.props.theKey);
	}

});

module.exports = Story;