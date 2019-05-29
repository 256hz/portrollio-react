import React from 'react'
import './App.css';
import { Icon, Menu, Segment, Sidebar, Sticky } from 'semantic-ui-react'
import Content from './components/Content'
import Login from './components/Login'
import LoggedIn from './components/LoggedIn'
import Editor from './components/Editor'
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
  sidebarVisible: false,
  editorDisabled: true,
  loggedIn: true,
  editing: {},
  editingType: ''
}

let keys = Object.keys(DEFAULT_STATE)
let anchors = keys.slice(0, 7)
// used to automate fetch -- users & currentUser are created
// together, and editing is a state, so they are excluded (length-3).
// Add any other resources before the final 3 in the list.

class App extends React.Component {
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

    openSidebar = () => {
      this.setState({sidebarVisible: !this.state.sidebarVisible})
    }

    login = (user, pass) => {
      console.log('super secure', user, pass)
      fetch('http://localhost:3000/api/v1/profile', {
        method: 'GET',
        headers: {
          Authorization: `Bearer <token>`
        }
      })
      this.setState({username: user, loggedIn: true})
    }

    logOut = () => {
      this.setState({
        loggedIn: false,
        sidebarVisible: false
      })
    }

    startEdit = (content, type) => {
      this.setState({
        editing: content,
        editingType: type,
        editorDisabled: false,
        sidebarVisible: true
      }, ()=>console.log('set up edit', this.state.editingType))
    }

    handleSubmit = (content) => {
      console.log(content);
      fetch('http://localhost:3000/api/v1/'+this.state.editingType+'/'+content.id, {
        method: "PATCH",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          ...content
        })
      })
      .then(res => res.json())
      .then(json => {
        let editingTypeCopy=this.state.editingType
        switch(editingTypeCopy) {
          case "users":
            this.setState({
              users: [json],
              currentUser: json,
              sidebarVisible: false,
              editorDisabled: true,
              editingType: '',
            })
            break
          case "skills":
            let skillsCopy = this.state.skills.map(skill => {
              return (skill.id === content.id) ? content : skill
            })
            this.setState({
              skills: skillsCopy,
            })
            break
          case "jobs":
            let jobsCopy = this.state.jobs.map(job => {
              return (job.id === content.id) ? content : job
            })
            this.setState({
              jobs: jobsCopy,
              sidebarVisible: false,
              editingType: '',
            })
            break
          default:
            let arrCopy = [...this.state[editingTypeCopy]]
            this.setState({
              [editingTypeCopy]: json,
              sidebarVisible: false,
              editingType: '',
          })
        }
      })
    }

    render() {
        return(
          <Sidebar.Pushable as={Segment} className="gray-bg fix-sidebar">
            <Sticky>
              <Sidebar as={Menu} animation='overlay'
                 direction='right' icon='labeled'
                 inverted vertical
                 visible={this.state.sidebarVisible}
                 width='wide'
               >
                 <Menu.Item as='a' onClick={this.openSidebar}>
                   <Icon name='bars' size="mini"/>
                   Close
                 </Menu.Item>
                 <Menu.Item as='a'>
                    {this.state.loggedIn
                      ? <LoggedIn username={this.state.username} logOut={this.logOut}/>
                      : <Login login={this.login} />
                    }
                 </Menu.Item>

                 <Editor
                  editorDisabled={this.state.editorDisabled}
                  editing={this.state.editing}
                  handleSubmit={this.handleSubmit}
                  editingType={this.state.editingType}
                  startEdit={this.startEdit}
                 />

               </Sidebar>
             </Sticky>
             <Sidebar.Pusher dimmed={false}>
              <Segment basic >

                <Content
                  openSidebar={this.openSidebar}
                  startEdit={this.startEdit}

                  jobs={this.state.jobs}
                  githubs={this.state.githubs}
                  interests={this.state.interests}
                  skills={this.state.skills}
                  honors={this.state.honors}
                  links={this.state.links}
                  users={this.state.users}
                  currentUser= {this.state.currentUser}
                  editing={this.state.editing}
                  loggedIn={this.state.loggedIn}
                />

              </Segment>
            </Sidebar.Pusher>
          </Sidebar.Pushable>
        )
    }
}

export default App
