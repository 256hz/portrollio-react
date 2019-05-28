import React from 'react'
import {Grid} from 'semantic-ui-react'
import SectionHeading from './SectionHeading'

const parsePhoneNum = (num) => {
  if (num) {
    return `(${num.slice(0,3)}) ${num.slice(3,6)} ${num.slice(6)}`
  }
}

const Contact = (props) => {

    return (
      <Grid columns="equal">
        <SectionHeading text="Contact" 
          getContent={_ => props.getContent(props.user, '#contact')} 
          editing={props.editing}
        />
        <Grid.Row>
              <Grid.Column textAlign="right">
                <a href={"mailto:"+props.user.email}>{props.user.email}</a>
              </Grid.Column>
              <Grid.Column textAlign="left">
                <a href={"tel: +1"+ props.user.phone}>+1 {parsePhoneNum(props.user.phone)}</a>
              </Grid.Column>
        </Grid.Row>
      </Grid>
    )
}

export default Contact
