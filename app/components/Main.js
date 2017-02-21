var React = require('react')
var Header = require('./Header')


class Main extends React.Component {
  render() {
    return(
      <div>
        <Header />
      {this.props.children}
    </div>
    )
  }
}


module.exports = Main;
