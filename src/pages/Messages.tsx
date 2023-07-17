import React from 'react'
import Message from '../components/Message/Message'
import Text from '../components/Text/Text'
import { HiOutlinePaperAirplane } from 'react-icons/hi2'

const Messages = () => {
  return (
    <div className='h-full flex'>
      <section className='flex-[0.4] border-r border-gray-600/20 py-10 px-2'>
        <header className='flex justify-between px-5 items-center'>
          <Text size='tiny' className='font-semibold'>
            Messages
          </Text>
          <HiOutlinePaperAirplane className='h-6 w-6' />
        </header>
        <article className='mt-20 flex flex-col gap-5'>
          <Message />
          <Message />
          <Message />
        </article>
      </section>

      {/* MESSAGES SECTION */}

      <section className='flex  gap-4 flex-col flex-1 p-2'>
        <header className='flex items-center gap-3 bg-gray-400/5 p-3'>
          <img
            className='h-12 w-12 object-cover rounded-full'
            src='https://img.freepik.com/free-photo/waist-up-portrait-handsome-serious-unshaven-male-keeps-hands-together-dressed-dark-blue-shirt-has-talk-with-interlocutor-stands-against-white-wall-self-confident-man-freelancer_273609-16320.jpg?w=1380&t=st=1689562397~exp=1689562997~hmac=d3a5aff1af3822d0491e5a047b9cfd5c32537d8848f591b905e1b09b546c9545'
            alt=''
          />
          <Text>BATMAN</Text>
        </header>
        <article className='flex-1 items-center justify-center flex'>
          MESSAGES HERE
        </article>
        <article className='flex border rounded-full px-3 border-gray-600/80'>
          <input
            type='text'
            placeholder='Enter your message...'
            className='outline-none bg-transparent w-full  placeholder:text-[10px] px-3 py-2 flex items-center justify-center text-[10px]'
          />
          <button className='border-none outline-none'>
            <Text className='text-blue-400/80' size='tiny'>
              Send
            </Text>
          </button>
        </article>
      </section>
    </div>
  )
}

export default Messages
