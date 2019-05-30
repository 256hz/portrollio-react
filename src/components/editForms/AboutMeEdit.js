import React, { Component } from 'react'
import { Form, Button } from 'semantic-ui-react'

export default class AboutMeEdit extends Component {

  constructor(props){
    super(props)
    this.state = {
      content:{
        id: -1
      }
    }
  }

  static getDerivedStateFromProps(props, state) {
    // console.log(props.content)
    if (props.content.id !== state.content.id) {
      return {content: props.content}
    } else {
      return null
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
      <Form inverted onSubmit={() => this.props.handleSubmit(this.state.content)}>
        <Form.Field>
          <label>First Name</label>
          <input name="first_name" value={this.state.content.first_name} onChange={this.handleChange}/>
        </Form.Field>
        <Form.Field>
          <label>Last Name</label>
          <input name="last_name" value={this.state.content.last_name} onChange={this.handleChange}/>
        </Form.Field>
        <Form.Field>
          <label>Title</label>
          <input name="title" value={this.state.content.title} onChange={this.handleChange}/>
        </Form.Field>
        <Form.Field>
          <label>Email</label>
          <input name="email" value={this.state.content.email} onChange={this.handleChange}/>
        </Form.Field>
        <Form.Field>
          <label>Phone</label>
          <input name="phone" value={this.state.content.phone} onChange={this.handleChange}/>
        </Form.Field>
        <Form.Field>
          <label>Intro</label>
          <textarea name="intro" value={this.state.content.intro} onChange={this.handleChange}/>
        </Form.Field>
        <Form.Field>
        <label>About Me</label>
        <textarea name="bio" value={this.state.content.bio} onChange={this.handleChange}/>
        </Form.Field>
        <Form.Field>
          <label>Image URL</label>
          <input name="img_url" value={this.state.content.img_url} onChange={this.handleChange}/>
        </Form.Field>
        <Form.Field>
          <label>Color Theme</label>
          <select name="color_theme" value={this.state.content.color_theme} onChange={this.handleChange}>
              <option value="theme-default">Default</option>
              <option value="theme-autumn">Autumn</option>
              <option value="theme-ice">Ice</option>
              <option value="theme-berries">Berries</option>
          </select>
        </Form.Field>
        <Button type='submit'>Submit</Button>
      </Form>
    )
  }
}
