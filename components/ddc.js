import React from "react";
import { useState } from "react";
export default function DropdownComponent() {
  const [arr, setArr] = useState(false);
  function handleDown() {
    setArr(!arr);
  }
  return (
    <div className="inline-flex bg-white border rounded-md border-none drop-shadow">
      <a
        href="#"
        className="px-4 py-2 text-sm text-gray-600 hover:text-gray-700 hover:bg-gray-50 rounded-l-md"
      >
        SortBy
      </a>

      <div className="relative">
        <button
          onClick={handleDown}
          type="button"
          className="inline-flex items-center justify-center h-full px-2 text-gray-600 border-l border-gray-100 hover:text-gray-700 rounded-r-md hover:bg-gray-50"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>

        {arr ? (
          <div className="absolute z-10 w-56 mt-4 origin-top-right bg-white border border-gray-100 rounded-md shadow-lg">
            <div className="p-2">
              <a
                href="#"
                className="block  py-2 text-sm text-gray-500 rounded-lg hover:bg-gray-50 hover:text-gray-700"
              >
                Author
              </a>
              <a
                href="#"
                className="block  py-2 text-sm text-gray-500 rounded-lg hover:bg-gray-50 hover:text-gray-700"
              >
                Tittle
              </a>
            </div>
          </div>
        ) : (
          console.log("")
        )}
      </div>
    </div>
  );
}
