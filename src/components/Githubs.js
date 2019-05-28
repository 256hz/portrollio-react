import React from 'react'
import Github from './Github'
import SectionHeading from './SectionHeading'
import {Grid, Card} from 'semantic-ui-react'


const Githubs = (props) => {
  return (
    <Grid columns="equal" divided='vertically'>
      <SectionHeading text="Featured Repos" 
        getContent={ _ => props.getContent(props.githubs)} 
        editing={props.editing}
        loggedIn={props.loggedIn}
      />
      <Grid.Row>
        <Card.Group>
          <br />
          {props.githubs.map( (github, index) => {
            return <Grid.Column key={github.repo_name + index}>
              <Github github={github} />
            </Grid.Column>
          })}
        </Card.Group>
      </Grid.Row>
    <br />
    </Grid>
  )
}

export default Githubs

  // return(
  //   <Grid columns={16}>
  //     <Grid.Column width={2}></Grid.Column>
  //     <Grid.Column width={12}>
  //       <Card.Group>
  //         {props.githubs.map(github => {
  //           return <Grid.Column>
  //               <Github github={github} />
  //             </Grid.Column>
  //         })}
  //       </Card.Group>
  //     </Grid.Column>
  //     <Grid.Column width={2}></Grid.Column>
  //   </Grid>

// let styles={
//   display: 'inline'
// }

    
    // <div class="ui three column doubling stackable grid container">
          // <div className="">
          //   <div className="image-circle-small">
          //     <img className="image-circle-small-img" src={github.img_url} alt={github.repo_name} />
          //   </div>
          //   <div class="column">
          //     <h2 class="ui header" style={styles}>{github.repo_name}</h2>

          //     <p class="font_size_medium ui paragraph">{github.summary}</p>
          //   </div>
          // </div>
    // </div>