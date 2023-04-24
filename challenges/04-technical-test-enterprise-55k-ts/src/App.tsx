import { useEffect, useMemo, useRef, useState } from 'react'
import './App.css'
import { type User } from './types'
import { UsersList } from './components/UsersList'

function App () {
  const [users, setUsers] = useState<User[]>([])
  const [showColors, setShowColors] = useState(false)
  const [sortByCountry, setSortByCountry] = useState(false)
  const [filterCountry, setfilterCountry] = useState<string | null>(null)

  const originalUsers = useRef<User[]>([])
  // useRef -> para guardar un valor que queremos que se comparta entre renderizados
  // pero que al cambiar, no vuelva a renderizar el componente

  const toggleColors = () => {
    setShowColors(!showColors)
  }

  const toggleSortByCountry = () => {
    setSortByCountry(prevState => !prevState)
  }

  const filteredUsers = useMemo(() => {
    console.log('calculate filteredUsers')
    return filterCountry !== null && filterCountry.length > 0
      ? users.filter(user => {
        return user.location.country.toLocaleLowerCase().includes(filterCountry.toLocaleLowerCase())
      })
      : users
  }, [users, filterCountry])

  const sortedUsers = useMemo(() => {
    console.log('calculate sortedUsers')
    // El sort muta el arreglo original (ESTA MAL)
    // Solución 1: [...users].sort(...) (REGULAR)
    // Solución 2: StructuredClone(users).sort(...) REGULAR
    // Solución 3: users.toSorted(...) OK, pero aun no soportado, pero hay solución extendiendo el prototipo de array en los tipos
    return sortByCountry
      ? filteredUsers.toSorted(
        (a, b) => a.location.country.localeCompare(b.location.country)
      )
      : filteredUsers
  }, [filteredUsers, sortByCountry])

  // const filteredUsers = (() => {
  //   console.log('calculate filteredUsers')
  //   return filterCountry !== null && filterCountry.length > 0
  //     ? users.filter(user => {
  //       return user.location.country.toLocaleLowerCase().includes(filterCountry.toLocaleLowerCase())
  //     })
  //     : users
  // })()

  // const sortedUsers = (() => {
  //   console.log('calculate sortedUsers')
  //   return sortByCountry
  //     ? filteredUsers.toSorted(
  //       (a, b) => a.location.country.localeCompare(b.location.country)
  //     )
  //     : filteredUsers
  // })()

  const handleDelete = (email: string) => {
    const filteredUsers = users.filter((user) => user.email !== email)
    setUsers(filteredUsers)
  }

  const handleReset = () => {
    setUsers(originalUsers.current)
  }

  useEffect(() => {
    fetch('https://randomuser.me/api/?results=100')
      .then(async res => await res.json())
      .then(data => {
        setUsers(data.results)
        originalUsers.current = data.results
      })
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

        <button onClick={handleReset}>Restaurar estado inicial</button>

        <input placeholder='Filtra por país' onChange={(e) => { setfilterCountry(e.target.value) }} />
      </header>

      <main>

        <UsersList deleteUser={handleDelete} showColors={showColors} users={sortedUsers} />
      </main>
    </div>
  )
}

export default App
