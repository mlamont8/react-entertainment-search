
import React from 'react';
import apiHelper from '../utils/apiHelper';
import {Row} from 'react-bootstrap';
import BoxImage from '../components/detail/BoxImage';
import DetailInfo from '../components/detail/DetailInfo';
import DetailPoster from '../components/detail/DetailPoster';


export default class DetailContainer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      type: this.props.params.type,
      id: this.props.params.id,
      info: '',
      title: ''
    }
  }

  componentDidMount() {
    let type = this.state.type
    let id = this.state.id

    apiHelper.getDetailInfo(type,id)
    .then (function(data){

      // Check if type is TV
      if (type === 'tv'){
          this.setState({
          info: data,
          title: data.name


        })
      }else{
        // Or if Type is Movie
        this.setState({
        info: data,
        title: data.title

      })
    }

    }.bind(this)
  )
  }

  render() {
    return (
          <main style={{paddingTop:'50px'}}>

                <Row>

                    <BoxImage path= {this.state.info.poster_path} />

                      <DetailInfo
                        title={this.state.title}
                        tag= {this.state.info.tagline}
                        date={this.state.info.release_date}
                        overview={this.state.info.overview}
                          rating={this.state.info.vote_average}
                          homepage={this.state.info.homepage}
                        />

              </Row>
              <Row style={{marginTop:'10px'}}>

                <DetailPoster
                image = {this.state.info.backdrop_path} />

              </Row>

      </main>

    );
  }

}
