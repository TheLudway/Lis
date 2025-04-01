import { Routes, Route,} from 'react-router-dom'
import Principal from './Screens/Principal'
function App() {
  return (
    <>
      <Routes>
        <Route path='/webNicolas/' element={<Principal/>}/>
      </Routes>
    </>
  )
}

export default App
