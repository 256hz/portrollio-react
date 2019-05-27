import React from 'react'
import { Grid, List } from 'semantic-ui-react';

const Jobs = (props) => {
  // let colors = ['orange', 'yellow', 'green', 'teal']
  return(
    <Grid divided="vertically" padded="horizontally">

      <Grid.Row>
        <Grid.Column className="heading font-size-large">
          <br />
          Jobs
        </Grid.Column>
      </Grid.Row>

      <Grid.Row columns="equal" padded="horizontally">
        {props.jobs.map( job => {
          return(
            <Grid.Column key={job.title} padded="vertically">

              <Grid.Row>
                
                <Grid.Column className="image-circle-small-job middle aligned">
                  <img className="image-circle-small-img" src={job.img_url} alt={job.company} />
                </Grid.Column>
                <Grid.Column className="middle aligned">
                  <Grid.Row className="heading font-size-large">{job.title}</Grid.Row>
                  <Grid.Row className="heading font-size-medium">{job.company}</Grid.Row>
                  <Grid.Row className="heading font-size-small">
                    {job.start_month} {job.start_year} - {job.end_month}
                    {' '}{job.end_year ? job.end_year : 'Present'}
                  </Grid.Row>
                </Grid.Column>
              </Grid.Row>

              <Grid.Row className="font_size_medium">{job.summary}</Grid.Row>
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
