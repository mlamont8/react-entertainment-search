var React = require('react')

var DetailContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  render: function(){
    return (
      <div>
        <img src={'https://image.tmdb.org/t/p/w185/'} />
      </div>
    )
  }

})
module.exports = DetailContainer;
