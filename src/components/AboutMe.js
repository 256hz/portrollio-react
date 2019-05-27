import React from 'react'
import { Grid } from 'semantic-ui-react'

const AboutMe = (props) => {

  return (<Grid columns='equal' divided='vertically'>

      <Grid.Row columns={1}>
        <Grid.Column className="heading font-size-large">
          <br />
          About Me
        </Grid.Column>
      </Grid.Row>
      <br />
      
      <Grid.Row columns={16}>
        <Grid.Column width={3} >                 </Grid.Column>
        <Grid.Column width={10}>{props.user.bio} </Grid.Column>
        <Grid.Column width={3} >                 </Grid.Column>
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