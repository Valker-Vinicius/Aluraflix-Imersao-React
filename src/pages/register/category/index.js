/* eslint-disable linebreak-style */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';

function RegisterCategory() {
  const defaultValues = {
    name: '',
    description: '',
    color: '',
  };

  const [categories, setCategories] = useState([]);
  const [values, setValues] = useState(defaultValues);

  function setValue(key, value) {
    setValues({
      ...values,
      [key]: value,
    });
  }

  useEffect(() => {
    const URL = window.location.hostname.includes('localhost')
      ? 'http://localhost:8000/categories' 
      : 'https://purinflix.herokuapp.com/categories';
    fetch(URL)
      .then(async (fetchAnswer) => {
        const answer = await fetchAnswer.json();
        setCategories([
          ...answer,
        ]);
      });
  }, []);

  function handleChange(eventInfo) {
    const { getAttribute, value } = eventInfo.target;
    const getAttributeBind = getAttribute.bind(eventInfo.target);
    setValue(
      getAttributeBind('name'),
      value,
    );
  }

  return (
    <PageDefault>
      <h1>
        Register category:
        <span style={{ color: values.color }}>
          {` ${values.name}`}
        </span>
      </h1>

      <form onSubmit={function handleSubmit(eventInfo) {
        eventInfo.preventDefault();
        setCategories([
          ...categories,
          values,
        ]);

        setValues(defaultValues);
      }}
      >

        <FormField
          label="Category Name: "
          type="text"
          value={values.name}
          name="name"
          onChange={handleChange}
        />

        <FormField
          label="Description: "
          type="textarea"
          value={values.description}
          name="description"
          onChange={handleChange}
        />

        <FormField
          label="Color: "
          type="color"
          value={values.color}
          name="color"
          onChange={handleChange}
        />

        <Button>
          Register
        </Button>
      </form>

      {categories.length === 0 && (
        <div>
          Loading...
        </div>
      )}

      <ul>
        {categories.map((category) => (
          <li key={`${category.name}`}>
            {category.name}
          </li>
        ))}
      </ul>

      <Link to="/">
        Back to home
      </Link>
    </PageDefault>
  );
}

export default RegisterCategory;
