import { MagnifyingGlassIcon } from '@heroicons/react/16/solid'
import React from 'react'
import { Tweet } from 'react-tweet';


function Widgets() {
  return (
    <div className='px-2 mt-2 flex-col col-span-2 hidden lg:inline'>
      {/*Search*/}
      <div className='flex items-center space-x-2.5 bg-gray-400 p-2 
        rounded-full max-w-fit mt-2'>
        <MagnifyingGlassIcon className='size-6 text-yellow-200' />
        <input
          type="text"
          placeholder="Search B"
          className="flex-1 bg-transparent outline-none text-yellow-200"
        />
      </div>

      <Tweet id='1659125302121857025' />
    </div>
  )
}

export default Widgets