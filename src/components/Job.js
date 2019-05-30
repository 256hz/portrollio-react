import React from 'react'
import { Grid, List, Button, Icon } from 'semantic-ui-react';

const Job = (props) => {
  return(

    <Grid key={props.job.company}>

    <Grid.Row key={props.job.title} width={12} padded="vertically">
      {props.loggedIn
        ? <Button onClick={_ => props.startEdit(props.job, 'jobs')} icon="pencil square"/>
        : null}
        <Grid.Column width={2} className="image-circle-small-job" verticalAlign="middle">
            <img className="image-circle-small-img" src={props.job.img_url} alt={props.job.company} />
        </Grid.Column>

        <Grid.Column width={6}>
            <Grid.Row className="font-heading font-size-large">{props.job.title}</Grid.Row>
            <Grid.Row className="font-heading font-size-medium">{props.job.company}</Grid.Row>
            <Grid.Row className="font-heading font-size-small">
                {props.job.start_month} {props.job.start_year} - {props.job.end_month}
                {' '}{props.job.end_year ? props.job.end_year : 'Present'}
            </Grid.Row>
        </Grid.Column>
      </Grid.Row>

      <Grid.Row className="font_size_medium">{props.job.summary}</Grid.Row>
      <Grid.Row width={1}>
          <List bulleted>
          {props.job.responsibilities.map(res => {
              return <List.Item key={res} className="font_size_small">{res}</List.Item>
            })}
          </List>
          {props.loggedIn
            ? <Button type="button" onClick={_ => props.shiftOrder('jobs', props.job, false)}><Icon name="up arrow"/></Button>
            : null}
          {props.loggedIn
            ? <Button type="button" onClick={_ => props.shiftOrder('jobs', props.job, true)}><Icon name="down arrow"/></Button>
            : null}
      </Grid.Row>
    </Grid>
  )
}

export default Job
