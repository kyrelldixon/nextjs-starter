import { useState } from 'react'

export function Counter() {
  const [count, setCount] = useState(0)

  const increment = () => setCount((count) => count + 1)
  const decrement = () => setCount((count) => count - 1)

  return (
    <div className="flex flex-col items-center justify-center h-48">
      <h1 className="mb-8 text-6xl font-bold">{count}</h1>
      <div className="flex space-x-4">
        <button
          className="px-4 py-2 text-white bg-blue-500 rounded"
          onClick={decrement}
        >
          -
        </button>
        <button
          className="px-4 py-2 text-white bg-blue-500 rounded"
          onClick={increment}
        >
          +
        </button>
      </div>
    </div>
  )
}
