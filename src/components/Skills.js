import React from 'react'
import {Grid, Popup, Image} from 'semantic-ui-react'
import SectionHeading from './SectionHeading'

const Skills = (props) => {
  return (
  <Grid columns='equal'>
    <SectionHeading text="Primary Skillsets"
      startEdit={_ => props.startEdit(props.skills, 'skills')}
      startNew={_ => props.startNew('skills')}
      editing={props.editing}
      loggedIn={props.loggedIn}
      sectionEdit={true}
      sectionNew={true}
    />
      <Grid.Row columns={props.skills.length+8} padded="horizontally"
          verticalAlign="middle" textAlign="center">
        <Grid.Column width={2}></Grid.Column>
        {props.skills.map( skill => {
          return <Grid.Column key={skill.name}>
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
        <Grid.Column width={2}></Grid.Column>
      </Grid.Row>
    <br />

  </Grid>
  )
}

export default Skills
