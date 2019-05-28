import React, { Component } from 'react'
import { Icon, Menu, Segment, Sidebar, Form, Button } from 'semantic-ui-react'

export default class COMPONENT_NAME extends Component {

  constructor(props){
    super(props)
    this.state = {

    }
  }

  // static getDerivedStatesFromProps(props, state) {
  //   if (props.content.id !== state.content.id) {
  //     return props.content
  //   }
  // }
  //
  // handleChange = ev => {
  //   console.log('change');
  //   this.setState({
  //     content:{
  //       ...this.state.content,
  //       [ev.target.name]: ev.target.value
  //     }
  //   })
  // }

  render(){
    return(
      <Form inverted onSubmit={this.props.handleSubmit}>
        <Form.Field>
          <label>First Name</label>
          <input name="first_name" defaultValue={this.props.content.first_name} />
        </Form.Field>
        <Form.Field>
          <label>Last Name</label>
          <input name="last_name" defaultValue={this.props.content.last_name} />
        </Form.Field>
        <Form.Field>
          <label>Email</label>
          <input name="email" defaultValue={this.props.content.email} />
        </Form.Field>
        <Form.Field>
          <label>Phone</label>
          <input name="phone" defaultValue={this.props.content.phone} />
        </Form.Field>
        <Button type='submit'>Submit</Button>
      </Form>
    )
  }
}
