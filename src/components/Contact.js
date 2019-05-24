import React from 'react'

const parsePhoneNum = (num) => {
  if (num) {
    return `(${num.slice(0,3)}) ${num.slice(3,6)}-${num.slice(6)}`
  }
}

const Contact = (props) => {

    return (
        <div className="">
            <span className="contact">{props.user.email} </span>
            <span className="contact">{parsePhoneNum(props.user.phone)}</span>
        </div>
        )
}

export default Contact
