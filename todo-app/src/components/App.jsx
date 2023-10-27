import React from 'react'
import { 
  Routes, 
  Route,
  useLocation
} from 'react-router-dom'
import Nav from './Nav'
import TodoPage from './TodoPage'
import GoalPage from './GoalPage'
import PageNotFound from './PageNotFound'
import Modal from './Modal'


//const multiRoute = (element) => {
//  return (...paths) => paths.map( path => <Route key={path} path={path} element={element}/> )
//}

function App() {
  const location = useLocation().pathname
  const shouldNavShow = ['/todo', '/goal'].includes(location) 
  return (
    <>
      <main>
      { shouldNavShow &&
        <header>
          <Nav/>
        </header>
        }

        <Routes>
          <Route exact path='/' element={<>Home Page</>}/>
          <Route exact path='/todo' element={<TodoPage/>}/>
          <Route exact path='/goal' element={<GoalPage/>} />
          <Route path='*' element={<PageNotFound/>} />
        </Routes>
      </main>
      <Modal/>
    </>
  )
}

export default App
