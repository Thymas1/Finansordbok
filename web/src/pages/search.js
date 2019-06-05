import React, { useState } from 'react'
import {graphql} from 'gatsby'
import {mapEdgesToNodes} from '../lib/helpers'
import GraphQLErrorList from '../components/graphql-error-list'
import Layout from '../containers/layout'
import SEO from '../components/seo'
import ShowSearch from '../components/Show-search'
import Search from '../components/search'
import { Heading } from '@staccx/base'


export const query = graphql`
  query SearchQuery {
  sok: allSanityPost {
      edges {
        node {
          id
          publishedAt
          mainImage {
            ...SanityImage
            alt
          }
          title
          _rawExcerpt
          slug {
            current
          }
        }
      }
    }
  }
  
`



  const Searchpage = props => {

    const { data, errors } = props
    if (errors) {

      return (
        <div>
          <GraphQLErrorList errors={errors}/>
        </div>
      )
    }
    const allNodes = data && data.sok && mapEdgesToNodes(data.sok)
    const [items, setItems] =  useState(allNodes)

    return (
      <Layout>
        <SEO title='Search'/>
        <div>
          <Search items={allNodes} onChange={setItems}/>
          <Heading level={1}>All Words</Heading>
          <ShowSearch nodes={items}/>
        </div>
      </Layout>
    )
  }
export default Searchpage
