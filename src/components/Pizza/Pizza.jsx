import React, { useState } from 'react'
import Form from './Form/Form'
import Display from './Display/Display'

function Pizza() {
  const [name, setName] = useState('')

  const [mushrooms, setMushrooms] = useState(false)
  const [tomatoes, setTomatoes] = useState(false)
  const [onions, setOnions] = useState(false)
  const [pineapples, setPineapples] = useState(false)

  const props = {
    name, setName,
    mushrooms, setMushrooms,
    tomatoes, setTomatoes,
    onions, setOnions,
    pineapples, setPineapples
  }

  return (
    <div className="Pizza mx-auto mt-20">
      <h1 className="text-4xl mb-5">Pizza Order</h1>
      <Form {...props} />
      <Display {...props} />
    </div>
  )
}

export default Pizza
