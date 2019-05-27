import React from 'react'
import {Grid, Segment} from 'semantic-ui-react'


const NamePicIntro = (props) => {

   return(<Grid columns={2} stretched className="grayBG">
      <Grid.Column>
         <Segment></Segment>
         <Segment className="middle aligned">Hello, my name is <br />
                  <span className="heading font-size-huge">
                     {props.user.first_name} {props.user.last_name}
                     </span><br />
                  {props.user.intro}
         </Segment>
         <Segment></Segment>
      </Grid.Column>

      <Grid.Column>
         <Segment>
         <img className="image-circle-portrait"
            src={props.user.img_url}
            alt="portrait"></img>
         </Segment>
      </Grid.Column>
   </Grid>)
}

export default NamePicIntro

// <div className="ui grid grayBG">
// <div className="sixteen wide column row">
//    <div className="eight wide column middle aligned">
//    
//          Hello, my name is <br />
//          {props.user.first_name} {props.user.last_name}
//       
//          {props.user.intro}
// 
//    </div>         
//    <div className='eight wide column middle aligned'>
//       <img className="image-circle"
//             src={props.user.img_url}
//             alt="portrait"></img>
//    </div>            
// </div>
// </div>