import React, { Component } from 'react'
import { Icon, Menu, Segment, Sidebar, Form, Button, Container } from 'semantic-ui-react'

export default class SkillsEdit extends Component {

  constructor(props){
    super(props)
    this.state = {
      content:{
        id: -1
      }
    }
  }

  static getDerivedStateFromProps(props, state) {
    if (props.content.id !== state.content.id) {
      return {content: [...props.content]}
    }
  }

  handleChange = (ev, i) => {
    let contentCopy = [...this.state.content]
    contentCopy[i] = {
      ...contentCopy[i],
      [ev.target.name]: ev.target.value
    }
    this.setState({
      content: contentCopy
    })
  }

  render(){
    return(
      this.props.content.map((skill, i) => {
        return(
          <Form inverted onSubmit={() => this.props.handleSubmit(this.state.content[i])}>
            <Form.Field>
              <label>Skill</label>
              <input name="name" value={this.state.content[i].name} onChange={(ev) => this.handleChange(ev, i)}/>
            </Form.Field>
            <Form.Field>
              <label>Image URL</label>
              <input name="img_url" value={this.state.content[i].img_url} onChange={(ev) => this.handleChange(ev, i)}/>
            </Form.Field>
            <Button type='submit'>Submit</Button>
          </Form>
        )
      }
    ))
  }
}
