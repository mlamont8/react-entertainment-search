var React = require('react')
var displayPosters = require('../components/explore/displayPosters')

var DisplayGridContainer = React.createClass({

render: function(){
  return(
    <div className="row">

        {this.props.data.map(data =>
        <div className='col s6 m2'>
          <displayPosters posterSrc={data.poster_path} />
        </div>)}
    </div>

  )
}

})

module.exports = DisplayGridContainer;
