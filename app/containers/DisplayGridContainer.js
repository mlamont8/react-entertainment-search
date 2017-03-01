var React = require('react')
var DisplayPosters = require('../components/explore/DisplayPosters')
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

var DisplayGridContainer = React.createClass({

  // onItemClick: function(item, e){
  //   console.log(item);
  // },

render: function(){
  return(
    <div className="row">

        {this.props.data.map(data => {
              //bind components to onItemClick method
              //Use bind to attach item argument
              // let boundItemClick = this.onItemClick.bind(this.data);
          return (

              <div key ={data.id} className='col s6 m2'>

                <Link to={'detail/'+ this.props.type +'/'+ data.id } >
                  <img src = {'https://image.tmdb.org/t/p/w154' + data.poster_path} />
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
