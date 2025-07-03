import React from 'react'
import './App.css'
import Random from './components/Random'
import Tags from './components/Tags'
function App() {
  return (
       <div  className='w-full h-screen flex flex-col background  relative  overflow-x-hidden items-center'>
          <div className=' bg-white rounded-sm w-11/12 top-10 h-18  flex justify-center items-center text-4xl mx-auto text-black font-bold uppercase mt-15'>
            Random GIFS
          </div>
          <div className='flex flex-col items-center mt-8  gap-y-10 w-full'>
            <Random/>
            <Tags/>
          </div>
          
       </div>
  )
}

export default App
