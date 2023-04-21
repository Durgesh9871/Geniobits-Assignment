import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { HomePage } from '../Pages/HomePage'
import { ContactPage } from '../Pages/ContactPage'
import { PropertyPage } from '../Pages/PropertyPage'

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} ></Route>
      <Route path="/contact" element={<ContactPage />} ></Route>
      <Route path="/propertyList" element={<PropertyPage />} ></Route>

    </Routes>
  )
}

export default AllRoutes
