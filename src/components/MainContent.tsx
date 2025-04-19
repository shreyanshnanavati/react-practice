import { JSX } from 'react';
import ComponentComposition from '../pages/ComponentComposition';
import UseState from '../pages/UseState';

type ChapterKey = 'ComponentComposition' | 'UseState';


export default function MainContent({selectedChapter} : {selectedChapter: ChapterKey}) {
  const lessonMap: Record<ChapterKey, JSX.Element> = {
    ComponentComposition: <ComponentComposition />,
    UseState: <UseState />
  };  
  
  return (
    <main className="flex-1 bg-white p-6 text-black">
      {lessonMap[selectedChapter]}
    </main>
  );
}
