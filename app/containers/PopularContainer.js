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

  componentDidMount: function () {
    var retData = (PopularHelper.getApiInfo('movie')).bind(this)

        console.log('return data',retData);
      this.setState({
        frontPageInfo: retData
    }).bind(this)
    console.log('componentDidMount',state);



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
