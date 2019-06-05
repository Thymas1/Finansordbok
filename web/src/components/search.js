import React, { Component, createRef, useState, useEffect } from 'react'

import {useSearch, Wrapper, Input, Heading, Button} from "@staccx/base"




const Search = ({items, onChange = () => null}) => {
const search = createRef()


  const [input, setInput] = useState(null)
  const [result] = useSearch({input, documents: items, keys: ["title"]})


  useEffect(() => {
    onChange(result)
  }, [result])

  return (
      <Wrapper>
        <Heading level={3}>Search here:</Heading>
        <Input type="search"
               placeholder="search..."
               ref={search}
               onChange={e => setInput(e.target.value)}
        />
        <Button primary>Search</Button>
      </Wrapper>

    )
  }
export default Search;
