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
    <main className="flex-1 bg-gray-50 dark:bg-gray-950 p-6 text-gray-900 dark:text-gray-100">
      {lessonMap[selectedChapter]}
    </main>
  );
}
