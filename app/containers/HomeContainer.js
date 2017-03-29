import React from 'react';
import MainDivider from '../components/home/MainDivider';
import apiHelper from '../utils/apiHelper';

export default class HomeContainer extends React.Component {

constructor(props) {
  super(props);
  this.state = {
    backgroundImg: '',
    imgNum: 0
  }
}

componentDidMount() {
  apiHelper.getMovieInfo()
  .then(function (data){
    // generate a random image from the array between 1 and 10
    var randImage=Math.floor(Math.random()*11)
    //put image link portion in state
    this.setState({
      backgroundImg: data[randImage].backdrop_path
    })
  }.bind(this)
  )
  }

  render() {
    let backgroundUrl = {
      backgroundImage : "url(https://image.tmdb.org/t/p/w1280" + this.state.backgroundImg +")"
    }
    return (

            <div className = "frontBackground" style = {backgroundUrl}>
              <MainDivider />

            </div>
    );
  }

}
