import React from 'react'
import {Grid, Button, Divider} from 'semantic-ui-react'

const Login = (props) => {

    return (
    <Grid columns="equal" textAlign="center">
        Welcome, {props.username}
        <p> </p>
        <Button size="tiny"
            onClick={props.logOut}
        >Logout</Button>
    </Grid>
        )
}

export default Login
