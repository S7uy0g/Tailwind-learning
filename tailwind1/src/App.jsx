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
    {/*Typography*/}
    <div>
      <h1 className='text-custom font-medium'>Heading 1</h1>
      <h1 className='text-xl'>Heading 2</h1>
      <h1 className='text-custom hover:font-serif'>Heading 3</h1>
      <p className='italic md:not-italic'>This is a paragraph1</p>
      <p className='text-center underline decoration-wavy'>This is a paragraph2</p>
      <p>This is a paragraph3</p>
      <p className='note'>This is a note</p>
    </div>
    {/*Spaces and sizes*/}
    <div>
      <div className='w-2 h-2 bg-slate-400 opacity-20'></div>
      <h1 className='-mt-1 bg-slate-300'>Hello</h1>
      <h1 className='pt-1 bg-gray-600 font-bold'>Hello World</h1>
      <div className='flex space-x-4'>
        <div className='w-1/2 h-2 bg-red-400 '></div>
        <div className='w-1/2 h-2 bg-blue-400'></div>
      </div>
      <div class="flex flex-col space-y-1 mt-1">
        <div className='bg-red-400'>01</div>
        <div className='bg-red-400'>02</div>
        <div className='bg-red-400'>03</div>
      </div>
    </div>
    </>
  )
}

export default App
