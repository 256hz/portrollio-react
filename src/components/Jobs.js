import React from 'react'
import { Grid, List } from 'semantic-ui-react';

const Jobs = (props) => {

  return(
    <Grid divided="vertically" padded="horizontally">

      <Grid.Row>
        <Grid.Column className="heading">
          <br />
          Jobs
        </Grid.Column>
      </Grid.Row>

      <Grid.Row columns={props.jobs.length} padded="horizontally">
        {props.jobs.map(job => {
          let imgStyle = {
            className: "image-circle-small-img",
            backgroundImage: `url(${job.img_url})`
          }
          return(
            <Grid.Column key={job.title}>

              <Grid.Row>
                <div className="image-circle-small">
                  <div style={imgStyle}/>
                </div>
                <div className="company-logo-name-container">
                  <h2 className="ui header">{job.title}</h2>
                  <h3 className="ui header">{job.company}</h3>
                </div>
              </Grid.Row>

              <h4 className="ui header">
                {job.start_month} {job.start_year} - {job.end_month}
                {' '}{job.end_year ? job.end_year : 'Present'}
              </h4>

              <p className="font_size_medium ui paragraph">{job.summary}</p>
              <List bulleted>
                {
                  job.responsibilities.map(res => {
                    return <List.Item key={res} className="font_size_small">{res}</List.Item>
                  })
                }
              </List>

            </Grid.Column>
          )}
        )}
        </Grid.Row>
    </Grid>
  )
}

export default Jobs
