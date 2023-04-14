import './App.css'

export default function App () {
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

  return (
    <div className='App'>
      <h1>Voting Stats</h1>
      <p>
        Young: 1 / 4
      </p>
      <p>
        Mid: 3 / 4
      </p>
      <p>
        Old: 3 / 4
      </p>
    </div>
  )
}
