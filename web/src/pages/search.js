import React from 'react'
import {graphql} from 'gatsby'
import {mapEdgesToNodes} from '../lib/helpers'
import GraphQLErrorList from '../components/graphql-error-list'
import Layout from '../containers/layout'
import Container from '../components/container'
import SEO from '../components/seo'
import ShowSearch from '../components/Show-search'
import Search from '../components/search'





import {responsiveTitle1} from '../components/typography.module.css'

export const query = graphql`
  query SearchQuery {
  sok: allSanityPost(filter: {
    title:{ eq: "JTTA"}
  }) {
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
  const {data, errors} = props

  if (errors) {
    return (
      <div>
        <GraphQLErrorList errors={errors}/>
      </div>
    )
  }
  const testNodes = data && data.sok && mapEdgesToNodes(data.sok)

  return (
    <Layout>
      <SEO title='Test' />
      <Container>
        <Search/>
        <h1 className={responsiveTitle1}>Archive</h1>
        {testNodes && testNodes.length > 0 && <ShowSearch nodes={testNodes}/>}
      </Container>
    </Layout>
  )
}

export default Searchpage
