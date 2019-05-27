import React, {Component} from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { anchorate } from 'anchorate'
import { createHistory } from 'history'
import Nav from './Nav'
import NamePicIntro from './NamePicIntro'
import AboutMe from './AboutMe'
import Contact from './Contact'
import Jobs from './Jobs'
import Githubs from './Githubs'
import Skills from './Skills'
import Interests from './Interests'
import Honors from './Honors'
import Links from './Links'
import { Grid } from 'semantic-ui-react'

const apiURL = 'http://localhost:3000/api/v1/'
const DEFAULT_STATE = {
  jobs: [],
  githubs: [],
  interests: [],
  skills: [],
  honors: [],
  links: [],
  users: [],
  currentUser: {},
  visible: []
}

let keys = Object.keys(DEFAULT_STATE)
let anchors = keys.slice(0, keys.length-3)
// used to automate fetch -- users, currentUser & visible are not 
// fetched automatically so they are excluded (length-3). We can
// add resources as long as they are before the final 3 in the list. 

class Content extends Component {
  constructor() {
    super()
    this.state = DEFAULT_STATE
  }

  componentDidMount() {
    //automated fetch
    anchors.forEach( a => {
      fetch( apiURL + a )
      .then( res => res.json() )
      .then( json => this.setState({[a]: json}))
    })

    //special fetch for users
    fetch( apiURL + 'users')
    .then( res => res.json() )
    .then( users => {
      this.setState({users})
      this.setState({currentUser: users[0]})
    })
  }

  render() {
    return (
      <Grid className="">

        <Grid.Row className="">
          <Grid.Column>
            <Nav handleEdit={this.props.handleEdit}/>
          </Grid.Column>
        </Grid.Row>

        <Grid.Row className="">
          <Grid.Column>
            <NamePicIntro user={this.state.currentUser}/>
          </Grid.Column>
        </Grid.Row>

        <Grid.Row className="">
          <Grid.Column>
            <AboutMe user={this.state.currentUser} />
            <Skills skills={this.state.skills} />
          </Grid.Column>
        </Grid.Row>

        <Grid.Row className="">
          <Grid.Column>
            <Jobs jobs={this.state.jobs}/>
          </Grid.Column>
        </Grid.Row>

        <Grid.Row className="">
          <Grid.Column>
            <Githubs githubs={this.state.githubs}/>
          </Grid.Column>
        </Grid.Row>

        <Grid.Row className="">
          <Grid.Column>
            <Contact user={this.state.currentUser}/>
          </Grid.Column>
        </Grid.Row>

      </Grid>
    );
  }
}

export default Content;


        // visible: [
        //   <Nav user={this.state.currentUser} />, 
        //   <NamePicIntro user={this.state.currentUser} />,
        //   <AboutMe user={this.state.currentUser} />, 
        //   <Jobs jobs={this.state.jobs} />, 
        //   <Githubs githubs={this.state.githubs} />, 
        //   <Interests interests={this.state.interests}/>, 
        //   <Skills skills={this.state.skills} />, 
        //   <Honors honors={this.state.honors} />, 
        //   <Links links={this.state.links} />,
        //   <Contact user={this.state.currentUser} />,
        // ]  