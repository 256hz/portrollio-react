import React from 'react'
import { Grid } from 'semantic-ui-react'


const NamePicIntro = (props) => {
   // let title = props.user.title.toUpperCase()
   return(
      <Grid columns={16} stretched className="">
         <Grid.Column width={2}></Grid.Column>
         <Grid.Column width={6} textAlign="left" verticalAlign="middle">
            <Grid.Row>
               <span>Hello, my name is <br /> <br /></span>
            </Grid.Row>
            <Grid.Row>
               <span className="heading-font font-size-huge">
                  {props.user.first_name} {props.user.last_name} <br />
               </span>
            </Grid.Row>
            <Grid.Row>
            <span>{props.user.title}</span>
            </Grid.Row>
            <Grid.Row>
            <span>{props.user.intro}</span>
            </Grid.Row>
         </Grid.Column>

         <Grid.Column width={6} textAlign="left">
            <img className="image-circle-portrait"
               src={props.user.img_url} alt="portrait"></img>
         </Grid.Column>
         <Grid.Column width={2}></Grid.Column>
      </Grid>
   )
}

export default NamePicIntro

// <div className="ui grid gray-bg">
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