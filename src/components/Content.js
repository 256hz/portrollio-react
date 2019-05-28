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

class Content extends Component {
  constructor() {
    super()
  }


  render() {
    return (
      <Grid columns="equal">

        <Grid.Row key="nav" id="nav">
          <Grid.Column>
            <Nav openSidebar={this.props.openSidebar}/>
          </Grid.Column>
        </Grid.Row>

        <Grid.Row key="name" id="name">
          <Grid.Column>
            <NamePicIntro user={this.props.currentUser} editing={this.props.editing}
              startEdit={this.startEdit} />
          </Grid.Column>
        </Grid.Row>

        <Grid.Row key="about" id="about">
          <Grid.Column>
            <AboutMe user={this.props.currentUser} editing={this.props.editing}
               startEdit={this.props.startEdit}
            />
          </Grid.Column>
        </Grid.Row>

        <Grid.Row key="skills" id="skills">
          <Grid.Column>
            <Skills skills={this.props.skills} editing={this.props.editing}
              startEdit={this.startEdit}
            />
          </Grid.Column>
        </Grid.Row>

        <Grid.Row key="jobs" id="jobs">
          <Grid.Column>
            <Jobs jobs={this.props.jobs} editing={this.props.editing}
              startEdit={this.startEdit}/>
          </Grid.Column>
        </Grid.Row>

        <Grid.Row key="github" id="github">
          <Grid.Column>
            <Githubs githubs={this.props.githubs} editing={this.props.editing}
              startEdit={this.startEdit}/>
          </Grid.Column>
        </Grid.Row>

        <Grid.Row key="contact" id="contact">
          <Grid.Column>
            <Contact user={this.props.currentUser} editing={this.props.editing}
              startEdit={this.startEdit}/>
          </Grid.Column>
        </Grid.Row>

      </Grid>
    );
  }
}

export default Content;


// visible: [
//   <Nav user={this.props.currentUser} />,
//   <NamePicIntro user={this.props.currentUser} />,
//   <AboutMe user={this.props.currentUser} />,
//   <Jobs jobs={this.props.jobs} />,
//   <Githubs githubs={this.props.githubs} />,
//   <Interests interests={this.props.interests}/>,
//   <Skills skills={this.props.skills} />,
//   <Honors honors={this.props.honors} />,
//   <Links links={this.props.links} />,
//   <Contact user={this.props.currentUser} />,
// ]

// const SECTIONS = [
//   {nav:  [<Nav openSidebar={this.props.openSidebar}/>]},
//   {name: [<NamePicIntro user={this.props.currentUser}/>]},
//   {about:[<AboutMe user={this.props.currentUser} />,
//           <Skills skills={this.props.skills} />]},
//   {jobs: [<Jobs jobs={this.props.jobs} />]},
//   {githubs: [<Githubs githubs={this.props.githubs}/>]},
//   {contact: [<Contact user={this.props.currentUser}/>]}
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
