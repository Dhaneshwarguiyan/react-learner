import './App.css'
import Navbar from './components/Navbar'
import Theory from './components/Theory'
import Interactive from './components/Interactive'

function App() {
  return (
    <div className='app'>
      <Navbar />
      <Interactive />
      <Theory />
    </div>
  )
}

export default App
