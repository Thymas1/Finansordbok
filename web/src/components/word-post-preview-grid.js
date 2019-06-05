import {Link} from 'gatsby'
import React from 'react'
import WordPostPreview from './word-post-preview'



function WordPostPreviewGrid (props) {
  return (
    <div>
      {props.title && <h2>{props.title}</h2>}
      <div>

        {props.nodes &&
          props.nodes.map(node => (
            <li key={node.id}>
              <WordPostPreview {...node} />
            </li>
          ))}

      </div>

      {props.browseMoreHref && (
        <div>
          <Link to={props.browseMoreHref}>Browse more</Link>
        </div>
      )}
    </div>
  )
}

WordPostPreviewGrid.defaultProps = {
  title: '',
  nodes: [],
  browseMoreHref: ''
}

export default WordPostPreviewGrid
