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

  message: '',
  currentUser: {},
  sidebarVisible: false,
  editorDisabled: true,
  loggedIn: false,
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
        localStorage.setItem('jwt', null)
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
      this.setState({message: ''})
      fetch('http://localhost:3000/api/v1/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          user: {
            username: user,
            password: pass
          }
        })
      }).then( res => res.json() )
        .then( json => {
          if (json.message !== "Invalid username or password") {
            localStorage.setItem('jwt', json)
            this.setState({username: user, loggedIn: true})
          } else {
            localStorage.setItem('jwt', null)
            this.setState({message: json.message})
            this.setState({loggedIn: false})
          }
    })
  }

    logOut = () => {
      this.setState({
        loggedIn: false,
        sidebarVisible: false
      })
      localStorage.setItem('jwt', null)
    }

    startEdit = (content, type) => {
      if (localStorage.getItem('jwt') !== "null") {
        this.setState({
          editing: content,
          editingType: type,
          editorDisabled: false,
          sidebarVisible: true
        }, ()=>console.log('set up edit', this.state.editingType))
      } else {
        alert('Please log in to edit')
      }
    }

    handleSubmit = (content) => {
      let token = localStorage.getItem('jwt')
      fetch('http://localhost:3000/api/v1/'+this.state.editingType+'/'+content.id, {
        method: "PATCH",
        headers: {
          'Authorization': 'Bearer '+token,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          ...content
        })
      })
      .then(res => res.json())
      .catch(error => console.log(error))
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
          case "githubs":
            let githubsCopy = this.state.githubs.map(github => {
              return (github.id === content.id) ? content : github
            })
            this.setState({
              githubs: githubsCopy,
              sidebarVisible: false,
              editingType: '',
            })
            break
          default:
            this.setState({
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
                    {(this.state.loggedIn && localStorage.getItem('jwt') !== "null")
                      ? <LoggedIn username={this.state.username} logOut={this.logOut}/>
                      : <Login login={this.login} message={this.state.message}/>
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
