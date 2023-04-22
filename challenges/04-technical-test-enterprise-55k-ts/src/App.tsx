import { useEffect, useState } from 'react'
import './App.css'
import { type User } from './types'
import { UsersList } from './components/UsersList'

function App () {
  const [users, setUsers] = useState<User[]>([])
  const [showColors, setShowColors] = useState(false)
  const [sortByCountry, setSortByCountry] = useState(false)

  const toggleColors = () => {
    setShowColors(!showColors)
  }

  const toggleSortByCountry = () => {
    setSortByCountry(prevState => !prevState)
  }

  const sortedUsers = sortByCountry
    // El sort muta el arreglo original (ESTA MAL)
    // Solución 1: [...users].sort(...) (REGULAR)
    // Solución 2: StructuredClone(users).sort(...) REGULAR
    // Solución 3: users.toSorted(...) OK, pero aun no soportado, pero hay solución extendiendo el prototipo de array en los tipos
    ? users.toSorted((a, b) => {
      return a.location.country.localeCompare(b.location.country)
    })
    : users

  const handleDelete = (email: string) => {
    const filteredUsers = users.filter((user) => user.email !== email)
    setUsers(filteredUsers)
  }

  useEffect(() => {
    fetch('https://randomuser.me/api/?results=100')
      .then(async res => await res.json())
      .then(data => { setUsers(data.results) })
      .catch(err => { console.log(err) })
  }, [])
  return (
    <div className='App'>
      <h1>Prueba técnica</h1>

      <header>
        <button onClick={toggleColors}>Colorea filas</button>
        <button onClick={toggleSortByCountry}>
          {sortByCountry ? 'No ordenar por país' : 'Ordenar por país'}
        </button>
        <button onClick={toggleSortByCountry}>Restaurar estado inicial</button>
      </header>

      <main>

        <UsersList deleteUser={handleDelete} showColors={showColors} users={sortedUsers} />
      </main>
    </div>
  )
}

export default App
