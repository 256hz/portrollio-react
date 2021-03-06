import React, { Component } from 'react'
import { Form, Button } from 'semantic-ui-react'

export default class GithubCreate extends Component {

  constructor(props){
    super(props)
    this.state = {
      content:{
        repo_owner: '',
        repo_name: '',
        img_url: '',
        summary: '',
        contribution: ''
      }
    }
  }

  handleChange = (ev) => {
    this.setState({
      content:{
        ...this.state.content,
        [ev.target.name]: ev.target.value
      }
    })
  }

  render(){
    return(
      <Form inverted onSubmit={() => this.props.handleCreate(this.state.content)}>
        <Form.Field>
          <label>Repo Owner</label>
          <input name="repo_owner" value={this.state.content.repo_owner} onChange={this.handleChange}/>
        </Form.Field>
        <Form.Field>
          <label>Repo Name</label>
          <input name="repo_name" value={this.state.content.repo_name} onChange={this.handleChange}/>
        </Form.Field>
        <Form.Field>
          <label>Summary</label>
          <input name="summary" value={this.state.content.summary} onChange={this.handleChange}/>
        </Form.Field>
        <Form.Field>
          <label>Contribution</label>
          <input name="contribution" value={this.state.content.contribution} onChange={this.handleChange}/>
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
