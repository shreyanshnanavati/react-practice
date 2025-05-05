import { useEffect, useMemo, useState } from "react";

const debouncedSearch = (fn: Function, delay: number) => {
  let timerId: number | null = null;

  return function (...args) {
    if (timerId !== null) {
      clearTimeout(timerId);
    }
    timerId = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
};

export default function SearchInput() {
  const [searchTerm, setSearchTerm] = useState("");

  const logSearch = (term: string) => {
    console.log("Debounced search term:", term);
    // 👇 Here you could call an API instead
  };

  // useMemo ensures `debouncedFn` is stable across re-renders
  const debouncedFn = useMemo(() => debouncedSearch(logSearch, 500), []);

  useEffect(() => {
    if (searchTerm) debouncedFn(searchTerm);
  }, [searchTerm]);

  const handleSearchTerm = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div>
      <div className="bg-violet-200 h-screen flex justify-center items-center flex-col gap-4">
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="flex items-center gap-2 bg-white shadow-md p-4">
            <label>Search:</label>
            <input
              type="text"
              className="p-2 border rounded-2xl"
              value={searchTerm}
              onChange={handleSearchTerm}
            />
            <button className="p-2 bg-blue-600 rounded text-white">
              Submit
            </button>
          </div>
        </form>
        <div className="p-4 bg-white h-32 shadow-md rounded">
          <h2 className="text-2xl">Jokes</h2>
          <hr />
          <p>{searchTerm}</p>
        </div>
      </div>
    </div>
  );
}
