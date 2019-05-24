import React from 'react'

let styles={
  display: 'inline'
}

const Jobs = (props) => {

  return(
    <div class="ui four column doubling stackable grid container">
      {props.jobs.map(job => {
        return(
          <div class="column">
            <h3 class="ui header" style={styles}>{job.title}</h3> - <h4 class="ui header" style={styles}>{job.company}</h4>
            
          </div>
        )}
      )}
    </div>
  )
}

export default Jobs
