/* ****************************
  CATOGORY Catogory 
  react

  Respect Crew
**************************** */

/* ****************************
  Pages
**************************** */
var React = require('react');
// Flux
var Actions = require('../../actions/Actions');

// Pages
var Catogorylist = require('./Catogorylist.react');

/* ****************************
  React
**************************** */
var Catogory = React.createClass({
  
  /* *****************
    Render 
  ****************** */
  render: function() {
    return (
      <div className="categories">
      <ul>
        <Catogorylist name="Enviroment" />
        <Catogorylist name="Sport" />
        <Catogorylist name="Science" />
        <Catogorylist name="Business" />
        <Catogorylist name="Politics" />
        <Catogorylist name="Lesuire" />
        <Catogorylist name="Culture" />
      </ul>
      </div>
    );
  }
});

module.exports = Catogory;