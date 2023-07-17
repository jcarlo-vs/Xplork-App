import React from 'react'
import Text from '../components/Text/Text'

const Search = () => {
  return (
    <div className='px-5 py-2 h-full'>
      <Text size='title'>Search</Text>
      <header className='mt-10'>
        <input
          type='text'
          className='bg-transparent placeholder:text-[10px] text-[10px] p-2 px-5 border rounded-full border-gray-400 w-full outline-none'
          placeholder='Search'
        />
      </header>
      <article className='flex items-center justify-between mt-5 px-10'>
        <Text size='tiny' className='text-gray-300'>
          Recent searches....
        </Text>
        <button className='text-blue-500'>
          <Text size='tiny'>Clear all</Text>
        </button>
      </article>

      <section className=''>
        <article className='flex items-center gap-5 mt-10 px-10'>
          <img
            className='h-14 w-14 rounded-full object-cover'
            src='https://img.freepik.com/free-photo/waist-up-portrait-handsome-serious-unshaven-male-keeps-hands-together-dressed-dark-blue-shirt-has-talk-with-interlocutor-stands-against-white-wall-self-confident-man-freelancer_273609-16320.jpg?w=1380&t=st=1689562397~exp=1689562997~hmac=d3a5aff1af3822d0491e5a047b9cfd5c32537d8848f591b905e1b09b546c9545'
            alt=''
          />
          <Text size='tiny' className='font-semibold tracking-wider'>
            Jason1023
          </Text>
        </article>
        <article className='flex items-center gap-5 mt-10 px-10'>
          <img
            className='h-14 w-14 rounded-full object-cover'
            src='https://img.freepik.com/free-photo/waist-up-portrait-handsome-serious-unshaven-male-keeps-hands-together-dressed-dark-blue-shirt-has-talk-with-interlocutor-stands-against-white-wall-self-confident-man-freelancer_273609-16320.jpg?w=1380&t=st=1689562397~exp=1689562997~hmac=d3a5aff1af3822d0491e5a047b9cfd5c32537d8848f591b905e1b09b546c9545'
            alt=''
          />
          <Text size='tiny' className='font-semibold tracking-wider'>
            Jason1023
          </Text>
        </article>
      </section>
    </div>
  )
}

export default Search
