// Diferencia entre type e interface: type no se puede extender

export interface Todo {
  id: string
  title: string
  completed: boolean
}

// export type TodoId = Todo['title'] // Válido pero es preferible usar Pick
export type TodoId = Pick<Todo, 'id'>
export type TodoTitle = Pick<Todo, 'title'>
export type TodoCompleted = Pick<Todo, 'completed'>

export type ListOfTodos = Todo[]
