import { CreateTodo } from './CreateTodo'
import { type TodoTitle } from './types'

interface Props {
  onAddTodo: ({ title }: TodoTitle) => void
}

export const Header: React.FC<Props> = ({ onAddTodo }) => {
  return (
    <header className='header'>
      <h1>
        Todo
        <img
          style={{ width: '60px', height: 'auto' }}
          src=''
        />
      </h1>

      <CreateTodo saveTodo={onAddTodo} />
    </header>
  )
}
