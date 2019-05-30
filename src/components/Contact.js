import React from 'react'
import {Grid, Icon} from 'semantic-ui-react'
import {Link} from 'react-router-dom'
import SectionHeading from './SectionHeading'

const parsePhoneNum = (num) => {
  if (num) {
    return `(${num.slice(0,3)}) ${num.slice(3,6)} ${num.slice(6)}`
  }
}

const Contact = (props) => {

    return (

      <Grid columns={16}>
        <Grid.Column width={16}>{' '}</Grid.Column>

        <Grid.Column width={16} textAlign="center">
          <Link to="/#nav"><Icon name="triangle up"/></Link>
        </Grid.Column>

        <Grid.Row className="heading-bg">
          <Grid.Column width={2} textAlign="center" verticalAlign="middle">
          </Grid.Column>

          <Grid.Column width={2} >
            <div>
              <span className="font-size-large heading-font">Contact</span>
            </div>
          </Grid.Column>
          <Grid.Column width={4} textAlign="right">
            <a href={"mailto:"+props.user.email}>{props.user.email}</a>
          </Grid.Column>
          <Grid.Column width={4} textAlign="left">
            <a href={"tel: +1"+ props.user.phone}>+1 {parsePhoneNum(props.user.phone)}</a>
          </Grid.Column>

          <Grid.Column width={16}>{' '}</Grid.Column>
          <Grid.Column width={16}>{' '}</Grid.Column>
        </Grid.Row>
      </Grid>
    )
}

export default Contact
