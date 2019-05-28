import React from 'react'
import {Grid} from 'semantic-ui-react'

const Login = (props) => {

    return (
    <Grid columns="equal">
        Welcome, {props.username}
    </Grid>
        )
}

export default Login