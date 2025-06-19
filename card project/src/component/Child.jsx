import React from 'react'

const Child = ({ name, phone, dept }) => {
  return (
    <div>Child
      <h1>Name: {name}</h1>
      <h1>Phone no: {phone}</h1>
      <h1>Department: {dept}</h1>
    </div>
  )
}

export default Child