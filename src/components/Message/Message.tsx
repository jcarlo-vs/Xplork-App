import React from 'react'
import Text from '../Text/Text'

const Message = () => {
  return (
    <div className='flex items-center gap-5'>
      <img
        className='h-14 w-14 object-cover rounded-full'
        src='https://img.freepik.com/free-photo/waist-up-portrait-handsome-serious-unshaven-male-keeps-hands-together-dressed-dark-blue-shirt-has-talk-with-interlocutor-stands-against-white-wall-self-confident-man-freelancer_273609-16320.jpg?w=1380&t=st=1689562397~exp=1689562997~hmac=d3a5aff1af3822d0491e5a047b9cfd5c32537d8848f591b905e1b09b546c9545'
        alt=''
      />
      <div>
        <Text size='tiny' className='font-bold'>
          BATMAN
        </Text>
        <Text size='tiny' className='text-gray-300'>
          How are you mate?
        </Text>
        <Text size='tiny' className='text-[9px] text-gray-300'>
          1w ago
        </Text>
      </div>
    </div>
  )
}

export default Message
