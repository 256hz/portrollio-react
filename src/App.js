import React from 'react'
import './App.css';
import { Button, Header, Icon, Image, Menu, Segment, Sidebar } from 'semantic-ui-react'
import Content from './components/Content'

class App extends React.Component {
    constructor() {
        super()
        this.state = {
          visible: false
        }
    }

    handleEdit = () => {
      console.log('here');
      this.setState({visible: !this.state.visible})
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
               <Menu.Item as='a'>
                 <Icon name='home' />
                 Home
               </Menu.Item>
               <Menu.Item as='a'>
                 <Icon name='gamepad' />
                 Games
               </Menu.Item>
               <Menu.Item as='a'>
                 <Icon name='camera' />
                 Channels
               </Menu.Item>
             </Sidebar>
             <Sidebar.Pusher dimmed={false}>
              <Segment basic>
                <Content handleEdit={this.handleEdit}/>
              </Segment>
            </Sidebar.Pusher>
          </Sidebar.Pushable>
        )
    }
}

export default App
