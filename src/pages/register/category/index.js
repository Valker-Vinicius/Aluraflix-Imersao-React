import React, { useState } from "react"
import { Link } from "react-router-dom"
import PageDefault from "../../../components/PageDefault"

function RegisterCategory() {
  const [categories, setCategories] = useState(["Default"]) 
  
  const defaultValues = {
    name: "",
    description: "",
    color: "#ffffff",
  }
  const [values, setValues] = useState(defaultValues)

  function setValue(key, value) {
    setValues ({
      ...values,
      [key]: value,
    })
  }

  function handleChange(eventInfo) {
    setValue(
      eventInfo.target.getAttribute("name"), 
      eventInfo.target.value
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
        }}
      >
        <div>
          <label>
            Category Name:
            <input
            
            type= "text"
            placeholder= {values.name} 
            name= "name"
            onChange= {handleChange}
          />
          </label>
        </div>

        <div>
          <label>
            Description:
            <textarea 
            type= "text" 
            placeholder= {values.description} 
            name= "description"
            onChange= {handleChange}
          />
          </label>
        </div>

        <div>
          <label>
            Color:
            <input 
            type= "color" 
            placeholder= {values.color} 
            name= "color"
            onChange= {handleChange}
          />
          </label>

          <button>
            Register
          </button>
        </div>
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