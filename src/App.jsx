import './App.css'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

function App() {

  return (
    <>
      <div className='text-center text-white'>
        <h1 className='my-5 text-3xl'>Learning Redux toolkit</h1>
        <AddTodo/>
        <Todos/>
      </div>
    </>
  )
}

export default App