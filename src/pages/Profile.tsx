import React from 'react'
import Text from '../components/Text/Text'
import ImageContainer from '../components/Profile/ImageContainer'
import { HiOutlineCog8Tooth } from 'react-icons/hi2'
import { useQuery } from '@tanstack/react-query'
import { Post, getPosts } from '../services/postsAPI'

const Profile = () => {
  const { data } = useQuery({ queryKey: ['profile'], queryFn: getPosts })

  const myPOsts = data?.[0]?.posts
  return (
    <div>
      <header className='flex  items-center justify-center gap-20 py-10'>
        <article>
          <img
            src='https://img.freepik.com/free-photo/waist-up-portrait-handsome-serious-unshaven-male-keeps-hands-together-dressed-dark-blue-shirt-has-talk-with-interlocutor-stands-against-white-wall-self-confident-man-freelancer_273609-16320.jpg?w=1380&t=st=1689562397~exp=1689562997~hmac=d3a5aff1af3822d0491e5a047b9cfd5c32537d8848f591b905e1b09b546c9545'
            className='h-28 w-28 object-cover rounded-full'
            alt=''
          />
        </article>
        <article>
          <div className='flex justify-center items-center gap-5'>
            <Text>JCVS</Text>
            <button className='border-none outline-none bg-blue-500 rounded-xl'>
              <Text
                size='tiny'
                className='px-3 py-2
              '
              >
                EDIT PROFILE
              </Text>
            </button>
            <HiOutlineCog8Tooth className='w-6 h-6' />
          </div>
          <div className='flex gap-3 mt-3'>
            <Text size='tiny'>153 posts</Text>
            <Text size='tiny'>200 followers</Text>
            <Text size='tiny'>50 following</Text>
          </div>
        </article>
      </header>

      <section className='border-t border-gray-700 mx-3'>
        <article className='flex gap-5 items-center justify-center'>
          <div className='border-t border-white'>
            <Text size='tiny' className='mt-3'>
              POSTS
            </Text>
          </div>
          <div>
            <Text size='tiny' className='mt-3'>
              SAVED
            </Text>
          </div>
          <div>
            <Text size='tiny' className='mt-3'>
              TAGGED
            </Text>
          </div>
        </article>
      </section>
      <section className=' flex justify-center gap-2  flex-wrap mt-5'>
        {myPOsts?.map((item: Post, i: number) => {
          return <ImageContainer image={item.image} key={i}></ImageContainer>
        })}
      </section>
    </div>
  )
}

export default Profile
