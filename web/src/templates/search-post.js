import React from 'react'
import {graphql, Link} from 'gatsby'

import GraphQLErrorList from '../components/graphql-error-list'
import BlogPost from '../components/word-page'
import SEO from '../components/seo'
import {Layout, LayoutItem,} from '@staccx/base'

export const query = graphql`
  query EntryTemplateQuery($id: String!) {
    post: sanityPost(id: {eq: $id}) {
      id
      publishedAt
      categories {
        _id
        title
      }
      mainImage {
        ...SanityImage
        alt
      }
      title
      slug {
        current
      }
      _rawBody(resolveReferences: {maxDepth: 5})

    }
  }
`

const EntryTemplate = props => {
  const {data, errors} = props
  const post = data && data.post
  return (
    <Layout grid={"columns"}>
      <LayoutItem area={"main"}>
        <Link to={"/"}>The financial dictionary </Link>
      {errors && <SEO title='GraphQL Error' />}
      {post && <SEO title={post.title || 'Untitled'} />}

      {errors && (
        <div>
          <GraphQLErrorList errors={errors} />
        </div>
      )}

      {post && <BlogPost {...post} />}
      </LayoutItem>
    </Layout>
  )
}

export default EntryTemplate
