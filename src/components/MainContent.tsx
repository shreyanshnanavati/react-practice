import { JSX } from 'react';
import ComponentComposition from '../pages/ComponentComposition';
import UseState from '../pages/UseState';
import UseEffect from '../pages/UseEffect';

type ChapterKey = 'ComponentComposition' | 'UseState' | 'UseEffect';


export default function MainContent({selectedChapter} : {selectedChapter: ChapterKey}) {
  const lessonMap: Record<ChapterKey, JSX.Element> = {
    ComponentComposition: <ComponentComposition />,
    UseState: <UseState />,
    UseEffect: <UseEffect/>
  };  
  
  return (
    <main className="flex-1 bg-white p-6 text-black">
      {lessonMap[selectedChapter]}
    </main>
  );
}
