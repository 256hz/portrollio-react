import React from 'react'


const NamePicIntro = (props) => {

   return(
      <div className="ui grid grayBG">
         <div className="sixteen wide column row">
            <div className="eight wide column middle aligned">
            
                  Hello, my name is <br />
                  {props.user.first_name} {props.user.last_name}
               
                  {props.user.intro}

            </div>         
            <div className='eight wide column middle aligned'>
               <img className="image-circle"
                     src={props.user.img_url}
                     alt="portrait"></img>
            </div>            
         </div>
      </div>
   )
}

export default NamePicIntro