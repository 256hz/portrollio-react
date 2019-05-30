import React from 'react'
import Github from './Github'
import SectionHeading from './SectionHeading'
import {Grid, Card} from 'semantic-ui-react'


const Githubs = (props) => {
  let githubs = props.githubs.sort( (a,b) => a.order_id - b.order_id )
  return (
    <Grid columns="equal" divided='vertically'>
      <SectionHeading text="Featured Repos"
        getContent={ _ => props.getContent(props.githubs)}
        editing={props.editing}
        loggedIn={props.loggedIn}
        sectionEdit={false}
        sectionNew={true}
        startNew={_ => props.startNew('githubs')}
        user={props.user}
      />
      <Grid.Row>
        <Card.Group centered>
          <br />
          {githubs.map( (github, index) => {
            return <Github github={github} startEdit={props.startEdit}
                      loggedIn={props.loggedIn} shiftOrder={props.shiftOrder}/>
          })}
        </Card.Group>
      </Grid.Row>
    <br />
    </Grid>
  )
}

export default Githubs
