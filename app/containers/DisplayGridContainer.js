var React = require('react')
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

var DisplayGridContainer = React.createClass({



render: function(){
  return(
    <div className="row">

        {this.props.data.map(data => {
                return (

              <div key ={data.id} className='col s6 m2'>

                <Link to={'detail/'+ this.props.type +'/'+ data.id } >
                  <img src = {'https://image.tmdb.org/t/p/w154' + data.poster_path}
                

                 />
                </Link>

              </div>

            )
          }
      )}
    </div>


  )
}
})




module.exports = DisplayGridContainer;
