import React from 'react'
import {Grid, Popup, Image} from 'semantic-ui-react'

const Skills = (props) => {

  return (<Grid columns='equal' divided='vertically'>
    
    <Grid.Row columns={1}>
      <Grid.Column className="heading font-size-large">
        <br />
        Skillsets
      </Grid.Column>
    </Grid.Row>
    
      <Grid.Row columns={props.skills.length+6} padded="horizontally"
          verticalAlign="middle" textAlign="center" container>
        <Grid.Column width={3}></Grid.Column>
        {props.skills.map( skill => {
          return <Grid.Column>
            <Grid.Row>
              <Popup
                key={skill.name} header={skill.name}
                trigger={
                  <Image src={skill.img_url} className="image-circle-small-skill"
                  verticalAlign="middle" size="tiny" circular/>
                }
                position="bottom center"
              />
            </Grid.Row>
          </Grid.Column>
        })}
        <Grid.Column width={3}></Grid.Column>
      </Grid.Row>
    <br />

  </Grid>
  )
}

export default Skills