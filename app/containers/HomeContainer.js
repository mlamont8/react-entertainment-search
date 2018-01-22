import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchFrontData } from '../actions'
import MainDivider from '../components/home/MainDivider';
import apiHelper from '../utils/apiHelper';
import Loader from '../components/Loader';
import Footer from './FooterContainer';

 class HomeContainer extends React.Component {


componentDidMount() {
    this.props.data();
  }


  render() {
    let backgroundUrl = {
      backgroundImage : "url(https://image.tmdb.org/t/p/w1280" + this.props.path.url +")"
    }
    return this.props.path.isLoading === true
    ? <Loader />
    :
          <div>
            <div className = "frontBackground" style = {backgroundUrl}>
              <MainDivider />
            </div>
          <Footer />
        </div>

  }

}

const mapStateToProps = state => {
  return {
    path: state.front
  }
}

const mapDispatchToProps = dispatch => {
  return {
    data: () => {
      dispatch(fetchFrontData())
    }
  }
}

export default connect (
  mapStateToProps,
  mapDispatchToProps)
(HomeContainer)
