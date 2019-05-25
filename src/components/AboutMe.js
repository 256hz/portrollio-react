import React from 'react'
import { Grid } from 'semantic-ui-react'

const AboutMe = (props) => {

  return (
    <Grid divided='vertically'>
    
      <Grid.Row columns={1}>
        <Grid.Column className="heading">
          <br />
          About Me
        </Grid.Column>
      </Grid.Row>
      <br />
      <Grid.Row columns={16}>
        <Grid.Column width={4}>{' '}</Grid.Column>
        <Grid.Column width={8}>
          {props.user.bio}
        </Grid.Column>
        <Grid.Column width={4}>{' '}</Grid.Column>
      </Grid.Row>
    </Grid>
  )
}

export default AboutMe
