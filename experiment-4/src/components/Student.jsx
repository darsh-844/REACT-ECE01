import React from 'react'

function Student({ name, marks, major }) {
  return (
    <div className="studen">
      <h2>{name}</h2>
      <p>Marks: {marks}</p>
      <p>Major: {major}</p>
    </div>
  )
}

export default Student
