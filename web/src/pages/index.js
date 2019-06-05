import React, {useState} from 'react'
import { graphql, Link } from 'gatsby'
import styled, {ThemeProvider, css} from 'styled-components'
import {StaccTheme as theme} from "@staccx/stacc-theme"
import { Heading, Layout, theming, GlobalStyle } from '@staccx/base'
import {
mapEdgesToNodes,
filterOutDocsWithoutSlugs,
filterOutDocsPublishedInTheFuture
} from '../lib/helpers'
import GraphQLErrorList from '../components/graphql-error-list'

import Search from '../components/search'
import ShowSearch from "../components/Show-search";


export const query = graphql`
  fragment SanityImage on SanityMainImage {
    crop {
      _key
      _type
      top
      bottom
      left
      right
    }
    hotspot {
      _key
      _type
      x
      y
      height
      width
    }
    asset {
      _id
    }
  }

  query IndexPageQuery {
    site: sanitySiteSettings(_id: { regex: "/(drafts.|)siteSettings/" }) {
      title
      description
      keywords
    }
    posts: allSanityPost(
      sort: { fields: [publishedAt], order: DESC }
      filter: { slug: { current: { ne: null } }, publishedAt: { ne: null } }
    ) {
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

const IndexPage = props => {
  const { data, errors } = props

  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    )
  }

  const site = (data || {}).site
  const postNodes = (data || {}).posts
    ? mapEdgesToNodes(data.posts)
      .filter(filterOutDocsWithoutSlugs)
      .filter(filterOutDocsPublishedInTheFuture)
    : []
  const [items, setItems] =  useState(postNodes)



  const test = theme.add(theming.createVariants({
    threeByThree: css`
    display: grid;
    grid-template-columns: .8fr .8fr .8fr;
    list-style: none;
    padding: 2%;
    overflow-x:hidden;
    `
  }, Layout.themeProps.container))
  return (
    <ThemeProvider theme={test}>
<>
  <GlobalStyle/>
    <Layout>
      <div>
        <Heading level={1}> Welcome to {site.title}</Heading>
        <Search items={postNodes} onChange={setItems}/>
        <ShowSearch nodes={items}/>
        <Link to={"/search"}> See more </Link>
      </div>
    </Layout>
  </>
    </ThemeProvider>

  )
}

export default IndexPage
