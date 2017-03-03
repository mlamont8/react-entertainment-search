var React = require('react')

var RadioButtons = function(){

  return(
    <div>
    <span>
      <input name="searchType" type="radio" id="movRadio" value='movie' />
      <label for="movRadio">Movies</label>
    </span>
    <span>
      <input name="searchType" type="radio" id="tvRadio" value='tv' />
      <label for="movRadio">TV Shows</label>
    </span>
  </div>
  )

}

module.exports = RadioButtons;
