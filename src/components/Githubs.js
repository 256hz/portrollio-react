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
      />
      <Grid.Row>
        <Card.Group>
          <br />
          {githubs.map( (github, index) => {
            return <Grid.Column key={github.repo_name + index}>
              <Github github={github} startEdit={props.startEdit} 
                      loggedIn={props.loggedIn} shiftOrder={props.shiftOrder}/>
            </Grid.Column>
          })}
        </Card.Group>
      </Grid.Row>
    <br />
    </Grid>
  )
}

export default Githubs
