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
            <h2 class="ui header" style={styles}>{job.title}</h2> - <h3 class="ui header" style={styles}>{job.company}</h3>
<<<<<<< HEAD
            <h4 class="ui header">
              {job.start_month} {job.start_year} - {job.end_month} 
              {' '}{job.end_year ? job.end_year : 'Present'}
            </h4>
            <p class="ui paragraph">{job.summary}</p>
=======
            <h4 class="ui header">{job.start_month} {job.start_year} - {job.end_month} {job.end_year}</h4>
            <p class="font_size_medium">{job.summary}</p>
>>>>>>> doug3
            <div class="ui bulleted list ">
              {
                job.responsibilities.map(res => {
                  return <div class="item font_size_small">{res}</div>
                })
              }
            </div>
          </div>
        )}
      )}
    </div>
  )
}

export default Jobs
