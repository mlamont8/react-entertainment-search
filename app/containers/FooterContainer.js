var React = require('react')
var styles = require('../styles')


var FooterContainer = React.createClass({

  render: function(){
    return(
      <footer className="page-footer" style={styles.fullSite}>
<div className="container">
  <div className="row">
    <div className="col l4 s12 footerArea right">

    {/* <img className="poweredBy responsive-img" src={require('../images/poweredbytmdb.png')} /> */}

    </div>
  </div>
</div>
<div className="footer-copyright">
  <div className="container">
  © 2016 Copyright M Lamont Taylor
  <a className="grey-text text-lighten-4 right" href="#!"></a>
  </div>
</div>
</footer>
    )
  }
})

module.exports = FooterContainer
