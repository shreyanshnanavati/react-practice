export default function UseState(){
  return (
    <div>
      <div className='h-screen flex bg-teal-600'> 
        <div className='flex-1 bg-teal-300 pt-4'>
          <div className='h-screen flex flex-col gap-4 p-4 bg-teal-200 '>
            <h2 className='text-2xl'>Add your Expense</h2>
            <label>Title: 
              <input className='p-4' type="text" placeholder='Title'/>
              </label>
            <label>Category: <input className='p-4' type="text" placeholder='Title'/></label>
            <label>Expense: <input className='p-4' type="text" placeholder='Title'/></label>
            <button>Submit</button>
          </div>
        </div> 
        <div className='flex-1 bg-teal-600'>
          <div className='h-screen flex flex-col'>
            <div className='flex-1 p-4  bg-teal-800'>
              <h2 className='text-2xl'> Summary </h2>
              <div className='mt-5'> Total Spent </div>
            </div>
            <div className='flex-2 p-4  bg-teal-500'>
              <h2 className='text-2xl'> Recent Transactions</h2>
            </div>
          </div>
        </div> 
      </div>
    </div>
  )
}