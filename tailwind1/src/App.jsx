import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return (
    <>
    {/*basic tailwind including colors*/}
    {/* <h1 className="text-green-600">
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
    </h1> */}
    {/*media customization*/}
    {/* <h1 className="sm:text-3xl md:bg-slate-400 lg:text-4xl">
      Hello World!
    </h1>
    <h1 className="sm:bg-slate-100 md:bg-slate-200 lg:bg-slate-300 sm:ml-1 md:ml-3 lg:mt-1">
      Hello World!
    </h1>
    <h1 className='custom'>
      Hello World
    </h1> */}
    {/*Typography*/}
    {/* <div>
      <h1 className='text-custom font-medium'>Heading 1</h1>
      <h1 className='text-xl'>Heading 2</h1>
      <h1 className='text-custom hover:font-serif'>Heading 3</h1>
      <p className='italic md:not-italic'>This is a paragraph1</p>
      <p className='text-center underline decoration-wavy'>This is a paragraph2</p>
      <p>This is a paragraph3</p>
      <p className='note'>This is a note</p>
    </div> */}
    {/*Spaces and sizes*/}
    {/* <div>
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
    </div> */}
    {/*Flex*/}
    {/* <div>
      <div className='bg-red-400 h-1 flex justify-around items-center w-full'>
        <div>Home</div>
        <div>Contact</div>
        <div>Title</div>
      </div>
      <div className='flex relative'>
        <div className='bg-blue-400 h-6 absolute flex flex-col self-center justify-around'>
          <div>button</div>
          <div>button</div>
          <div>button</div>
          <div>button</div>
        </div>
        <div className='bg-green-400 h-screen w-full flex justify-center items-center'>Content</div>
      </div>
    </div> */}
    {/*Grid*/}
    {/* <div>
      <div className='grid lg:grid-cols-4 gap-[10px] md:grid-cols-3 sm:grid-cols-2'>
        <div className='bg-sky-400 rounded-lg col-span-4'>1</div>
        <div className='bg-sky-400 rounded-lg col-start-2 col-end-4'>2</div>
        <div className='bg-sky-400 rounded-lg col-span-2'>3</div>
        <div className='bg-sky-400 rounded-lg col-span-2'>4</div>
        <div className='bg-sky-400 rounded-lg col-start-2'>5</div>
        <div className='bg-sky-400 rounded-lg'>6</div>
        <div className='bg-sky-400 rounded-lg col-span-4'>7</div>
      </div>
    </div>
    <div className="grid grid-rows-4 grid-flow-col">
      <div className='hover:col-span-2'>01</div>
      <div>02</div>
      <div>02</div>
      <div>02</div>
      <div>02</div>
      <div>02</div>
      <div>02</div>
      <div>02</div>
      <div>09</div>
    </div> */}
    {/*Layputs*/}
    <div class="container mx-auto bg-slate-600">
      <p>Hello</p>
      <p>Hello</p>
      <p>Hello</p>
    </div>
    <div className='container mx-auto my-1 columns-3xs lg:columns-sm xl:columns-4'>
      <img src="https://imgs.search.brave.com/XKUD749tjOvSP2maFZkPmTckY7mAfnglBg7J6YgWEgg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/aXN0b2NrcGhvdG8u/Y29tL3Jlc291cmNl/cy9pbWFnZXMvSG9t/ZVBhZ2UvRm91clBh/Y2svQzItUGhvdG9z/LWlTdG9jay0xMzU2/MTk3Njk1LmpwZw" alt="" srcset="" />
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi ullam reprehenderit vel excepturi, eveniet eius minima assumenda, dolorem necessitatibus, adipisci architecto quibusdam voluptates quos dignissimos similique praesentium! Eveniet, architecto sequi?</p>
      <img src="https://imgs.search.brave.com/XKUD749tjOvSP2maFZkPmTckY7mAfnglBg7J6YgWEgg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/aXN0b2NrcGhvdG8u/Y29tL3Jlc291cmNl/cy9pbWFnZXMvSG9t/ZVBhZ2UvRm91clBh/Y2svQzItUGhvdG9z/LWlTdG9jay0xMzU2/MTk3Njk1LmpwZw" alt="" srcset="" />
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi ullam reprehenderit vel excepturi, eveniet eius minima assumenda, dolorem necessitatibus, adipisci architecto quibusdam voluptates quos dignissimos similique praesentium! Eveniet, architecto sequi?</p>
    </div>
    <div className='container mx-auto my-1 columns-3xs'>
      <img src="https://imgs.search.brave.com/XKUD749tjOvSP2maFZkPmTckY7mAfnglBg7J6YgWEgg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/aXN0b2NrcGhvdG8u/Y29tL3Jlc291cmNl/cy9pbWFnZXMvSG9t/ZVBhZ2UvRm91clBh/Y2svQzItUGhvdG9z/LWlTdG9jay0xMzU2/MTk3Njk1LmpwZw" alt="" srcset="" />
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi ullam reprehenderit vel excepturi, eveniet eius minima assumenda, dolorem necessitatibus, adipisci architecto quibusdam voluptates quos dignissimos similique praesentium! Eveniet, architecto sequi?</p>
    </div>
    <div class="table w-full ...">
      <div class="table-header-group ...">
        <div class="table-row">
          <div class="table-cell text-left ...">Song</div>
          <div class="table-cell text-left ...">Artist</div>
          <div class="table-cell text-left ...">Year</div>
        </div>
      </div>
      <div class="table-row-group">
        <div class="table-row">
          <div class="table-cell ...">The Sliding Mr. Bones (Next Stop, Pottersville)</div>
          <div class="table-cell ...">Malcolm Lockyer</div>
          <div class="table-cell ...">1961</div>
        </div>
        <div class="table-row">
          <div class="table-cell ...">Witchy Woman</div>
          <div class="table-cell ...">The Eagles</div>
          <div class="table-cell ...">1972</div>
        </div>
        <div class="table-row">
          <div class="table-cell ...">Shining Star</div>
          <div class="table-cell ...">Earth, Wind, and Fire</div>
          <div class="table-cell ...">1975</div>
        </div>
      </div>
    </div>
    <div className="relative w-[150px] h-[150px] m-1 bg-slate-600">
      <div className="absolute bottom-0 left-0 bg-red-300 w-[125px] h-[125px]"></div>
    </div>
    </>
  )
}

export default App
