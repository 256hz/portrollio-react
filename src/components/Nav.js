import React from 'react'

const Nav = (props) => {

    return (
    <div className="ui header grayBG">
        <div className="ui secondary menu">
            <div className="right menu right-padded">
                <a className="item" href="/#jobs">Jobs</a>
                <a className="item" href="/#skill">Skills</a>
                <a className="item" href="/#interests">Interests</a>
                <a className="item" href="/#honors">Honors</a>
                <a className="item" href="/#links">Links</a>
                <a className="item" onClick={props.handleEdit}>Edit</a>
            </div>
        </div>
    </div>
    )
}

export default Nav
