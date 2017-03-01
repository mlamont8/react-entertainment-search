var React = require('react')
var DisplayPosters = require('../components/explore/DisplayPosters')
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

var DisplayGridContainer = React.createClass({

  onItemClick: function(item, e){
    console.log(item);
  },

render: function(){
  return(
    <div className="row">

        {this.props.data.map(data => {
              //bind components to onItemClick method
              //Use bind to attach item argument
              let boundItemClick = this.onItemClick.bind(this.data);
          return (
            <Link to={'/detail'}>
              <div key ={data.id} onClick={boundItemClick} className='col s6 m2'>
                <DisplayPosters data={data} type={this.props.type}/>
              </div>
            </Link>
    )
  }
      )}
    </div>


  )
}
})



  // var items = this.props.data;
  //     var _this = this;
  // return (
  //   <div>
    // {() => {
    //   items.map((item) => {
    //     //bind components to onItemClick method
    //     //Use bind to attach item argument
    //     var boundItemClick = this.onItemClick.bind(this.item);
    //
    //     //Construct onClick with bound function
    //
    //     return <img key ={data.id} src = {'https://image.tmdb.org/t/p/w154' + this.props.data.poster_path} />
    //   })
    // }()}



//     function(){
//         items.map(function (item) {
//             //bind components to onItemClick method
//             //Use bind to attach item argument
//             var boundItemClick = _this.onItemClick.bind(_this.item);
//             //Construct onClick with bound function
//             return key;
//             {
//                 data.id;
//             }
//           <img src = { 'https://image.tmdb.org/t/p/w154' +_this.props.data.poster_path } />
//             ;
//         });
//     }
//     ()
//
//   )
// }
// </div>,
// onItemClick: function(item, e){
//   console.log(item);
// }

//})

module.exports = DisplayGridContainer;
