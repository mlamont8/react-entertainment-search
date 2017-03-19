var React = require('react')
var Header = require('./Header')
var Footer = require('../containers/FooterContainer')
var Grid = require('react-bootstrap').Grid;


class Main extends React.Component {
  render() {
    return(
      <div className="fullContain fullSite">
        <Header />
      {this.props.children}
      <Footer />
    </div>
    )
  }
}


module.exports = Main;
