import React, { Component, createRef, useState, useEffect } from 'react'
import styled, {ThemeProvider} from 'styled-components'
import {StaccTheme as theme} from "@staccx/stacc-theme"
import {useSearch, Wrapper, Input, Heading, Button} from "@staccx/base"




const Search = ({items, onChange = () => null}) => {
const search = createRef()


  const [input, setInput] = useState(null)
  const [result] = useSearch({input, documents: items, keys: ["title"]})


  useEffect(() => {
    onChange(result)
  }, [result])

  return (
<ThemeProvider theme={theme}>
      <Wrapper>
        <Heading level={2}>Search for your word here:</Heading>
        <Input type="search"
               placeholder="search..."
               ref={search}
               onChange={e => setInput(e.target.value)}
        />
        <Button primary>Search</Button>
      </Wrapper>
</ThemeProvider>

    )
  }
export default Search;
