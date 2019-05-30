import React from 'react'
import {Grid, Icon, Button} from 'semantic-ui-react'
import {Link} from 'react-router-dom'

const SectionHeading = (props) => {

  return (
    <Grid columns={16}>
      <Grid.Column width={16}>{' '}</Grid.Column>
      <Grid.Column width={16} textAlign="center">
          <Link to="/#nav"><Icon name="triangle up"/></Link>
      </Grid.Column>

      <Grid.Row className="heading-bg">
        <Grid.Column width={2} textAlign="center" verticalAlign="middle">
            {(props.sectionEdit && props.loggedIn && localStorage.getItem('jwt') !== '')
              ? <Button onClick={props.startEdit} icon="pencil square"/>
              : null}
              {(props.sectionNew && props.loggedIn && localStorage.getItem('jwt') !== '')
              ? <Button onClick={props.startNew} icon="clone outline"/>
              : null}
        </Grid.Column>

        <Grid.Column width={14}>
          <div>
            <span className="font-size-large heading-font">{props.text}</span>
          </div>
        </Grid.Column>
      </Grid.Row>

      <Grid.Column width={16}>{' '}</Grid.Column>
      <Grid.Column width={16}>{' '}</Grid.Column>

    </Grid>
  )
  }

export default SectionHeading
        // <Grid.Row className="heading-font font-size-large">
        //     <br />
        //     {props.text}
        // </Grid.Row>
