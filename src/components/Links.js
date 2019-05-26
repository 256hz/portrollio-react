import React from 'react'

const Links = (props) => {

  return (
    <div>
      <div className="heading">Links</div>
      {props.links.map( honor => {
        return <div>
          <div>{honor.month} {honor.year}</div>
          <div>{honor.name} {honor.summary}</div>
        </div>
      })}
    </div>
    )
}

export default Links