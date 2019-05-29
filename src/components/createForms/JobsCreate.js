import React, { Component } from 'react'
import { Form, Button, Icon } from 'semantic-ui-react'

const INITIALSTATE = {
  content:{
    company: '',
    title: '',
    summary: '',
    start_month: '',
    start_year: '',
    end_month: 'jan',
    end_year: '',
    responsibilities: [''],
    skills_used: [''],
    img_url: ''
  }
}

export default class JobsCreate extends Component {

  constructor(props){
    super(props)
    this.state = INITIALSTATE
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

  handleAddSkill = () => {
    let skillsCopy = this.state.content.skills_used
    skillsCopy.push('')
    this.setState({
      content:{
        ...this.state.content,
        skills_used: skillsCopy
      }
    })
  }

  handleRemoveSkill = (i) => {
    let skillCopy = this.state.content.skills_used
    skillCopy.splice(i,1)
    this.setState({
      content:{
        ...this.state.content,
        responsibilities: skillCopy
      }
    })
  }

  handleAddResp = () => {
    let resCopy = this.state.content.responsibilities
    resCopy.push('')
    this.setState({
      content:{
        ...this.state.content,
        responsibilities: resCopy
      }
    })
  }

  handleRemoveResp = (i) => {
    let resCopy = this.state.content.responsibilities
    resCopy.splice(i,1)
    this.setState({
      content:{
        ...this.state.content,
        responsibilities: resCopy
      }
    })
  }

  handleCreate = () => {
    this.props.handleCreate(this.state.content)
    this.setState({
      content: {
        ...INITIALSTATE.content,
        responsibilities: [''],
        skills_used: ['']
      }
    })
  }

  render(){
    return(
      <Form inverted onSubmit={() => this.handleCreate(this.state.content)}>
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

        <Form.Field>
          <label>Responsibilities</label>
        </Form.Field>
        {this.state.content.responsibilities.map((res, i) => {
          return (
            <Form.Group key={i}>
              <input name="responsibilities" value={this.state.content.responsibilities[i]} onChange={(ev) => this.handleNestedChange(ev, i)}/>
              <Button negative type="button" onClick={() => this.handleRemoveResp(i)}> - </Button>
            </Form.Group>
          )
        })}
        <Button type="button" onClick={this.handleAddResp}>Add New Responsibility</Button>
        <br></br>

        <Form.Field>
          <label>Skills Used</label>
        </Form.Field>
        {this.state.content.skills_used.map((res, i) => {
          return (
            <Form.Group key={i}>
              <input name="skills_used" value={this.state.content.skills_used[i]} onChange={(ev) => this.handleNestedChange(ev, i)}/>
              <Button negative type="button" onClick={() => this.handleRemoveSkill(i)}> - </Button>
            </Form.Group>
          )
        })}
        <Button type="button" onClick={this.handleAddSkill}>Add New Skill</Button>

        <Form.Field>
          <label>Image URL</label>
          <input name="img_url" value={this.state.content.img_url} onChange={this.handleChange}/>
        </Form.Field>

        <Button type='submit'>Submit</Button>
      </Form>
    )
  }
}
