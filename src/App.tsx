import './App.css'

function App() {

  return (
    <>
      {/* parent div */}
      <div className='min-h-screen flex flex-col'>
        <header className='h-16 bg-gray-800 text-white px-4 flex items-center'>
          Dashboard Header
        </header>
        <div className="flex flex-1">
          <aside className='w-64 bg-gray-100 p-4 text-black'>Sidebar</aside>
          <main className='flex-1 bg-white p-6 text-black'> Main Content</main>
        </div>
      </div>
    </>
  )
}

export default App
