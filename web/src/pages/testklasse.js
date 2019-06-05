import React from "react"
import { graphql } from "gatsby";
import { mapEdgesToNodes } from "../lib/helpers"
import ShowSearch from '../components/Show-search'
import Layout from "../components/layout"
import SEO from '../components/seo'


export const query = graphql`
  query SearchQueryet {
  sok: allSanityPost(filter: {
    title:{ eq: "PEP"}
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



export default class testklasse extends React.Component {



  state = {
    sok: '',

  };

  handleInputChange = event => {
    const target = event.target
    const value = target.value
    const name = target.name

    this.setState({
      [name]: value
    })
  }
  handleSumbit = event => {
    event.preventDefault()
    alert(`Welcome &{this.state.sok}!`)
  }

  render() {
    return (
      <Layout>
        <SEO title='Test'/>
      <form>
      <input type="text" name="sok" value={this.state.sok} onChange={this.handleInputChange}/>
      <button type="submit" onChange={this.handleSumbit}>submit</button>
    </form>
        <p> {this.state.sok} </p>
      </Layout>
    )
  }
}
