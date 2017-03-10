var React = require('react')
var styles = require('../styles')
var img = require('../images/poweredbytmdb.png')


var FooterContainer = React.createClass({

  render: function(){
    return(
      <footer className="page-footer" style={styles.fullSite}>
<div className="container">
  <div className="row">
    <div className="col m4 s12 footerArea right">

     <img className="poweredBy responsive-img black" style={{paddingTop: '10px'}} src={img} />

    </div>

    <div className="col m6 s12 left">
    <span className="grey-text">This product uses the TMDb API but is not endorsed or certified by TMDb.</span>
  <p className="grey-text text-lighten-4" style={{marginTop: '40px'}} > © 2017 Copyright M Lamont Taylor</p>


  </div>
</div>
    </div>
</footer>
    )
  }
})

module.exports = FooterContainer
