import React from 'react'
import {Grid, Popup, Image, Button, Icon} from 'semantic-ui-react'
import SectionHeading from './SectionHeading'

const Skills = (props) => {
  let skills = props.skills.sort( (a,b) => a.order_id - b.order_id )

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
      <Grid.Row columns={props.skills.length*2} padded="horizontally"
          verticalAlign="middle" textAlign="center">
        <Grid.Column width={2}></Grid.Column>

        {skills.map( skill => {
          return( <Grid.Column key={skill.name}>
            <Grid.Row>
              {props.loggedIn
                ? <Button type="button" onClick={_ => props.shiftOrder('skills', skill, false)}><Icon name="left arrow"/></Button>
                : null}
              <Popup key={skill.name} header={skill.name}
                trigger={
                  <Image src={skill.img_url} className="image-circle-small-skill"
                  verticalAlign="middle" size="tiny" circular/>
                }
                position="bottom center"
              />
            </Grid.Row>
              {props.loggedIn
                ? <Button type="button" onClick={_ => props.shiftOrder('skills', skill, true)}><Icon name="right arrow"/></Button>
                : null}
          </Grid.Column>
        )})}

        <Grid.Column width={2}></Grid.Column>
      </Grid.Row>
    <br />

  </Grid>
  )
}

export default Skills
