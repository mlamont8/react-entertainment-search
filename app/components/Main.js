var React = require('react')
var Header = require('./Header')
var styles = require('../styles')
var Footer = require('../containers/FooterContainer')


class Main extends React.Component {
  render() {
    return(
      <div className="fullContain" style={styles.fullSite}>
        <Header />
      {this.props.children}
      <Footer />
    </div>
    )
  }
}


module.exports = Main;
