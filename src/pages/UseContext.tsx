import { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'

export default function UseContext(){
  const {theme,setTheme} = useContext(ThemeContext)
    const handleTheme = () => {
      setTheme((prevTheme) => prevTheme === 'light' ? 'dark' : 'light')
    }
  return (
    <div>
      <div className='flex h-screen  justify-center items-center'>
          <button className='p-2 rounded bg-blue-500 dark:bg-blue-400 shadow-md' onClick={handleTheme}>Change Theme</button>
      </div>
    </div>
  )
}