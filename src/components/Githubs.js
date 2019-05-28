import React from 'react'
import Github from './Github'
import {Grid, Card} from 'semantic-ui-react'


const Githubs = (props) => {
  return (<Grid columns={16} divided='vertically'>
    
    <Grid.Row columns={1}>
      <Grid.Column className="heading font-size-large">
        <br />
        Githubs
      </Grid.Column>
    </Grid.Row>
    <Grid.Row>
      <Card.Group>
        <br />
        {props.githubs.map(github => {
          return <Grid.Column>
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