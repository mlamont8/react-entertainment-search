var React = require('react')
var Header = require('./Header')
var Footer = require('../containers/FooterContainer')
var Grid = require('react-bootstrap').Grid;


class Main extends React.Component {
  render() {
    return(
      <main className="fullContain fullSite">
        <Header />
      {this.props.children}
      <Footer />
    </main>
    )
  }
}


module.exports = Main;
