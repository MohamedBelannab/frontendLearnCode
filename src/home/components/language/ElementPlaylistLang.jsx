import React from 'react'
import Playlist from '../PlayList'

const ElementPlaylistLang = ({playList}) => {
  return (
    <div className='flex flex-col gap-y-5'>
      <h1 className='text-textColor text-2xl  font-extrabold mb-3'>PlayList</h1>
      <Playlist playList={playList}/>
    </div>
  )
}

export default ElementPlaylistLang