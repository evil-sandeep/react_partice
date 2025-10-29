// Toggle Dark/Light Mode

// Create a button that toggles between Light Mode and Dark Mode using state.
// When in dark mode → background should be black, text white.
// When in light mode → background white, text black.

import React, { useState } from 'react'

const ToggleDarkLightMode = () => {

    const [mode, setMode] = useState(true)

    return (
        <div
            className={`min-h-screen flex flex-col items-center justify-center transition-all duration-500 ${mode ? 'bg-black text-white' : 'bg-white text-black'
                }`}
        >
            <h1 className="text-2xl mb-4">
                {mode ? 'Dark Mode 🌙' : 'Light Mode ☀️'}
            </h1>
            <button
                onClick={() => setMode(!mode)}
                className="border px-4 py-2 rounded-lg cursor-pointer"
            >
                Switch to {mode ? 'Light' : 'Dark'} Mode
            </button>
        </div>
    )
}
export default ToggleDarkLightMode