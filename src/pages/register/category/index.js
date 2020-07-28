import React from "react"
import { Link } from "react-router-dom"
import PageDefault from "../../../components/PageDefault"

function registerCategory() {
  return (
    <PageDefault>
      <h1>Register category</h1>
      <form>
        <label>
          Category Name:
          <input type= "text" />
        </label>
        <button>
          Register
        </button>
      </form>

      <Link to= "/">
        Back to home
      </Link>
    </PageDefault>
  )
}

export default registerCategory