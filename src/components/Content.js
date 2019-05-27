import React, {Component} from 'react';
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
 // keys of the default state are the api pathnames
 // anchors.pop(2) //so it doesn't try to fetch users & currentUser
 // to this list and it will automatically fetch them
 // as long as we keep users & currentUser at the end, we can add states
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
// fetched automatically so they are excluded. 

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

        <Grid.Row className="grayBG">
          <Grid.Column>
            <Nav />
          </Grid.Column>
        </Grid.Row>

        <Grid.Row className>
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

        <Grid.Row className="grayBG">
          <Grid.Column>
            <Jobs jobs={this.state.jobs}/>
          </Grid.Column>
        </Grid.Row>

        <Grid.Row className="">
          <Grid.Column>
            <Githubs githubs={this.state.githubs}/>
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