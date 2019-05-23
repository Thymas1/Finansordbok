import React from 'react'
import styles from './search.module.css'
import styled from 'styled-components'

const Button = styled.button`
background: ${props => props.primary ? "palevioletred" : "white"};
color: ${props => props.primary ? "white" : "palevioletred"};

font-size: 1em;
margin: 1em;
padding: 0.25em 1em;
border: 2px solid palevioletred;
border-radius: 3px;
`;



function Search(){


  return(
    <div>
    <input type="search" results={5} placeholder="search..." className={styles.input}/>
      <Button>Normal</Button><Button primary>primary</Button>
    </div>
  )
}
export default Search;
