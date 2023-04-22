import { type User } from '../types'

interface Props {
  users: User[]
}

export function UsersList ({ users }: Props) {
  return (
    <table>
      <thead>
        <tr>
          <th>Foto</th>
          <th>Nombre</th>
          <th>Apellido</th>
          <th>País</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {users.map(user => (
          <tr key={user.email}>
            <td>
              <img src={user?.picture?.thumbnail} />
            </td>
            <td>{user.name.first}</td>
            <td>{user.name.last}</td>
            <td>{user.location.country}</td>
            <td>
              <button>Borrar</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
