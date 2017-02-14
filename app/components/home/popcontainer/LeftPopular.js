var React = require('react')
var styles = require('../../../styles')
var TopImages = require('./TopImages')


var LeftPopular= React.createClass({
  render: function () {
    return(
      <div className="leftContainer blue imgBlock col s12 m12 l6" style={styles.leftPop}>
        <TopImages />
 </div>
    )
  }
})

module.exports = LeftPopular;
