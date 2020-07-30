/* eslint-disable linebreak-style */
import React, { useState } from 'react';
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
          color="description"
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

      <ul>
        {categories.map((category, index) => (
          <li key={`${category}${index}`}>
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
