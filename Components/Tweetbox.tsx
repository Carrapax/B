import { CalendarIcon, FaceSmileIcon, MagnifyingGlassCircleIcon, MapPinIcon, PhotoIcon } from '@heroicons/react/16/solid'
import { Input } from 'postcss'
import React, { useState } from 'react'

function Tweetbox() {
const [input, setInput] = useState<string> ('')

  return (
    <div className='felx space-x-2 p-5'>
        <img className='size-14 object-cover rounded-full mt-4 '
        src="https://image.pmgstatic.com/cache/resized/w663/files/images/film/photos/159/871/159871072_50c6fa.jpg" alt="" />

        <div className='flex flex-1 items-center pl-2'>
            <form className='flex flex-1 flex-col'>
                <input 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                type='text' placeholder='whats bein?' className='h-24 w-full text-xl outline-none placeholder:text-xl'/>
                <div className='flex items-center'>
                <div className='flex space-x-2 text-yellow-200 flex-1 '>
                    <MagnifyingGlassCircleIcon className='size-7 cursor-pointer transition: transform duration-150 ease-out hover:scale-150'/>
                    <FaceSmileIcon className='size-7 cursor-pointer transition: transform duration-150 ease-out hover:scale-150'/>
                    <CalendarIcon className='size-7 cursor-pointer transition: transform duration-150 ease-out hover:scale-150'/>
                    <MapPinIcon className='size-7 cursor-pointer transition: transform duration-150 ease-out hover:scale-150'/>
                    <PhotoIcon className='size-7 cursor-pointer transition: transform duration-150 ease-out hover:scale-150'/>
                </div>
                <button disabled={!input}
                className='text-black rounded-full enabled:cursor-pointer bg-yellow-200 px-5 py-2 font-bold disabled:opacity-40'> Beet

                </button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Tweetbox