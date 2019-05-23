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



function Search(){


  return(

      <Wrapper>
        <H2>Search for your word here:</H2>
        <Input type="search" results={5} placeholder="search..." className={styles.input}/>
       <Button primary>primary</Button>
      </Wrapper>

  )
}
export default Search;
