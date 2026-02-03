import { useState, type ChangeEvent } from 'react'
import './index.css'

function App() {
  const [a, setA] = useState<string>('')
  const [b, setB] = useState<string>('')
  const [result, setResult] = useState<number | string | null>(null)

  const calculate = (op: '+' | '-' | '*' | '/') => {
    const numA = Number(a)
    const numB = Number(b)

    if (!Number.isFinite(numA) || !Number.isFinite(numB)) {
      setResult('Enter numbers')
      return
    }

    if (op === '+') setResult(numA + numB)
    if (op === '-') setResult(numA - numB)
    if (op === '*') setResult(numA * numB)
    if (op === '/')
      setResult(numB !== 0 ? numA / numB : 'Division by zero')
  }

  const clearAll = () => {
    setA('')
    setB('')
    setResult(null)
  }

  const handleAChange = (e: ChangeEvent<HTMLInputElement>) =>
    setA(e.target.value)

  const handleBChange = (e: ChangeEvent<HTMLInputElement>) =>
    setB(e.target.value)

  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-4 mx-auto my-4">
      <h1 className="text-3xl font-bold">Calculator</h1>

      <input
        type="number"
        value={a}
        onChange={handleAChange}
        className="border p-2 rounded"
        placeholder="First number"
      />

      <input
        type="number"
        value={b}
        onChange={handleBChange}
        className="border p-2 rounded"
        placeholder="Second number"
      />

      <div className="flex gap-2">
        <button onClick={() => calculate('+')} className="px-4 py-2 bg-blue-500 text-white rounded">+</button>
        <button onClick={() => calculate('-')} className="px-4 py-2 bg-blue-500 text-white rounded">-</button>
        <button onClick={() => calculate('*')} className="px-4 py-2 bg-blue-500 text-white rounded">×</button>
        <button onClick={() => calculate('/')} className="px-4 py-2 bg-blue-500 text-white rounded">÷</button>
      </div>

      <p className="text-lg">Result: {result}</p>

      <button
        onClick={clearAll}
        className="px-4 py-2 bg-gray-500 text-white rounded"
      >
        Clear
      </button>
    </div>
  )
}

export default App
