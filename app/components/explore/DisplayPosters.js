var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

//
// var DisplayPosters = function(props){
//
//     return (
//             <Link to='/detail/'>
//           <img src = {'https://image.tmdb.org/t/p/w154' + props.data.poster_path} />
//         </Link>
//     )
//
// }

var DisplayPosters = React.createClass({

      // setState: {
      //   id: this.props.data.id
      // },

  render: function (){

    return (
    <Link to={'detail/'+ this.props.type +'/'+ this.props.data.id } >
      <img src = {'https://image.tmdb.org/t/p/w154' + this.props.data.poster_path} />
    </Link>
    )
  }
})

module.exports = DisplayPosters;
