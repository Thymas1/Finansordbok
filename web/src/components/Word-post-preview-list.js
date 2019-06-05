import {Link} from 'gatsby'
import React from 'react'
import WordPostPreview from './word-post-preview'



function BlogPostPreviewGrid (props) {
  return (
    <div>
      {props.title && <h2>{props.title}</h2>}
      <ul>
        {props.nodes &&
          props.nodes.map(node => (
            <li key={node.id}>
              <WordPostPreview {...node} isInList />
            </li>
          ))}
      </ul>
      {props.browseMoreHref && (
        <div>
          <Link to={props.browseMoreHref}>See all words</Link>
        </div>
      )}
    </div>
  )
}

BlogPostPreviewGrid.defaultProps = {
  title: '',
  nodes: [],
  browseMoreHref: ''
}

export default BlogPostPreviewGrid
