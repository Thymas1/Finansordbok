import React, { useState } from 'react'
import {graphql} from 'gatsby'





import {responsiveTitle1} from '../components/typography.module.css'


export const query = graphql`
  query iSearchQuery {
  sok: allSanityPost(filter: {
    title:{ eq: "JTTA"}
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




  function Example() {

    const [form, setValues] = useState({
      title: 'JTTA'
    });

    const printValues = e => {
      e.preventDefault();
      console.log(form.title);
    };
    const updateField = e => {
      setValues({
        ...form,
        [e.target.name]: e.target.value
      });
    };


    return (
      <form onSubmit={printValues}>
        <label>Søk:
          <input value={form.title}
                 name="title"
                 onChange={updateField}
                 />
        </label>
      <br />
        <button>Submit</button>
        <p>{form.title}</p>
      </form>
    );

  }

export default Example
