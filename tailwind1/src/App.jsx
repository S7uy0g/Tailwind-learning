import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return (
    <>
    {/*basic tailwind including colors*/}
    <h1 className="text-green-600">
      Hello world!
    </h1>
    <h1 className="bg-yellow-600">
      Hello world!
    </h1>
    <h1 className="bg-zinc-600 text-yellow-300">
      Hello world!
    </h1>
    <h1 className="bg-zinc-600 text-yellow-300 border-4 border-zinc-800">
      Hello world!
    </h1>
    <h1 className="bg-skin text-red-500 border-4 border-zinc-800">
      Hello World!
    </h1>
    {/*media customization*/}
    <h1 className="sm:text-3xl md:bg-slate-400 lg:text-4xl">
      Hello World!
    </h1>
    <h1 className="sm:bg-slate-100 md:bg-slate-200 lg:bg-slate-300 sm:ml-1 md:ml-3 lg:mt-1">
      Hello World!
    </h1>
    <h1 className='custom'>
      Hello World
    </h1>
    </>
  )
}

export default App
