var React = require('react');
var styles = require('../../styles');


var SectionTitle = React.createClass({
  render: function () {
    return (
      <div className="divide col s12 grey darken-4" style={styles.divide}>
       <div><p className="white-text" style={styles.zeroMargin}>Popular TV Shows</p></div>
      </div>
    )
  }
});

module.exports = SectionTitle;
