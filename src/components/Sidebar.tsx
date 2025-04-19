export default function Sidebar({selectedChapter, changeChapter} : {selectedChapter: string, changeChapter: any}) {
  return (
    <aside className='w-64 bg-gray-100 p-4 text-black'>
      <div className='flex flex-col gap-2'>
        <div className='p-4 bg-gray-400 rounded hover:bg-gray-600 transition' onClick={() => changeChapter("ComponentComposition")}>Component Composition</div>
        <div className='p-4 bg-gray-400 rounded hover:bg-gray-600 transition' onClick={() => changeChapter("UseState")}>useState</div>
      </div>
    </aside>
  )
}