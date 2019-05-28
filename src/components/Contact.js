import React from 'react'

const parsePhoneNum = (num) => {
  if (num) {
    return `(${num.slice(0,3)}) ${num.slice(3,6)} ${num.slice(6)}`
  }
}

const Contact = (props) => {

    return (
        <div className="centered">
            <span className="contact">
              <a href={"mailto:"+props.user.email}>{props.user.email}</a>
            </span>
            <span> - </span>
            <span className="contact">
              <a href={"tel: +1"+ props.user.phone}>+1 {parsePhoneNum(props.user.phone)}</a>
            </span>
        </div>
        )
}

export default Contact
