// Diferencia entre type e interface: type no se puede extender

export interface Todo {
  id: string
  title: string
  completed: boolean
}

export type ListOfTodos = Todo[]
