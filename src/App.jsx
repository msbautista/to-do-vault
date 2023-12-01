import { ToDoCounter } from './ToDoCounter/ToDoCounter'
import { ToDoSearch } from './ToDoSearch/ToDoSearch'
import { ToDoList } from './ToDoList/ToDoList'
import { ToDoItem } from './ToDoItem/ToDoItem'
import { CreateToDoButton } from './CreateToDoButton/CreateToDoButton'

const defaultToDos = [
  { text: 'Study react', completed: false },
]

function App() {
  return (
    <>
      <ToDoCounter total={1} completed={10} />
      <ToDoSearch />
      <ToDoList>
        {defaultToDos.map((toDo) => {
          return (
            <ToDoItem key={toDo.text} text={toDo.text} completed={toDo.completed}/>
          )
        })}
      </ToDoList>
      <CreateToDoButton />
    </>
  )
}

export default App
