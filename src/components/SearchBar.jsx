import { useState } from "react";

function SearchBar({ onSearch }) {
  const [searchId, setSearchId] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(searchId);
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6 max-w-md mx-auto">
      <div className="relative">
        <input
          type="text"
          value={searchId}
          onChange={(e) => setSearchId(e.target.value)}
          placeholder="Enter user ID"
          className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
        />
        <button
          type="submit"
          className="absolute right-1 top-1 bottom-1 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none shadow-md"
        >
          Search
        </button>
      </div>
    </form>
  );
}

export default SearchBar;
