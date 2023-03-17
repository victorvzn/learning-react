import { type ListOfTodos } from './types'

interface Props {
  todos: ListOfTodos
}

// NOTE: <Props> es un generico de ts que solicita React.FC
export const Todos: React.FC<Props> = ({ todos }) => {
  return (
    <ul>
      {todos.map(todo => (
        <li key={todo.id}>
          {todo.title}
        </li>
      ))}
    </ul>
  )
}
