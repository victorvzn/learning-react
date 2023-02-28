import { useEffect, useRef, useState } from 'react'

import List from './components/List'
import Form from './components/Form'

import { Sub } from './types'

interface AppState {
  subs: Sub[]
}

const INITIAL_STATE = [
  {
    nick: 'victorvzn',
    subMonths: 7,
    avatar: 'https://i.pravatar.cc/150?u=victorvzn',
    description: 'Victorvzn hace de moderador'
  },
  {
    nick: 'samyvzn',
    subMonths: 3,
    avatar: 'https://i.pravatar.cc/150?u=samyvzn'
  }
]

function App () {
  const [subs, setSubs] = useState<AppState['subs']>([])
  const divRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setSubs(INITIAL_STATE)
  }, [])

  const handleNewSub = (newSub: Sub): void => {
    setSubs(subs => [...subs, newSub])
  }

  return (
    <div ref={divRef}>
      <h1>Subscriber List</h1>

      <List subs={subs} />

      <Form onNewSub={handleNewSub} />
    </div>
  )
}

export default App
