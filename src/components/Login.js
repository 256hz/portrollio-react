import React from 'react'
import {Form, Grid} from 'semantic-ui-react'

class Login extends React.Component {
    state={
        user: "",
        pass: ""
    }
    handleUserChange = (e, {value}) => this.setState({user: value})
    handlePassChange = (e, {value}) => this.setState({pass: value})
    
    render() { 
        return(
        <Grid textAlign="center">
            {this.props.message}
            <Form>
                <Form.Group widths={1}>
                    <Form.Input inverted
                        label={{ icon:"user circle outline inverted" }}
                        onChange={this.handleUserChange}
                        iconPosition="left" placeholder="username"
                        value={this.state.user}
                    />
                </Form.Group>

                <Form.Group widths={1}>
                    <Form.Input inverted
                        type="password"
                        label={{ icon:"key" }} 
                        onChange={this.handlePassChange}
                        iconPosition="left" placeholder="password" 
                        value={this.state.pass}
                    />
                </Form.Group>
                <Form.Button inverted
                    onClick={ev => this.props.login(ev, this.state.user, this.state.pass)}
                >Login</Form.Button>
            </Form>
        </Grid>
        )
    }
}


export default Login

// <Grid.Row columns={1} >
//                     <Input size= "mini"
//                     ref={input => inputtext = input}
//                     label={{ icon:"user circle outline" }} 
//                     iconPosition="left" placeholder="username" 
//                     />
//                 </Grid.Row>
//                 <Grid.Row columns={1}>
//                     <Input size= "mini"
//                     label={{ icon:"key" }} 
//                     iconPosition="left" placeholder="password" 
//                     />
//                 </Grid.Row>
//                 <Grid.Row columns={1}>
//                     <Button inverted
//                     onClick={props.login}
//                     >Login</Button>
//                 </Grid.Row>