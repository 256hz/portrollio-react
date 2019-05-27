import React from 'react'
import {Grid, Card, Image} from 'semantic-ui-react'


const fancyName = (name) => {
  return name.split('-').map( word => word[0].toUpperCase() + word.slice(1)).join(" ")
  }

const Github = (props) => {
  let gh = props.github
  let _name = fancyName(gh.repo_name)
  return (
  <Card href={`https://github.com/${gh.repo_owner}/${gh.repo_name}`} 
        target="_blank" className="card-height">
    <Card.Content>
    <Image floated='right' size='mini' src={gh.img_url} />
    <Card.Header>       {_name}             </Card.Header>
    <Card.Meta>         {gh.summary}        </Card.Meta>
    <Card.Description>  {gh.contribution}   </Card.Description>
    </Card.Content>
  </Card>
  )
}

export default Github

// <Card href={`https://github.com/${gh.repo_owner}/${gh.repo_name}`}>
//
//<img className="right floated mini ui image" src={gh.img_url} alt={_name}/>
//
//<div className="header">
//  {_name}
//</div>
//
//<div className="meta">
//  {gh.summary}
//</div>
//
//<div className="description">
//  {gh.contribution}
//</div>
//
//</Card>