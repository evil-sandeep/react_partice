// Search Filter

// Create a list of names (e.g., ["Sandeep", "Rahul", "Priya", "Sneha", "Amit"])
// Add a search input — as the user types, show only names that match the search text.
// (Hint: use .filter() and useState)

import React, { useState } from 'react'
 
const SearchFilter = () => {
    const [name, setName] = useState(["Sandeep", "Rahul", "Priya", "Sneha", "Amit"])
    const [search, setSearch] = useState('')

    const filterData = name.filter((i =>
        i.toLowerCase().includes(search.toLowerCase())
    ))

    return (
       <div>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className='border rounded-lg py-2 mx-2'
        placeholder='Search name...'
      />

      <ul>
        {search.length>0 &&  filterData.map((person, index) => (
          <li key={index}>{person}</li>
        ))}
      </ul>
    </div>
    )
}
export default SearchFilter