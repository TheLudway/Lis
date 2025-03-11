import {Routes, Route, Link} from 'react-router-dom'
import Principal from './Screens/Principal'
function App() {
  return (
    <>
      {/*<nav class="bg-linear-to-r from-sky-500 to-primary-darkBlue">
        <Link to='/' class="font-code text-secundary-white">About me</Link>
      </nav>*/}
      <Routes>
        <Route path='/webNicolas/' element={<Principal/>}/>
      </Routes>
    </>
  )
}

export default App
