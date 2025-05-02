import { useState } from "react";

const debouncedSearch = (fn, delay:number) => {
  let timerId  = null
  return function (...args:any[]) {
    if(timerId !== null){
      clearInterval(timerId)
    }
    timerId = setTimeout(() => {fn.apply(this, args);}, delay)

  }
  return fn;
};

export default function SearchInput() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Search: ", searchTerm);
  };

  const handleSearchTerm = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div>
      <div className="bg-violet-200 h-screen flex justify-center items-center flex-col gap-4">
        <form onSubmit={handleSubmit}>
          <div className="flex items-center gap-2 bg-white shadow-md p-4">
            <label htmlFor="">Search:</label>
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
