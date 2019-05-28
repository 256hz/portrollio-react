import React from 'react'
import './App.css';
import { Icon, Menu, Segment, Sidebar } from 'semantic-ui-react'
import Content from './components/Content'
import Login from './components/Login'

class App extends React.Component {
    constructor() {
        super()
        this.state = {
          visible: false
        }
    }

    openSidebar = () => {
      this.setState({visible: !this.state.visible})
    }

    handleEdit = (content) => {
      console.log("editing", content)
    }

    render() {
        return(
          <Sidebar.Pushable as={Segment}>
             <Sidebar as={Menu} animation='overlay'
               direction='right' icon='labeled'
               inverted vertical
               visible={this.state.visible}
               width='wide'
             >
               <Menu.Item as='a' onClick={this.openSidebar}>
                 <Icon name='cancel' size="mini"/>
                 Close
               </Menu.Item>
               <Menu.Item as='a'>
                  <Login />
               </Menu.Item>
               <Menu.Item as='a'>
                 <Icon name='gamepad' />
                 Games
               </Menu.Item>
             </Sidebar>
             <Sidebar.Pusher dimmed={false}>
              <Segment basic className="gray-bg">

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
