import React from 'react'
import {Menu, Icon} from "semantic-ui-react"

const Nav = (props) => {
  return (
    <Menu secondary className="right-padded">
        <a className="item heading" href="/jobs">JOBS</a>
        <a className="item heading" href="/skill">SKILLSETS</a>
        <a className="item heading" href="/interests">INTERESTS</a>
        <a className="item heading" href="/honors">HONORS</a>
        <a className="item heading" href="/contact">CONTACT</a>
        <a className="item heading" onClick={props.handleEdit}><Icon name="bars"/></a>    
    </Menu>
  )
}

export default Nav
