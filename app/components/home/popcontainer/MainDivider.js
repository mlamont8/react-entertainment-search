var React = require('react')
var styles = require('../../../styles')


var MainDivider = function(){

    return (
        <div>
          <span className="col l3 red darken-4 white-text" style={styles.titleBlock}>
            <span style={styles.mainTitle}>
                WHAT'S OUT

            </span>
          
        </span>
        <div className="divide col s12 grey darken-4" style={{height: '25px'}} />
      </div>
    )

}

module.exports = MainDivider;
