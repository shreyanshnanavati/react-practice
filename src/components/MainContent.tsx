import { JSX } from 'react';
import ComponentComposition from '../pages/ComponentComposition';
import UseState from '../pages/UseState';
import UseEffect from '../pages/UseEffect';
import UseContext from '../pages/UseContext';

type ChapterKey = 'ComponentComposition' | 'UseState' | 'UseEffect' | 'UseContext';


export default function MainContent({selectedChapter} : {selectedChapter: ChapterKey}) {
  const lessonMap: Record<ChapterKey, JSX.Element> = {
    ComponentComposition: <ComponentComposition />,
    UseState: <UseState />,
    UseEffect: <UseEffect/>,
    UseContext: <UseContext/>
  };  
  
  return (
    <main className="flex-1 bg-gray-50 dark:bg-gray-950 p-6 text-gray-900 dark:text-gray-100">
      {lessonMap[selectedChapter]}
    </main>
  );
}
