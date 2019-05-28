import React from 'react'
import './App.css';
import { Icon, Menu, Segment, Sidebar, Sticky } from 'semantic-ui-react'
import Content from './components/Content'
import Editor from './components/Editor'

class App extends React.Component {
    constructor() {
        super()
        this.state = {
          sidebarVisible: false,
          editorDisabled: true,
          editing: []
        }
    }

    openSidebar = () => {
      this.setState({sidebarVisible: !this.state.sidebarVisible})
    }

    handleEdit = (content) => {
      this.setState({editing: content, editorDisabled: false, sidebarVisible: true})
    }

    handleSubmit = (ev) => {
      this.setState({
        editing: {
          ...this.state.editing,
          [ev.target.first_name.name]: ev.target.first_name.value,
          [ev.target.last_name.name]: ev.target.last_name.value,
          [ev.target.email.name]: ev.target.email.value,
          [ev.target.phone.name]: ev.target.phone.value
        }
      }, ()=> this.postEdit(this.state.editing))
    }

    postEdit = (editing) => {
      console.log(editing);
      fetch('http://localhost:3000/api/v1/users/'+editing.id, {
        method: "PATCH",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          ...editing
        })
      })
      .then(res => res.json())
      .then(json => {
        this.setState({
          users: [json],
          sidebarVisible: false,
          editorDisabled: true
        }, ()=>console.log(this.state.users))
      })
    }

    cleanUpEdit = () => {

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
                   <Icon name='cancel' size="mini"/>
                   Close
                 </Menu.Item>
                 <Menu.Item as='a'>
                   <Icon name='home' />
                   Home
                 </Menu.Item>

                 <Editor
                  disabled={this.state.editorDisabled}
                  content={this.state.editing}
                  handleSubmit={this.handleSubmit}
                 />

               </Sidebar>
             </Sticky>
             <Sidebar.Pusher dimmed={false}>
              <Segment basic >

                <Content
                  openSidebar={this.openSidebar}
                  handleEdit={this.handleEdit}
                />

              </Segment>
            </Sidebar.Pusher>
          </Sidebar.Pushable>
        )
    }
}

export default App
