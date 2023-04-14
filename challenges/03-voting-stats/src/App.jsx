import './App.css'
import { useEffect, useState } from 'react'

export default function App () {
  const [results, setResults] = useState({
    young: { counter: 0, total: 0 },
    mid: { counter: 0, total: 0 },
    old: { counter: 0, total: 0 }
  })

  // young: 18-25, mid: 26-35, old: 36-55
  const voters = [
    { name: 'Bob', age: 30, voted: true },
    { name: 'Jake', age: 32, voted: true },
    { name: 'Kate', age: 25, voted: false },
    { name: 'Sam', age: 20, voted: false },
    { name: 'Phil', age: 21, voted: true },
    { name: 'Ed', age: 55, voted: true },
    { name: 'Tami', age: 54, voted: true },
    { name: 'Mary', age: 31, voted: false },
    { name: 'Becky', age: 43, voted: false },
    { name: 'Joey', age: 41, voted: true },
    { name: 'Jeff', age: 30, voted: true },
    { name: 'Zack', age: 19, voted: false }
  ]

  useEffect(() => {
    const resultWithType = voters.map((voter) => {
      if (voter.age >= 18 && voter.age <= 25) {
        return { ...voter, type: 'young' }
      }
      if (voter.age >= 26 && voter.age <= 35) {
        return { ...voter, type: 'mid' }
      }
      if (voter.age >= 36 && voter.age <= 55) {
        return { ...voter, type: 'old' }
      }
    })

    const result = {
      young: { counter: 0, total: 0 },
      mid: { counter: 0, total: 0 },
      old: { counter: 0, total: 0 }
    }

    for (const voter of resultWithType) {
      if (result[voter.type]) {
        result[voter.type].total += 1
      }
      if (result[voter.type] && voter.voted) {
        result[voter.type].counter = result[voter.type].counter + 1
      }
    }
    setResults(result)
  }, [])

  return (
    <div className='App'>
      <h1>Voting Stats</h1>
      <p>
        Young: {results.young.counter} / {results.young.total}
      </p>
      <p>
        Mid: {results.mid.counter} / {results.mid.total}
      </p>
      <p>
        Old: {results.old.counter} / {results.old.total}
      </p>
    </div>
  )
}
