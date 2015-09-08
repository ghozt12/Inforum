var React = require('react');

var Section = React.createClass({

	componentDidMount: function() {
		this.setState({
			color: this.props.color 
		});
	},

	render: function() {
		var color = this.props.color;
		var classDetails = "section " + color;
		var Title = this.props.title;

		return (
			<div className="unit half" onClick={this._handleClick} >
				<div className={classDetails}>
					<h1>{Title}</h1>
				</div>
			</div>
		);
	},

	_handleClick: function() {
		// Sends the color back to Section.page
		this.props.passBack(this.state.color);
	}

});

module.exports = Section;