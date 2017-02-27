var React = require('react')
var DisplayPosters = require('../components/explore/DisplayPosters')

var DisplayGridContainer = React.createClass({

render: function(){
  return(
    <div className="row">

        {this.props.data.map(data =>
        <div key ={data.id} className='col s6 m2'>
          <DisplayPosters data={data} type={this.props.type}/>
        </div>)}
    </div>

  )
}

})

module.exports = DisplayGridContainer;
