var React = require('react')
var apiHelper = require('../utils/apiHelper')
var DetailPoster = require('../components/detail/detailPoster')
var DetailTitle = require('../components/detail/detailTitle')
var BoxImage = require('../components/detail/boxImage')
var DetailInfo = require('../components/detail/detailInfo')
var Row = require('react-bootstrap').Row



var DetailContainer = React.createClass({

getInitialState: function() {
  return {
    type: this.props.params.type,
    id: this.props.params.id,
    info: ''

  }
},



componentDidMount: function (){
  var type = this.state.type
  var id = this.state.id

  apiHelper.getDetailInfo(type,id)
  .then (function(data){

    // Check if type is TV
    if (type === 'tv'){
        this.setState({
        info: data,
        title: data.name


      })
    }else{
      // Type is Movie
      this.setState({
      info: data,
      title: data.title

    })
  }

  }.bind(this)
)
},

  render: function(){

    return (
    <main style={{paddingTop:'50px'}}>



          <Row>
              <BoxImage path= {this.state.info.poster_path} />


                <DetailInfo
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



    )
  }

})
module.exports = DetailContainer;
