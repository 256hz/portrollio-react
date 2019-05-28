import React from 'react'
import { Link } from 'react-router-dom'
import {Menu, Icon} from "semantic-ui-react"

const Nav = (props) => {
    // let links = ["skills", "jobs", "githubs", "contact"]
    return (
        <Menu secondary floated="right">
            <Link className="item font-heading" to="/#skills">  SKILLS</Link>
            <Link className="item font-heading" to="/#jobs">    JOBS</Link>
            <Link className="item font-heading" to="/#github"> GITHUB</Link>
            <Link className="item font-heading" to="/#honors">  HONORS</Link>
            <Link className="item font-heading" to="/#contact"> CONTACT</Link>
            <Link className="item" to="/" onClick={props.openSidebar}><Icon name="bars"/></Link>    
        </Menu>
    )
}

export default Nav
