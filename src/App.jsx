import {Routes, Route, Link} from 'react-router-dom'
import Principal from './Screens/Principal'
function App() {
  return (
    <>
      <nav class="bg-secundary-blue">
        <Link to='/' class="">Nicolas</Link>
      </nav>
      <Routes>
        <Route path='/' element={<Principal/>}/>
      </Routes>
    </>
  )
}

export default App
