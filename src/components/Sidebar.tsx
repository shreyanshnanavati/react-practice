import { NavLink } from "react-router";

type ChapterKey =
  | "ComponentComposition"
  | "UseState"
  | "UseEffect"
  | "UseContext";

const chapters: { key: ChapterKey; label: string }[] = [
  { key: "component-composition", label: " Component Composition" },
  { key: "use-state", label: "useState" },
  { key: "use-effect", label: "useEffect" },
  { key: "use-context", label: "useContext" },
];

export default function Sidebar() {
  return (
    <aside className="w-64 bg-gray-100 dark:bg-gray-900 dark:border-gray-800 dark:text-gray-300 border-r border-gray-200 text-gray-700 p-4 text-black">
      <div className="flex flex-col gap-2">
        {chapters.map(({ key, label }) => {
          return (
            <NavLink to={`${key}`}>{label}</NavLink>
            // <div key={key} className={`p-4 ${key === selectedChapter ? "bg-blue-500 dark:bg-blue-400" : "bg-blue-500 dark:bg-blue-500"} rounded hover:bg-blue-600 transition text-white`} onClick={() => setChapter(key)}>{label}</div>
          );
        })}
      </div>
    </aside>
  );
}
