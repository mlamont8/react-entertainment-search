import React from 'react';
import {Image} from 'react-bootstrap';


class DetailPoster extends React.Component {

  render() {
    return (
      <Image responsive className="backImage" style={{overflow: 'hidden'}} src={'https://image.tmdb.org/t/p/w1280' + this.props.image} />
    );
  }

}

DetailPoster.propTypes = {
    image: React.PropTypes.string
};

export default DetailPoster;
