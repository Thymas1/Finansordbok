import {Link} from 'gatsby'
import React from 'react'
import WordPostPreview from './word-post-preview'
import {Layout, LayoutItem} from '@staccx/base'



function ShowSearch (props) {
  return (
<div>


      {props.title && <h2>{props.title}</h2>}

        <Layout grid={"row"}  variant={"threeByThree"}>

        {props.nodes &&
        props.nodes.map(node => (
          <li key={node.id}>
            <WordPostPreview {...node} />
          </li>
        ))}
        </Layout>

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
