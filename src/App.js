import React from 'react'
import './App.css';
import { Icon, Menu, Segment, Sidebar, Sticky, Divider } from 'semantic-ui-react'
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
  loggedIn: false,
  editorDisabled: true,
  editing: {},
  editingType: '',

  creating: {},
  creatingType: ''
}

let keys = Object.keys(DEFAULT_STATE)
let anchors = keys.slice(0, 7)
// used to automate fetch -- the first 7 entries in default state
// are the names of the resources we want to fetch.

class App extends React.Component {
    constructor() {
        super()
        this.state = DEFAULT_STATE
    }

    componentDidMount() {
      //check for logged in user
      if (!!localStorage.jwt && !!localStorage.username) {
        this.setState({loggedIn: true, username: localStorage.username})
      } else {
        this.setState({loggedIn: false})
      }
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
      this.setState({
        sidebarVisible: !this.state.sidebarVisible,
        editingType: ''
      })
    }

    login = (ev, username, password) => {
      ev.preventDefault()
      this.setState({message: ''})
      fetch('http://localhost:3000/api/v1/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ user: {username, password}})
      }).then( res => res.json() )
        .then( json => {
          // console.log('returned:', json)
          if (json && json.jwt) {
            localStorage.setItem('jwt', json.jwt)
            localStorage.setItem('username', username)
            this.setState({username: username, loggedIn: true})
          } else {
            localStorage.removeItem('jwt')
            localStorage.setItem('username', username)
            this.setState({username: '', message: json.message, loggedIn: false})
          }
        })
  }

    logOut = () => {
      this.setState({
        loggedIn: false,
        sidebarVisible: false
      })
      localStorage.removeItem('jwt')
      localStorage.removeItem('username')
    }

    startEdit = (content, type) => {
      if (localStorage.getItem('jwt') !== '') {
        this.setState({
          editing: content,
          editingType: type,
          creatingType: '',
          sidebarVisible: true
        }) //, ()=>console.log('set up edit', this.state.editingType))
      } else {
        alert('Please log in to edit')
      }
    }

    startNew = (type) => {
      if (localStorage.getItem('jwt') !== '') {
        this.setState({
          editing: {},
          editingType: '',
          creating: {
            content: {
              user_id: this.state.currentUser.id
            }
          },
          creatingType: type,
          sidebarVisible: true
        }, ()=>console.log('set up new', this.state.creatingType))
      } else {
        alert('Please log in to add ' + this.state.creatingType)
      }
    }

    handleSubmit = (content) => {
      let token = localStorage.getItem('jwt')
      fetch('http://localhost:3000/api/v1/'+this.state.editingType+'/'+content.id, {
        method: "PATCH",
        headers: {
          'Authorization': 'Bearer ' + token,
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
              editingType: '',
            })
            break
          case "skills":
            let skillsCopy = this.state.skills.map(skill => {
              return (skill.id === content.id) ? content : skill
            })
            this.setState({
              skills: skillsCopy
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

    handleCreate = (content) => {
      let token = localStorage.getItem('jwt')
      fetch('http://localhost:3000/api/v1/'+this.state.creatingType, {
        method: "POST",
        headers: {
          'Authorization': 'Bearer ' + token,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          ...content,
          user_id: this.state.currentUser.id
        })
      })
      .then(res => res.json())
      .catch(error => console.log(error))
      .then(json => {
        let creatingTypeCopy=this.state.creatingType
        this.setState({
          [creatingTypeCopy]: [
            ...this.state[creatingTypeCopy],
            json
          ],
          creatingType: ''
        })
      })
    }

    handleDelete = (content) => {
      let token = localStorage.getItem('jwt')
      fetch('http://localhost:3000/api/v1/'+this.state.editingType+'/'+content.id, {
        method: "DELETE",
        headers: {
          'Authorization': 'Bearer ' + token
        }
      })
      .then(res => res.json())
      .then(json => {
        let copy = this.state[this.state.editingType]
        copy.splice(copy.findIndex(el => el.id === json.id),1)
        this.setState({
          [this.state.editingType]: copy,
          editingType: '',
          sidebarVisible: false
        })
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
                    {(this.state.loggedIn && localStorage.getItem('jwt'))
                      ? <LoggedIn username={this.state.username} logOut={this.logOut}/>
                      : <Login login={this.login} message={this.state.message}/>
                    }
                 </Menu.Item>

                 <Editor
                  editorDisabled={this.state.editorDisabled}
                  editing={this.state.editing}
                  creatingType={this.state.creatingType}
                  creating={this.state.creating}
                  handleSubmit={this.handleSubmit}
                  handleCreate={this.handleCreate}
                  editingType={this.state.editingType}
                  startEdit={this.startEdit}
                  handleDelete={this.handleDelete}
                 />

               </Sidebar>
             </Sticky>
             <Sidebar.Pusher dimmed={false}>
              <Segment basic >

                <Content
                  openSidebar={this.openSidebar}
                  startEdit={this.startEdit}
                  startNew={this.startNew}

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
