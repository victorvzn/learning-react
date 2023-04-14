import './App.css'
import { useEffect, useState } from 'react'

const INITIAL_STATE = {
  young: { counter: 0, total: 0 },
  mid: { counter: 0, total: 0 },
  old: { counter: 0, total: 0 }
}

export default function App () {
  const [results, setResults] = useState(INITIAL_STATE)

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

  const getVoterType = ({ age }) => {
    if (age >= 18 && age <= 25) return 'young'
    if (age >= 26 && age <= 35) return 'mid'
    if (age >= 36 && age <= 55) return 'old'
  }

  const hasVoted = ({ voted }) => voted

  useEffect(() => {
    for (const voter of voters) {
      const type = getVoterType(voter)
      const hasVote = hasVoted(voter)

      // if (hasVote) {
      //   console.log({ name: voter.name, type, hasVote })
      // }

      setResults(prev => {
        const clonePrev = structuredClone(prev)

        clonePrev[type].total += 1

        if (hasVote) {
          clonePrev[type].counter += 1
        }

        return { ...prev, ...clonePrev }
      })
    }
  }, [])

  return (
    <div className='App'>
      <h1>Voting Stats</h1>

      {JSON.stringify(results)}

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
