import { useState } from 'react'

type ChapterKey = 'ComponentComposition' | 'UseState';

const chapters : {key:ChapterKey,label:string}[] = [
  {key:"ComponentComposition", label:" Component Composition"},
  {key:"UseState", label:" useState"}
]

export default function Sidebar({selectedChapter, setChapter} : {selectedChapter: string, setChapter: any}) {
  return (
    <aside className='w-64 bg-gray-100 p-4 text-black'>
      <div className='flex flex-col gap-2'>
        {chapters.map(({key,label}) => {
          return (
            <div className={`p-4 ${key === selectedChapter ? "bg-gray-600" : "bg-gray-400"} rounded hover:bg-gray-600 transition`} onClick={() => setChapter(key)}>{label}</div>
          )
        })}
      </div>
    </aside>
  )
}