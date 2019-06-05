import React, { useState } from 'react'
import {graphql, Link} from 'gatsby'
import {mapEdgesToNodes} from '../lib/helpers'
import GraphQLErrorList from '../components/graphql-error-list'

import ShowSearch from '../components/Show-search'
import Search from '../components/search'
import { Heading, Layout } from '@staccx/base'
import styled, {ThemeProvider, css} from 'styled-components'
import {StaccTheme as theme} from "@staccx/stacc-theme"
import { theming, GlobalStyle} from "@staccx/base/";



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
const test = theme.add(theming.createVariants({
  threeByThree: css`
    display: grid;
    grid-template-columns: .8fr .8fr .8fr;
    list-style: none;
    padding: 2%;

    `,
}, Layout.themeProps.container))



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
      <ThemeProvider theme={test} >

        <>
          <GlobalStyle/>
        <Layout>
        <div>
          <Heading level={1}><Link to={"/"}>The financial dictionary</Link></Heading>
          <Search items={allNodes} onChange={setItems}/>
          <Heading level={2}>All Words</Heading>
          <ShowSearch nodes={items}/>
        </div>
      </Layout>
      </>
      </ThemeProvider>
    )
  }
export default Searchpage
