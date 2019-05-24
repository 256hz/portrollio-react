import React from 'react'

let styles={
  display: 'inline'
}

const Githubs = (props) => {

  return(
    <div class="ui three column doubling stackable grid container">
      {props.githubs.map(github => {
        return(
          <div class="column">
            <h2 class="ui header" style={styles}>{github.repo_name}</h2>

            <p class="font_size_medium ui paragraph">{github.summary}</p>
          </div>
        )}
      )}
    </div>
  )
}

export default Githubs
