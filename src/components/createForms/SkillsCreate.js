import React, { Component } from 'react'
import { Form, Button, Header } from 'semantic-ui-react'

export default class SkillsCreate extends Component {

  constructor(props){
    super(props)
    this.state = {
      content:{
        name: '',
        img_url: ''
      }
    }
  }

  handleChange = ev => {
    this.setState({
      content: {
        ...this.state.content,
        [ev.target.name]: ev.target.value
      }
    })
  }

  render(){
    return(
      <Form inverted onSubmit={() => this.props.handleCreate(this.state.content)}>
      <Header inverted size='large'>Add New Skill</Header>
        <Form.Field>
          <label>Skill</label>
          <input name="name" value={this.state.content.name} onChange={this.handleChange}/>
        </Form.Field>
        <Form.Field>
          <label>Image URL</label>
          <input name="img_url" value={this.state.content.img_url} onChange={this.handleChange}/>
        </Form.Field>
        <Button type='submit'>Submit</Button>
      </Form>
    )
  }
}
