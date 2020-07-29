import React, { useState } from "react"
import { Link } from "react-router-dom"
import PageDefault from "../../../components/PageDefault"

function RegisterCategory() {
  const [categories, setCategories] = useState(["Test"]) 
  const [categoryName, setCategoryName] = useState("Movies")
  
  return (
    <PageDefault>
      <h1>Register category: {categoryName}</h1>

      <form onSubmit= {function handleSubmit(eventInfo) {
          eventInfo.preventDefault()
          setCategories([
            ...categories,
            categoryName
          ])
        }}
      >
        <label>
          Category Name:
          <input 
          type= "text" 
          placeholder= {categoryName} 
          onChange= {function newValueCapture(eventInfo) {
            setCategoryName(eventInfo.target.value)
          }}
        />
        </label>
        <button>
          Register
        </button>
      </form>
      
      <ul>
          {categories.map((category, index) => {
            return (
              <li key= {`${category}${index}`}>
                {category}
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