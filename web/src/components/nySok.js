import React, { useState } from 'react'
import {graphql} from 'gatsby'
import ShowSearch from './Show-search'
import {mapEdgesToNodes} from '../lib/helpers'







import {responsiveTitle1} from '../components/typography.module.css'





  function Example() {

    const [form, setValues] = useState({
      title: '',
    });
    const [data, setData] = useState();



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
      <div>
      <form onSubmit={printValues}>
        <label>Søk:
          <input value={form.title}
                 name="title"
                 onChange={updateField}
                 placeholder="Search..."
                 />
        </label>
      <br />
        <button>Submit</button>
        <p>{form.title}</p>
      </form>
      </div>
    );

  }

export default Example
