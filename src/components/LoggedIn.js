import React from 'react'
import {Grid, Button} from 'semantic-ui-react'

const Login = (props) => {

    return (
    <Grid columns="equal" textAlign="center">
        Welcome, {props.username}
        {' | '}<Button size="tiny"
            onClick={props.logOut}
        >Logout</Button>
    </Grid>
        )
}

export default Login