import React from 'react'
import Text from '../components/Text/Text'

const Notifications = () => {
  return (
    <div className='p-5'>
      <header>
        <Text size='title' className='font-bold'>
          Notifications
        </Text>
      </header>
      <section>
        <article className='flex justify-between  items-center px-10 border-b border-gray-500/20'>
          <div className='flex items-center gap-3  p-3'>
            <img
              className='w-12 h-12 object-cover rounded-full'
              src='https://img.freepik.com/free-photo/image-young-asian-business-woman-female-entrepreneur-glasses-holding-tablet-looking-professional-glasses-white-background_1258-89375.jpg?w=1380&t=st=1689571000~exp=1689571600~hmac=9fa29a6311be5d1138b30b6befd6db774cc063e0074a3e35594acf995a58c6b9'
              alt=''
            />
            <Text size='tiny' className='text-gray-300/80'>
              <span className='font-semibold text-white'>Kyla.kulet</span> liked
              your photo
            </Text>
          </div>
          <div>
            <button className='rounded-xl px-5 py-2 bg-blue-500 border-none'>
              <Text size='tiny'>Visit Profile</Text>
            </button>
          </div>
        </article>
        <article className='flex justify-between  items-center px-10 border-b border-gray-500/20'>
          <div className='flex items-center gap-3  p-3'>
            <img
              className='w-12 h-12 object-cover rounded-full'
              src='https://img.freepik.com/free-photo/image-young-asian-business-woman-female-entrepreneur-glasses-holding-tablet-looking-professional-glasses-white-background_1258-89375.jpg?w=1380&t=st=1689571000~exp=1689571600~hmac=9fa29a6311be5d1138b30b6befd6db774cc063e0074a3e35594acf995a58c6b9'
              alt=''
            />
            <Text size='tiny' className='text-gray-300/80'>
              <span className='font-semibold text-white'>Kyla.kulet</span> liked
              your photo
            </Text>
          </div>
          <div>
            <button className='rounded-xl px-5 py-2 bg-blue-500 border-none'>
              <Text size='tiny'>Visit Profile</Text>
            </button>
          </div>
        </article>
        <article className='flex justify-between  items-center px-10 border-b border-gray-500/20'>
          <div className='flex items-center gap-3  p-3'>
            <img
              className='w-12 h-12 object-cover rounded-full'
              src='https://img.freepik.com/free-photo/image-young-asian-business-woman-female-entrepreneur-glasses-holding-tablet-looking-professional-glasses-white-background_1258-89375.jpg?w=1380&t=st=1689571000~exp=1689571600~hmac=9fa29a6311be5d1138b30b6befd6db774cc063e0074a3e35594acf995a58c6b9'
              alt=''
            />
            <Text size='tiny' className='text-gray-300/80'>
              <span className='font-semibold text-white'>Kyla.kulet</span>{' '}
              followed you.
            </Text>
          </div>
          <div>
            <button className='rounded-xl px-5 py-2 bg-blue-500 border-none'>
              <Text size='tiny'>Visit Profile</Text>
            </button>
          </div>
        </article>
      </section>
    </div>
  )
}

export default Notifications
