import React from 'react'
import Sidebarrow from './Sidebarrow'
import { BellIcon, BookmarkIcon, ClipboardIcon, EllipsisHorizontalCircleIcon, EnvelopeIcon, HashtagIcon, HomeIcon, UserIcon } from '@heroicons/react/16/solid'

function Sidebar() {
  return (
   <div className='flex flex-col col-span-2 px-4 md:items-start'>
      <><img
          className="m-3 size-10"
          src="https://cdn-icons-png.freepik.com/512/424/424052.png"
          alt="icon" />
          <Sidebarrow Icon={HomeIcon} title='Home' />
          <Sidebarrow Icon={HashtagIcon} title='Explore'/>
          <Sidebarrow Icon={BellIcon} title='Notifications'/>
          <Sidebarrow Icon={EnvelopeIcon} title='Messages'/>
          <Sidebarrow Icon={BookmarkIcon} title='Bookmarks'/>
          <Sidebarrow Icon={ClipboardIcon} title='Lists' />
          <Sidebarrow Icon={UserIcon} title='Sign in'/>
          <Sidebarrow Icon={EllipsisHorizontalCircleIcon} title='More'/>
          
          </>
          </div>

)
}

export default Sidebar