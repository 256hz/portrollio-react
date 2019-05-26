import React from 'react'

const Honors = (props) => {

  return (
    <div>
      <div className="heading">Honors</div>
      {props.honors.map( honor => {
        return <div>
          <div>{honor.month} {honor.year}</div>
          <div>{honor.name} {honor.summary}</div>
        </div>
      })}
    </div>
    )
}

export default Honors