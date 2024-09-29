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
      <div className="flex flex-col space-y-1 mt-1">
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
    {/* <div className="container mx-auto bg-slate-600">
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
    <div className="table w-full ">
      <div className="table-header-group ">
        <div className="table-row">
          <div className="table-cell text-left ">Song</div>
          <div className="table-cell text-left ">Artist</div>
          <div className="table-cell text-left ">Year</div>
        </div>
      </div>
      <div className="table-row-group">
        <div className="table-row">
          <div className="table-cell ">The Sliding Mr. Bones (Next Stop, Pottersville)</div>
          <div className="table-cell ">Malcolm Lockyer</div>
          <div className="table-cell ">1961</div>
        </div>
        <div className="table-row">
          <div className="table-cell ">Witchy Woman</div>
          <div className="table-cell ">The Eagles</div>
          <div className="table-cell ">1972</div>
        </div>
        <div className="table-row">
          <div className="table-cell ">Shining Star</div>
          <div className="table-cell ">Earth, Wind, and Fire</div>
          <div className="table-cell ">1975</div>
        </div>
      </div>
    </div>
    <div className="relative w-[150px] h-[150px] m-1 bg-slate-600">
      <div className="absolute bottom-0 left-0 bg-red-300 w-[125px] h-[125px]"></div>
    </div> */}
    {/*Borders*/}
    {/* <div className="w-full border-8 border-sky-500">Hello</div>
    <div className="divide-y divide-slate-700 ">
      <div>01</div>
      <div>02</div>
      <div>03</div>
    </div>
    <div className="border-solid border-2 border-sky-500 ">Button</div>
    <div className="border-dashed border-2 border-sky-500 ">Button</div>
    <div className="border-dotted border-2 border-sky-500 ">Button</div>
    <div className="border-double border-4 border-sky-500 ">Button</div>
    <div className='flex'>
      <div className="rounded w-2 h-2 bg-slate-600"></div>
      <div className="rounded-md w-2 h-2 bg-slate-600"></div>
      <div className="rounded-lg w-2 h-2 bg-slate-600"></div>
      <div className="rounded-full w-2 h-2 bg-slate-600"></div>
    </div>
    <button className='rounded-lg bg-blue-500 p-[10px] mt-1 text-white hover:scale-110 duration-300'><strong>send</strong></button> */}
    {/*Effects*/}
    <div className='flex'>
      <div className="shadow-2xl shadow-black w-1 h-1 bg-white-600 m-[10px]"></div>
      <div className="shadow-inner shadow-black w-1 h-1 bg-white-600 m-[10px] cursor-pointer"></div>
      <button class="bg-cyan-500 shadow-md shadow-cyan-500/50 h-1/2 text-white p-[10px] rounded-md self-center hover:opacity-50 hover:shadow-2xl hover:shadow-black">Subscribe</button>
    </div>
    </>
  )
}

export default App
