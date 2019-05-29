import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import AboutMeEdit from './editForms/AboutMeEdit'
import SkillsEdit from './editForms/SkillsEdit'
import JobEdit from './editForms/JobEdit'
import GithubEdit from './editForms/GithubEdit'

export default class Editor extends Component {

  constructor(props){
    super(props)
    this.state = {}
  }

  chooseEditor = () => {
    switch (this.props.editingType) {
      case "users":
        return <AboutMeEdit content={this.props.editing} handleSubmit={this.props.handleSubmit} />
        break
      case "skills":
        return <SkillsEdit content={this.props.editing} handleSubmit={this.props.handleSubmit} startEdit={this.props.startEdit}/>
        break
      case "jobs":
        return <JobEdit content={this.props.editing} handleSubmit={this.props.handleSubmit} startEdit={this.props.startEdit}/>
        break
      case "githubs":
        return <GithubEdit content={this.props.editing} handleSubmit={this.props.handleSubmit} startEdit={this.props.startEdit}/>
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
