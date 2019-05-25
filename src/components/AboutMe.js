import React from 'react'

const AboutMe = (props) => {

  return (
    <div className="">
    
      <div className="column heading">
        About Me
      </div>
      <br></br>
      <div className="ui grid">
        <div className="sixteen wide column"></div>
        <div className="four wide column">{' '}</div>
        <div className="eight wide column">
          {props.user.bio}
        </div>
        <div className="four wide column">{' '}</div>
      </div>
    </div>
  )
}

export default AboutMe
