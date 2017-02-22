var React = require('react')
var Search = require('../components/explore/search')


var ExploreContainer = React.createClass({

  render: function () {

    return(
      <div className='container' style={{backgroundColor: '#000000'}}>
        <Search />

      </div>
    )

  }
})

module.exports = ExploreContainer;
