import React from 'react'
import SectionHeading from './SectionHeading'
import Job from './Job'
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
          {jobs.map( (job,index) => <Job key={index} job={job} loggedIn={props.loggedIn}
            shiftOrder={props.shiftOrder} startEdit={props.startEdit}/>)}
        </Grid.Column>

        <Grid.Column width={2}></Grid.Column>

      </Grid.Row>
    </Grid>
  )
}

export default Jobs
