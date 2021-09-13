import React, { useState } from 'react'

function Pizza() {
  const [name, setName] = useState('')

  const [mushrooms, setMushrooms] = useState(false)
  const [tomatoes, setTomatoes] = useState(false)
  const [onions, setOnions] = useState(false)
  const [pineapples, setPineapples] = useState(false)

  return (
    <div className="Pizza mx-auto mt-20">
      <h1 className="text-4xl mb-5">Pizza Order</h1>
      <form
        className="space-y-5"
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

        <button
          type="submit"
          className="self-end"
        >
          Submit
        </button>
      </form>
    </div>
  )
}

export default Pizza
