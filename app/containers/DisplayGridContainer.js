var React = require('react')
var DisplayPosters = require('../components/explore/DisplayPosters')

var DisplayGridContainer = React.createClass({

render: function(){
  return(
    <div className="row">

        {this.props.data.map(data =>
        <div className='col s6 m2'>
          <DisplayPosters posterSrc={data.poster_path} />
        </div>)}
    </div>

  )
}

})

module.exports = DisplayGridContainer;
