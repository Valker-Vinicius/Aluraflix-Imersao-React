import React, { useState } from "react"
import { Link } from "react-router-dom"
import PageDefault from "../../../components/PageDefault"
import FormField from "../../../components/FormField"

function RegisterCategory() {
  const defaultValues = {
    name: "",
    description: "",
    color: "",
  }

  const [categories, setCategories] = useState([]) 
  const [values, setValues] = useState(defaultValues)
  

  function setValue(key, value) {
    setValues ({
      ...values,
      [key]: value,
    })
  }

  function handleChange(eventInfo) {
    const { getAttribute, value } = eventInfo.target
    setValue(
      getAttribute("name"), 
      value
    )
  }

  return (
    <PageDefault>
      <h1>Register category: 
        <span style= {{ color: values.color }}>
          {" " + values.name}
        </span>
      </h1>

      <form onSubmit= {function handleSubmit(eventInfo) {
          eventInfo.preventDefault()
          setCategories([
            ...categories,
            values
          ])
          
          setValues(defaultValues)
        }}
      >
        <FormField
          label= "Category Name: "
          type= "text" 
          value= {values.name}
          name= "name"
          onChange= {handleChange}
        />
        
        <FormField 
          label= "Description: "
          type= "text"
          value= {values.description}
          color= "description"
          onChange= {handleChange}
        />

        <FormField 
          label= "Color: "
          type= "color"
          value= {values.color}
          name= "color"
          onChange= {handleChange}
        />

        <button>
          Register
        </button>
      </form>
      
      <ul>
          {categories.map((category, index) => {
            return (
              <li key= {`${category}${index}`}>
                {category.name}
              </li>
            )
          })}
      </ul>

      <Link to= "/">
        Back to home
      </Link>
    </PageDefault>
  )
}

export default RegisterCategory