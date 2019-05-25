import React, {Component} from 'react';
import Nav from './Nav'
import NamePicIntro from './NamePicIntro'
import AboutMe from './AboutMe'
import Contact from './Contact'
import Jobs from './Jobs'
import { Grid } from 'semantic-ui-react'

const apiURL = 'http://localhost:3000/api/v1/'
 // keys of the default state are the api pathnames
 // anchors.pop(2) //so it doesn't try to fetch users & currentUser
 // to this list and it will automatically fetch them
 // as long as we keep users & currentUser at the end, we can add states
 const DEFAULT_STATE = {
   honors: [],
   interests: [],
   jobs: [],
   links: [],
   skills: [],
   users: [],
   currentUser: {
  }
}
let keys = Object.keys(DEFAULT_STATE)
let anchors = keys.slice(0, keys.length-2)

class Content extends Component {
  constructor() {
    super()
    this.state = DEFAULT_STATE
  }

  componentDidMount() {

    anchors.forEach( f => {
      fetch( apiURL + f )
      .then( res => res.json() )
      .then( json => this.setState({[f]: json}))
    })

    fetch( apiURL + 'users')
    .then( res => res.json() )
    .then( users => {
      this.setState({users})
      this.setState({currentUser: users[0]})
    })
  }

  render() {
    return (
      <Grid className="App ui">
        <Grid.Row className="grayBG">
          <Grid.Column>
            <Nav handleEdit={this.props.handleEdit}/>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>
            <NamePicIntro user={this.state.currentUser}/>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row className="">
          <Grid.Column>
            <AboutMe user={this.state.currentUser}/>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row className="grayBG">
          <Grid.Column>
            <Jobs jobs={this.state.jobs}/>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>
            <Contact user={this.state.currentUser}/>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default Content;
