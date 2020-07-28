import React from "react"
import { Link } from "react-router-dom"
import PageDefault from "../../../components/PageDefault"

function registerVideo() {
  return (
    <PageDefault>
      <h1>Register video</h1>

      <Link to= "/register/category">
        Register Category
      </Link>
    </PageDefault>
  )
}

export default registerVideo