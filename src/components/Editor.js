import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import AboutMeEdit from './editForms/AboutMeEdit'
import SkillsEdit from './editForms/SkillsEdit'
import JobEdit from './editForms/JobEdit'
import GithubEdit from './editForms/GithubEdit'
import SkillsCreate from './createForms/SkillsCreate'
import JobsCreate from './createForms/JobsCreate'
import GithubsCreate from './createForms/GithubsCreate'

export default class Editor extends Component {

  constructor(props){
    super(props)
    this.state = {}
  }

  chooseContent = () => {
    if (this.props.editingType) {
      switch (this.props.editingType) {
        case "users":
          return <AboutMeEdit content={this.props.editing} handleSubmit={this.props.handleSubmit} />
          break
        case "skills":
          return <SkillsEdit content={this.props.editing} handleSubmit={this.props.handleSubmit}
          startEdit={this.props.startEdit} handleDelete={this.props.handleDelete}/>
          break
        case "jobs":
          return <JobEdit content={this.props.editing} handleSubmit={this.props.handleSubmit}
          startEdit={this.props.startEdit} handleDelete={this.props.handleDelete}/>
          break
        case "githubs":
          return <GithubEdit content={this.props.editing} handleSubmit={this.props.handleSubmit}
          startEdit={this.props.startEdit} handleDelete={this.props.handleDelete}/>
          break
        default:
          return null
      }
    } else if (this.props.creatingType) {
      switch (this.props.creatingType) {
        case "skills":
          return <SkillsCreate content={this.props.creating} handleCreate={this.props.handleCreate}/>
          break
        case "jobs":
          return <JobsCreate content={this.props.creating} handleCreate={this.props.handleCreate}/>
          break
        case "githubs":
          return <GithubsCreate content={this.props.creating} handleCreate={this.props.handleCreate}/>
          break
        default:
          return null
        }
    }
  }

  render(){
    return(
      <Menu.Item disabled={this.props.editorDisabled} as='a'>
        {this.chooseContent()}
      </Menu.Item>
    )
  }
}
