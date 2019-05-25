import React from 'react'

let styles={
  display: 'inline'
}

const Githubs = (props) => {
  return(
    <div className="ui four column doubling stackable grid container">  
      <div className="ui cards">
        {props.githubs.map(github => {
          let fancy_name = github.repo_name.split('-').map( word => word[0].toUpperCase() + word.slice(1)).join(" ")
          return(
              <div className="ui card">
                <div className="content middle aligned">
                  <img className="right floated mini ui image" src={github.img_url} />
                  <div className="header">
                    {fancy_name}
                  </div>
                  <div className="meta">
                    {github.summary}
                  </div>
                  <div className="description">
                    Not sure what goes here if anything
                  </div>
                </div>
              </div>
            )}
          )}
      </div>
    </div>
  )
}
    
export default Githubs
    
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