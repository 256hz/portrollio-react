import React, { Component } from 'react'
import { Form, Button } from 'semantic-ui-react'

export default class JobEdit extends Component {

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
      return {content: props.content}
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

  handleNestedChange = (ev, i) => {
    let copy = this.state.content[ev.target.name]
    copy[i] = ev.target.value
    this.setState({
      content:{
        ...this.state.content,
        [ev.target.name]: copy
      }
    })
  }

  render(){
    return(
      <Form inverted onSubmit={() => this.props.handleSubmit(this.state.content)}>
        <Form.Field>
          <label>Company</label>
          <input name="company" value={this.state.content.company} onChange={this.handleChange}/>
        </Form.Field>
        <Form.Field>
          <label>Title</label>
          <input name="title" value={this.state.content.title} onChange={this.handleChange}/>
        </Form.Field>
        <Form.Field>
          <label>Summary</label>
          <input name="summary" value={this.state.content.summary} onChange={this.handleChange}/>
        </Form.Field>
        <Form.Group>
          <Form.Field>
            <label>Start Month</label>
            <select name="start_month" value={this.state.content.start_month} onChange={this.handleChange}>
              <option value="Jan">January</option>
              <option value="Feb">February</option>
              <option value="Mar">March</option>
              <option value="Apr">April</option>
              <option value="May">May</option>
              <option value="Jun">June</option>
              <option value="Jul">July</option>
              <option value="Aug">August</option>
              <option value="Sep">September</option>
              <option value="Oct">October</option>
              <option value="Nov">November</option>
              <option value="Dec">December</option>
            </select>
          </Form.Field>
          <Form.Field>
            <label>Start Year</label>
            <input type="number" name="start_year" step="1" value={this.state.content.start_year} onChange={this.handleChange}/>
          </Form.Field>
        </Form.Group>

        <Form.Group>
          <Form.Field>
            <label>End Month</label>
            <select name="end_month" value={this.state.content.end_month} onChange={this.handleChange}>
              <option value='nil'>None</option>
              <option value="Jan">January</option>
              <option value="Feb">February</option>
              <option value="Mar">March</option>
              <option value="Apr">April</option>
              <option value="May">May</option>
              <option value="Jun">June</option>
              <option value="Jul">July</option>
              <option value="Aug">August</option>
              <option value="Sep">September</option>
              <option value="Oct">October</option>
              <option value="Nov">November</option>
              <option value="Dec">December</option>
            </select>
          </Form.Field>
          <Form.Field>
            <label>End Year</label>
            <input type="number" name="end_year" step="1" value={this.state.content.end_year} onChange={this.handleChange}/>
          </Form.Field>
        </Form.Group>

        <label>Responsibilities</label>
        {this.state.content.responsibilities.map((res, i) => {
          return <Form.Field key={i}>
            <input name="responsibilities" value={this.state.content.responsibilities[i]} onChange={(ev) => this.handleNestedChange(ev, i)}/>
          </Form.Field>
        })}
        <label>Skills Used</label>
        {this.state.content.skills_used.map((res, i) => {
          return <Form.Field key={i}>
            <input name="skills_used" value={this.state.content.skills_used[i]} onChange={(ev) => this.handleNestedChange(ev, i)}/>
          </Form.Field>
        })}

        <Form.Field>
          <label>Image URL</label>
          <input name="img_url" value={this.state.content.img_url} onChange={this.handleChange}/>
        </Form.Field>

        <Button type='submit'>Submit</Button>
      </Form>
    )
  }
}
