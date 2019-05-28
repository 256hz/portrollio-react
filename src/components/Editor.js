import React, { Component } from 'react'
import { Icon, Menu, Segment, Sidebar, Form, Button } from 'semantic-ui-react'
import AboutMeEdit from './editForms/AboutMeEdit'

export default class Editor extends Component {

  constructor(props){
    super(props)
    this.state = {
      content: {}
    }
  }

  render(){
    return(
      <Menu.Item disabled={this.props.disabled} as='a'>
        <AboutMeEdit content={this.props.content} handleSubmit={this.props.handleSubmit} />
      </Menu.Item>
    )
  }
}
