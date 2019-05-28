import React from 'react'
import SectionHeading from './SectionHeading'
import { Grid } from 'semantic-ui-react'

const AboutMe = (props) => {

  return (
    <Grid columns='equal'>
      <SectionHeading text="About Me"
        getContent={_ => props.startEdit(props.user, 'users')}
        editing={props.editing}
      />

      <Grid.Row columns={16}>
        <Grid.Column width={2}></Grid.Column>
        <Grid.Column width={12}>
          {props.user.bio}
        </Grid.Column>
        <Grid.Column width={2}></Grid.Column>
      </Grid.Row>
      <br />
    </Grid>
  )
}

export default AboutMe

      // <Grid.Row columns={1}>
      //   <Grid.Column className="heading font-size-large">
      //     Skills
      //   </Grid.Column>
      // </Grid.Row>
      // <br />
