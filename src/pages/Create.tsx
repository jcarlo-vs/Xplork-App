import React from 'react'
import Text from '../components/Text/Text'

const Create = () => {
  return (
    <div className='h-full flex items-center justify-center '>
      <div className='w-[80%] h-[80%] bg-zinc-600/40 rounded-2xl flex flex-col'>
        <header className='border-b border-gray-700'>
          <Text size='tiny' className='text-center p-3 text-gray-400'>
            Create new post
          </Text>
        </header>
        <article className='flex-1 grid place-items-center'>IMAGE HERE</article>

        <div className='text-center'>
          <button className='border-none outline-none bg-blue-500 rounded-lg mb-10'>
            <Text size='tiny' className='p-3 px-5 rounded-xl'>
              Select Photo
            </Text>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Create
