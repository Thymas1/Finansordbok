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
  query TestQuery {
    tests: allSanityPost(limit: 80, sort: {fields: [publishedAt], order: DESC}) {
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




const Testpage = props => {
  const {data, errors} = props

  if (errors) {
    return (
      <div>
        <GraphQLErrorList errors={errors}/>
      </div>
    )
  }
  const testNodes = data && data.tests && mapEdgesToNodes(data.tests)

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

export default Testpage
