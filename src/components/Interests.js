import React from 'react'

const Interests = (props) => {

  return (
    <div>
      <div className="heading">Interests</div>
      {props.interests.map( honor => {
        return <div>
          <div>{honor.month} {honor.year}</div>
          <div>{honor.name} {honor.summary}</div>
        </div>
      })}
    </div>
    )
}

export default Interests