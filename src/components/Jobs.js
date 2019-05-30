import React from 'react'
import SectionHeading from './SectionHeading'
import { Grid, List, Button, Icon } from 'semantic-ui-react';

const Jobs = (props) => {
  let jobs = props.jobs.sort( (a,b) => a.order_id - b.order_id )// let colors = ['orange', 'yellow', 'green', 'teal']
  return(
    <Grid columns="equal">
      <SectionHeading text="Positions"
        startEdit={_ => props.startEdit(props.jobs, '#jobs')}
        startNew={_ => props.startNew('jobs')}
        editing={props.editing}
        loggedIn={props.loggedIn}
        sectionEdit={false}
        sectionNew={true}
      />


      <Grid.Row columns={16} padded="horizontally">
        <Grid.Column width={2}></Grid.Column>
        <Grid.Column width={12}>
          {jobs.map( (job,index) => {
            return(
            
            <Grid key={job.company}>

            <Grid.Row key={job.title} width={12} padded="vertically">
              {props.loggedIn
                ? <Button onClick={_ => props.startEdit(job, 'jobs')} icon="pencil square"/>
                : null}
                <Grid.Column width={2} className="image-circle-small-job" verticalAlign="middle">
                    <img className="image-circle-small-img" src={job.img_url} alt={job.company} />
                </Grid.Column>

                <Grid.Column width={6}>
                    <Grid.Row className="font-heading font-size-large">{job.title}</Grid.Row>
                    <Grid.Row className="font-heading font-size-medium">{job.company}</Grid.Row>
                    <Grid.Row className="font-heading font-size-small">
                        {job.start_month} {job.start_year} - {job.end_month}
                        {' '}{job.end_year ? job.end_year : 'Present'}
                    </Grid.Row>
                </Grid.Column>
              </Grid.Row>

              <Grid.Row className="font_size_medium">{job.summary}</Grid.Row>
              <Grid.Row width={1}>
                  <List bulleted>
                  {job.responsibilities.map(res => {
                      return <List.Item key={res} className="font_size_small">{res}</List.Item>
                    })}
                  </List>
                  {props.loggedIn 
                    ? <Button type="button" onClick={_ => props.shiftOrder('jobs', job, false)}><Icon name="up arrow"/></Button>
                    : null}    
                  {props.loggedIn
                    ? <Button type="button" onClick={_ => props.shiftOrder('jobs', job, true)}><Icon name="down arrow"/></Button>     
                    : null}
              </Grid.Row>
            </Grid>
            )
          })}
        </Grid.Column>

        <Grid.Column width={2}></Grid.Column>

      </Grid.Row>
    </Grid>
  )
}

export default Jobs
