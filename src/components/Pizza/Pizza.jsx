import React, { useState } from 'react'

function Pizza() {
  const [name, setName] = useState('');
  const [toppings, setToppings] = useState(['mushrooms', 'tomatoes', 'onions', 'pineapples'])

  return (
    <div className="Pizza mx-auto mt-20">
      <form
        className="space-y-5"
        onSubmit={(e) => {
          e.preventDefault();
          console.log('form submitted');
        }}
      >
        <h1 className="text-4xl">Pizza Order</h1>
        <input
          type="text"
          placeholder="Enter your name"
          className="border rounded-lg"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <div className="flex flex-col space-y-1">
          {toppings.map((topping) => {
            return (
              <label key={`key-${topping}`}>
                <input
                  type="checkbox"
                /> {topping}
              </label>
            );
          })}
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
