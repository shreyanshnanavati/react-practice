import './App.css'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import MainContent from './components/MainContent'
import { useState } from 'react'
function App() {
  const [chapter, setChapter] = useState("ComponentComposition")

  return (
    <>
      {/* parent div */}
      <div className='min-h-screen flex flex-col'>
        <Navbar/>
        <div className="flex flex-1">
          <Sidebar selectedChapter = {chapter} setChapter = {setChapter}/>
          <MainContent selectedChapter={chapter}/>
        </div>
      </div>
    </>
  )
}

export default App
