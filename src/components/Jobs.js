import React from 'react'

const Jobs = (props) => {

  return(
    <div className="grayBG">
    <br></br>
      <div className="column heading">
        Jobs
      </div>
      <br></br>
      <br></br>
      <div className="ui four column doubling stackable grid container">
        {props.jobs.map(job => {
          return(
            <div key={job.title} className="column">
              <div>
                <div className="image-circle-small">
                  <img className="image-circle-small-img" src={job.img_url} alt={job.company} />
                </div>
                <div className="company-logo-name-container">
                  <h2 className="ui header">{job.title}</h2>
                  <h3 className="ui header">{job.company}</h3>
                </div>
              </div>
              <h4 className="ui header">
                {job.start_month} {job.start_year} - {job.end_month}
                {' '}{job.end_year ? job.end_year : 'Present'}
              </h4>
              <p className="font_size_medium ui paragraph">{job.summary}</p>
              <div className="ui bulleted list ">
                {
                  job.responsibilities.map(res => {
                    return <div key={res} className="item font_size_small">{res}</div>
                  })
                }
              </div>
            </div>
          )}
        )}
      </div>
    </div>
  )
}

export default Jobs
