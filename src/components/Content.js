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
import SectionHeading from './SectionHeading';

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
}
let keys = Object.keys(DEFAULT_STATE)
let anchors = keys.slice(0, keys.length-2)
// used to automate fetch -- users & currentUser are not 
// fetched automatically so they are excluded (length-2). We can
// add resources as long as they are before the final 2 in the list. 

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

  getContent = (content) => {
    console.log(content)
    this.props.handleEdit(content)
  }

  render() {
    // TO DO: set up getContent and handleEdit for everything like it is in Skills
    return (
      <Grid columns="equal">

        <Grid.Row key="nav" id="nav">
          <Grid.Column>
            <Nav openSidebar={this.props.openSidebar}/>
          </Grid.Column>
        </Grid.Row>

        <Grid.Row key="name" id="name">
          <Grid.Column>
            <NamePicIntro user={this.state.currentUser}/>
          </Grid.Column>
        </Grid.Row>

        <Grid.Row key="about" id="about">
          <Grid.Column>
            <SectionHeading text="About Me" getContent={this.getContent}/>
            <AboutMe user={this.state.currentUser} />
          </Grid.Column>
        </Grid.Row>

        <Grid.Row key="skills" id="skills">
          <Grid.Column>
            <Skills skills={this.state.skills} getContent={this.getContent}/>
          </Grid.Column>
        </Grid.Row>

        <Grid.Row key="jobs" id="jobs">
          <Grid.Column>
            <SectionHeading text="Positions" getContent={this.getContent} />
            <Jobs jobs={this.state.jobs}/>
          </Grid.Column>
        </Grid.Row>

        <Grid.Row key="github" id="github">
          <Grid.Column>
            <SectionHeading text="Featured Repos" getContent={this.getContent} />
            <Githubs githubs={this.state.githubs}/>
          </Grid.Column>
        </Grid.Row>

        <Grid.Row key="contact" id="contact">
          <Grid.Column>
            <SectionHeading text="Contact" getContent={this.getContent} />
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

// const SECTIONS = [
//   {nav:  [<Nav openSidebar={this.props.openSidebar}/>]},
//   {name: [<NamePicIntro user={this.state.currentUser}/>]},
//   {about:[<AboutMe user={this.state.currentUser} />,
//           <Skills skills={this.state.skills} />]},
//   {jobs: [<Jobs jobs={this.state.jobs} />]},
//   {githubs: [<Githubs githubs={this.state.githubs}/>]},
//   {contact: [<Contact user={this.state.currentUser}/>]}
// ]

// {SECTIONS.map( section => {
//   return <Grid.Row>
//     <Grid.Column>
//       {section.map (component => {
//         return React.createElement(Object.values(component)[0], {})
//       })}
//     </Grid.Column>
//   </Grid.Row>
// })}
