import React from 'react'
import { Grid } from 'semantic-ui-react'

const AboutMe = (props) => {

  return (
    <Grid>
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