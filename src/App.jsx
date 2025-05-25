import { Routes, Route,} from 'react-router-dom'
import Principal from './Screens/Principal'
import Info from './Screens/Info'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Principal/>}/>
        <Route path='/info' element={<Info/>}/>
      </Routes>
    </>
  )
}

export default App
