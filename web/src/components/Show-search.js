import {Link} from 'gatsby'
import React from 'react'
import WordPostPreview from './word-post-preview'



function ShowSearch (props) {
  return (
    <div>
      {props.title && <h2>{props.title}</h2>}
      <ul>
        {props.nodes &&
        props.nodes.map(node => (
          <li key={node.id}>
            <WordPostPreview {...node} />
          </li>
        ))}
      </ul>
      {props.browseMoreHref && (
        <div>
          <Link to={props.browseMoreHref}>Browse more</Link>
        </div>
      )}
    </div>
  )
}

ShowSearch.defaultProps = {
  title: '',
  nodes: [],
  browseMoreHref: ''
}

export default ShowSearch
