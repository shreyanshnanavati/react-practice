import './App.css'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import MainContent from './components/MainContent'
function App() {

  return (
    <>
      {/* parent div */}
      <div className='min-h-screen flex flex-col'>
        <Navbar/>
        <div className="flex flex-1">
          <Sidebar/>
          <MainContent/>
        </div>
      </div>
    </>
  )
}

export default App
