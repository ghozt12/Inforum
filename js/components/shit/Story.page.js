var React = require('react');
var Footer = require('./Footer.react');
var Header = require('./Header.react');


var Story = React.createClass({

    render: function() {

    	var title = this.props.article().title;
    	var text = this.props.article().text;
    	var comments = this.props.article().vote;

        return (
        	<div classNameName="Page">

				<Header />
		
				<div className="grid wrap">
					<div className="story unit whole">
						<h1>{title}</h1>
						<div> Comments: <span> {comments} </span> Respects: <span> 230 </span> </div>
						<p> {text} </p>
					</div>
				</div>

				<Footer />

			</div>
        );
    }

});

module.exports = Story;

