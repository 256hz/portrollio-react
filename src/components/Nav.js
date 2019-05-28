import React from 'react'
import { Link } from 'react-router-dom'
import {Menu, Icon} from "semantic-ui-react"

const Nav = (props) => {
  return (
    <Menu secondary floated="right">
        <Link className="item heading" to="/#skills">  SKILLS</Link>
        <Link className="item heading" to="/#jobs">    JOBS</Link>
        <Link className="item heading" to="/#githubs"> GITHUBS</Link>
        <Link className="item heading" to="/#honors">  HONORS</Link>
        <Link className="item heading" to="/#contact"> CONTACT</Link>
        <Link className="item heading" onClick={props.handleEdit}><Icon name="bars"/></Link>    
    </Menu>
  )
}

export default Nav
