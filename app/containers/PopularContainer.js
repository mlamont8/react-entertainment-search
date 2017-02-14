var React = require('react');
var LeftPopular = require('../components/home/popcontainer/LeftPopular');
var RightPopular = require('../components//home/popcontainer/RightPopular');
var styles = require('../styles');
var PopularHelper = require('../utils/PopularHelper');


var PopularContainer = React.createClass({
  getInitialState: function (){
    return {

      frontPageInfo: []
    }
  },

  componentDidMount: function (){
    PopularHelper.getPopMovieInfo(['movie', 'tv'])
    .then(function (retData){
      this.setState({
        frontPageInfo: [retData[0], retData[1]]
      })
    }.bind(this)
  )
},
  // componentDidMount: function (){
  //   PopularHelper.getPopMovieInfo()
  //     .then(function (data){
  //       console.log('data', data);
  //       this.setState({
  //         data
  //       });
  //     })
  // },
render: function () {
  return(
      // <div className="row mostPopularFull" style={styles.mostPopularStyle}>
      //   <LeftPopular />
      //   <RightPopular />
      //
      // </div>
      <div> Popular Container </div>
  )
}
})

module.exports = PopularContainer;
