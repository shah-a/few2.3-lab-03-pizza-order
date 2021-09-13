import React from 'react'

function Display(props) {
  const {
    name, mushrooms, tomatoes, onions, pineapples
  } = props

  return (
    <div className="Display">
      <h1>{name}</h1>
      {mushrooms && <p>Mushrooms</p>}
      {tomatoes && <p>Tomatoes</p>}
      {onions && <p>Onions</p>}
      {pineapples && <p>Pineapples</p>}
    </div>
  )
}

export default Display
