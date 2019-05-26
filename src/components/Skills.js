import React from 'react'

const Skills = (props) => {

  return (
    <div>
      <div className="heading">Skills</div>
      {props.skills.map( honor => {
        return <div>
          <div>{honor.month} {honor.year}</div>
          <div>{honor.name} {honor.summary}</div>
        </div>
      })}
    </div>
    )
}

export default Skills