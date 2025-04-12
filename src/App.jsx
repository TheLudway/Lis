import { Routes, Route,} from 'react-router-dom'
import Principal from './Screens/Principal'
import Info from './Screens/Info'

function App() {
  return (
    <>
      <Routes>
        <Route path='/webNicolas/' element={<Principal/>}/>
        <Route path='/webNicolas/info' element={<Info/>}/>
      </Routes>
    </>
  )
}

export default App
