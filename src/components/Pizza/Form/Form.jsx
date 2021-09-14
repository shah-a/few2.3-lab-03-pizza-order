import React, { useState } from 'react'

function Form(props) {
  const {
    name, setName,
    mushrooms, setMushrooms,
    tomatoes, setTomatoes,
    onions, setOnions,
    pineapples, setPineapples
  } = props

  return (
    <form
      className="Form space-y-5"
      onSubmit={(e) => {
        e.preventDefault()
        setName('')
        setMushrooms(false)
        setTomatoes(false)
        setOnions(false)
        setPineapples(false)
      }}
    >
      <input
        type="text"
        placeholder="Your name"
        className="border rounded-lg"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <div className="flex flex-col space-y-1">
        <label><input
          type="checkbox"
          checked={mushrooms}
          onChange={() => setMushrooms(!mushrooms)}
        /> Mushrooms</label>

        <label><input
          type="checkbox"
          checked={tomatoes}
          onChange={() => setTomatoes(!tomatoes)}
        /> Tomatoes</label>

        <label><input
          type="checkbox"
          checked={onions}
          onChange={() => setOnions(!onions)}
        /> Onions</label>

        <label><input
          type="checkbox"
          checked={pineapples}
          onChange={() => setPineapples(!pineapples)}
        /> Pineapples</label>
      </div>
    </form>
  )
}

export default Form
