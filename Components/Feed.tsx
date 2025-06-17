import { ArrowPathIcon } from '@heroicons/react/16/solid'
import { ACTION_REFRESH } from 'next/dist/client/components/router-reducer/router-reducer-types'
import React from 'react'
import Tweetbox from './Tweetbox'

function Feed() {
  return (
    <div className='col-span-7 lg:col-span-5 border-x'>
        <div className='flex items-center justify-between'>
            <h1 className='p-5 pb-0 text-xl font-bold'>Home </h1>
            <ArrowPathIcon className='size-8 cursor-pointer text-yellow-200 mr-5 mt-5
            transition duration-500 ease-out hover:rotate-180 active:scale-150'/>
        </div>

        <Tweetbox/>
    </div>
  )
}

export default Feed