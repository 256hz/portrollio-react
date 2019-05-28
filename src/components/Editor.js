import React, { Component } from 'react'
import { Icon, Menu, Segment, Sidebar, Form, Button } from 'semantic-ui-react'
import AboutMeEdit from './editForms/AboutMeEdit'

export default class Editor extends Component {

  constructor(props){
    super(props)
    this.state = {}
  }

  chooseEditor = () => {
    switch (this.props.editingType) {
      case "users":
        console.log('here')
        return <AboutMeEdit content={this.props.editing} handleSubmit={this.props.handleSubmit} />
        break
      default:
        return null
    }
  }

  render(){
    return(
      <Menu.Item disabled={this.props.editorDisabled} as='a'>
        {this.chooseEditor()}
      </Menu.Item>
    )
  }
}
