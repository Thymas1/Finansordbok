import React, { Component } from 'react'
import styles from './search.module.css'
import styled from 'styled-components'
import { H2 } from '../components/Title'
import Wrapper from '../components/Wrapper'


const Button = styled.button`
background: ${props => props.primary ? "palevioletred" : "white"};
color: ${props => props.primary ? "white" : "palevioletred"};

font-size: 1em;
padding: 0.25em 1em;
border: 2px solid palevioletred;
border-radius: 3px;
`;
const Input = styled.input`
color: ${props => props.primary ? "white" : "palevioletred"};
font-size: 1em;
padding: 0.25em 1em;
border: 2px solid palevioletred;
border-radius: 3px;
`;



class Search extends Component {

  state = {
    query: '',
  }

  handleInputChange = () => {
    this.setState({
      query: this.search.value
    })
  }

  render() {
    return (

      <Wrapper>
        <H2>Search for your word here:</H2>
        <Input type="search"
               placeholder="search..."
               className={styles.input}
               ref={input => this.search = input}
               onChange={this.handleInputChange}
        />
        <Button primary>Search</Button>
        <p>{this.state.query}</p>
      </Wrapper>

    )
  }
}
export default Search;
