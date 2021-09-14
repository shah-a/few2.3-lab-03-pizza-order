import React from 'react'

function Display(props) {
  const {
    name, mushrooms, tomatoes, onions, pineapples
  } = props

  return (
    <div className="Display space-y-5 text-center h-48">
      <h2 className="text-center font-bold">Your order</h2>
      <h2>{name}</h2>
      <div className="space-y-1">
        {mushrooms && <p>Mushrooms</p>}
        {tomatoes && <p>Tomatoes</p>}
        {onions && <p>Onions</p>}
        {pineapples && <p>Pineapples</p>}
      </div>
    </div>
  )
}

export default Display
