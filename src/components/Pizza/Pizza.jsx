import React, { useState } from 'react'

function Pizza() {
  const [name, setName] = useState('');
  const [toppings, setToppings] = useState(['mushrooms', 'tomatoes', 'onions', 'pineapples'])

  return (
    <div className="Pizza mx-auto mt-20">
      <form className="flex flex-col">
        <h1 className="text-4xl">Pizza Order</h1>
        <input type="text" placeholder="Enter your name" className="border rounded-lg self-start" />
          {toppings.map((topping) => {
            return (
              <label key={`key-${topping}`}>
                <input type="checkbox" /> {topping}
              </label>
            );
          })}
        <button
          type="submit"
          className="self-start border px-5 py-2 rounded-lg text-white bg-green-500 hover:bg-green-600"
        >
          Submit
        </button>
      </form>
    </div>
  )
}

export default Pizza
