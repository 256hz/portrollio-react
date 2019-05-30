import React from 'react'
import {Card, Image, Button, Icon} from 'semantic-ui-react'


const fancyName = (name) => {
  return name.split('-').map( word => word[0].toUpperCase() + word.slice(1)).join(" ")
  }

const Github = (props) => {
  let github = props.github
  let _name = fancyName(github.repo_name)
  return (
  <Card >
    <Card.Content href={`https://github.com/${github.repo_owner}/${github.repo_name}`}
        target="_blank" className="card-height">

        <Image floated='right' size='mini' src={github.img_url} />
        <Card.Header>       {_name}             </Card.Header>
        <Card.Meta>         {github.summary}        </Card.Meta>
        <Card.Description>  {github.contribution}   </Card.Description>

    </Card.Content>
      {props.loggedIn
        ? <Card.Content>
          <Button type="button" onClick={_ => props.shiftOrder('githubs', github, false)}><Icon name="left arrow"/></Button>
          <Button type="button" onClick={_ => props.shiftOrder('githubs', github, true)}><Icon name="right arrow"/></Button>     
          <Button floated='right' size="small" onClick={_ => props.startEdit(github, 'githubs')} icon="edit"/>
        </Card.Content>
        : null
      }
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
