import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { HomePage } from '../Pages/HomePage'
import { ContactPage } from '../Pages/ContactPage'
import { PropertyPage } from '../Pages/PropertyPage'
import { SinglePageProduct } from '../Pages/SinglePageProduct'
import {SaveProperty} from "../Pages/saveProperty"
import { Dashboard } from '../Pages/Dashboard'

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} ></Route>
      <Route path="/contact" element={<ContactPage />} ></Route>
      <Route path="/propertyList" element={<PropertyPage />} ></Route>
      <Route path="/propertyList/:id" element={<SinglePageProduct />}></Route>
      <Route path="/saved" element={<SaveProperty />} ></Route>
      <Route path="/details" element={<Dashboard />} ></Route>

    </Routes>
  )
}

export default AllRoutes
