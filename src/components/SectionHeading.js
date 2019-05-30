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

      <Grid.Row className={`${props.user.color_theme}-heading`}>
        <Grid.Column width={2} textAlign="center" verticalAlign="middle">
          <Button.Group >
            {(props.sectionEdit && props.loggedIn && localStorage.getItem('jwt') !== '')
              ? <Button icon onClick={props.startEdit}>
                  <Icon name ="edit" />
                </Button>
              : null}
              {(props.sectionNew && props.loggedIn && localStorage.getItem('jwt') !== '')
              ? <Button icon onClick={props.startNew} >
                  <Icon name="add circle"/>
                </Button>
              : null}
          </Button.Group>
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
