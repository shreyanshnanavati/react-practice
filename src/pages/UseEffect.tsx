import { useEffect, useState } from 'react'

export default function UseEffect(){

  const [joke,setJoke] = useState('')
  const [loading,setLoading] = useState(false)

  const fetchJoke = async () => {
    setLoading(true)
    try {
      const res = await fetch('https://icanhazdadjoke.com/',{
        headers: {
          "Accept": "application/json",
        }
      })
      const jokeRes = await res.json()
      setJoke(jokeRes.joke)
    } catch (error) {
      setJoke("Oops! cant fetch the joke")
      console.log(error)
    }
    finally{
      setLoading(false)
    }
    
  }

  useEffect(()=>{
    fetchJoke()
  },[])

  const handleNewJoke = () => {
    fetchJoke()
  }

  return (
    <div className='h-screen p-4 flex justify-center items-center'>
      
      <div className='p-4 bg-white dark:bg-gray-800 shadow-2xl rounded max-w-sm  flex flex-col gap-4 items-center'>
        <h2 className='text-2xl font-semibold'>Today's Dad Joke</h2>
        <p className='text-center max-w-xs'> {loading ? "...Loading" : joke}</p>
        <button className='w-full text-center rounded p-2 bg-teal-900 text-white hover:bg-teal-800 transition' onClick={handleNewJoke}>Get A New One</button>
      </div>

    </div>
  )
}