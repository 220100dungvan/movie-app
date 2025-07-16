import { useState } from "react";
export function Search({ searchTerm, setSearchTerm }) {
  return (
    <div className="search">
      <div>
        <img src="./search.svg" alt="" />
        <input
          type="text"
          placeholder="Search through 300+ movies online"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
    </div>
  );
}
