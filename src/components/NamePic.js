import React from 'react'


const NamePic = (props) => {

    return(
         <div className="ui grid grayBG">
            <div className='two column row'>   
               <div className="column middle aligned">
                  <div className="one wide column">{' '}</div> {/* spacer - is there a better way?*/}
                  <div className="row"><div className="one wide column">Hello, my name is </div></div>
                  <div className="row"><div className="one wide column">{'.'}</div></div>
                  <div className="row name">{props.user.first_name} {props.user.last_name}</div>
                  <div className="row"><div className="one wide column">{'.'}</div></div>
                  <div className="row">{props.user.intro}</div>
               </div>
               <div className='column middle aligned'>
                  <img className="image-circle"
                       src="http://4.bp.blogspot.com/-gBShNV-VyoI/TuoQOhCE1dI/AAAAAAAACXc/tp9YZ_Rpn9Q/s1600/memes+en+hd8.jpg"
                       alt="guy"></img>
               </div>            
            </div>
         </div>
        )
}

export default NamePic