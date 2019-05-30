import './App.css';
import React from 'react'
import { Icon, Menu, Segment, Sidebar, Sticky } from 'semantic-ui-react'
import Content from './components/Content'
import Login from './components/Login'
import LoggedIn from './components/LoggedIn'
import Editor from './components/Editor'

const apiURL = 'http://localhost:3000/api/v1/'
const HEADERS_AUTH = {
  'Authorization': 'Bearer ' + localStorage.jwt,
  'Content-Type': 'application/json'
}
const HEADERS_NOAUTH = { 'Content-Type': 'application/json'}

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
        fetch( apiURL + a ).then( res => res.json() )
        .then( json => this.setState({[a]: json}))
      })
      //special fetch for users
      fetch( apiURL + 'users').then( res => res.json() )
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
      fetch(apiURL + 'login', {
        method: 'POST',
        headers: HEADERS_NOAUTH,
        body: JSON.stringify({ user: {username, password}})
      }).then( res => res.json() )
        .then( json => {
          if (json && json.jwt) {
            localStorage.setItem('jwt', json.jwt)
            localStorage.setItem('username', username)
            this.setState({username: username, loggedIn: true})
          } else {
            localStorage.removeItem('jwt')
            localStorage.removeItem('username')
            this.setState({username: '', message: json.message, loggedIn: false})
          }
          this.setState({sidebarVisible: false})
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
        }) //, ()=>console.log('set up new', this.state.creatingType))
      } else {
        alert('Please log in to add ' + this.state.creatingType)
      }
    }

    handleSubmit = (content) => {
      fetch(apiURL+this.state.editingType+'/'+content.id, {
        method: "PATCH",
        headers: HEADERS_AUTH,
        body: JSON.stringify({...content})
      })
      .then(res => res.json())
      .catch(error => console.log(error))
      .then(json => {
        let editingTypeCopy=this.state.editingType
        switch(editingTypeCopy) {
          case "users": this.setState({users: [json], currentUser: json})
            break
          case "skills": let skillsCopy = this.state.skills.map(skill => {
              return (skill.id === content.id) ? content : skill
            })
            this.setState({skills: skillsCopy})
            break
          case "jobs": let jobsCopy = this.state.jobs.map(job => {
              return (job.id === content.id) ? content : job
            })
            this.setState({jobs: jobsCopy})
            break
          case "githubs": let githubsCopy = this.state.githubs.map(github => {
              return (github.id === content.id) ? content : github
            })
            this.setState({githubs: githubsCopy})
            break
          default: return null
        }
        this.setState({sidebarVisible: false, editingType: ''})
      })
    }

    shiftOrder = (incomingGroup, item, next) => {
      let group = this.state[incomingGroup].sort( (a,b) => a.order_id - b.order_id )
      let orderIds = group.map( s => s.order_id )
      let curIndex = orderIds.indexOf( item.order_id )
      let maxPos = orderIds.length-1
      let move = next ? 1 : -1 //if next is true, shift up; else shift down

      // console.log('shifting:', {incomingGroup, item, next})
      // console.log('to order_id:', item.order_id + move)
      // console.log({group, orderIds})

      if (curIndex === maxPos && next) {
        let t = orderIds[maxPos]
        orderIds[maxPos] = orderIds[0]
        orderIds[0] = t
      } else if (curIndex === 0 && !next) {
        let t = orderIds[0]
        orderIds[0] = orderIds[maxPos]
        orderIds[maxPos] = t
      } else {
        let t = orderIds[curIndex]
        orderIds[curIndex] = orderIds[curIndex + move]
        orderIds[curIndex + move] = t
      }

      group.forEach( (item, index) => {
        if (item.order_id !== orderIds[index]) {
          // console.log(item.name + " changed, fetching")
          item.order_id = orderIds[index]
          fetch(apiURL + '/' + incomingGroup + '/'+ item.id, {
            method: "PATCH",
            headers: HEADERS_AUTH,
            body: JSON.stringify({...item})
          }).then( res => res.json() )
            .then( console.log )
        }
      })
      this.setState({ [group]: group })
    }

    handleCreate = (content) => {
      content['order_id']=this.state[this.state.creatingType].length
      fetch(apiURL+this.state.creatingType, {
        method: "POST",
        headers: HEADERS_AUTH,
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
          [creatingTypeCopy]: [...this.state[creatingTypeCopy], json],
          creatingType: ''
        })
      })
    }

    handleDelete = (content) => {
      fetch(apiURL+this.state.editingType+'/'+content.id, {
        method: "DELETE",
        headers: HEADERS_AUTH
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
          <Sidebar.Pushable as={Segment} className="fix-sidebar">
            <Sticky >
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
              <Segment basic className={this.state.currentUser.color_theme}>

                <Content
                  openSidebar={this.openSidebar}
                  startEdit={this.startEdit}
                  shiftOrder={this.shiftOrder}
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
