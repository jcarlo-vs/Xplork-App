import React from 'react'
import Content from './Content'
import { dataContent } from '../../data/data'

import { useQuery } from '@tanstack/react-query'
import { getPosts } from '../../services/postsAPI'

const ContentContainer = () => {
  return (
    <div className='content-container px-5 py-4 mt-10  flex-1'>
      <div className='max-h-full flex flex-col gap-5'>
        <Content
          profilePicture='https://img.freepik.com/free-photo/waist-up-portrait-handsome-serious-unshaven-male-keeps-hands-together-dressed-dark-blue-shirt-has-talk-with-interlocutor-stands-against-white-wall-self-confident-man-freelancer_273609-16320.jpg?w=1380&t=st=1689562397~exp=1689562997~hmac=d3a5aff1af3822d0491e5a047b9cfd5c32537d8848f591b905e1b09b546c9545'
          username='nevermind202'
          description='This is the only way This is the only way '
          image='https://img.freepik.com/free-photo/full-shot-teenage-friends-hanging-out_23-2150521820.jpg?w=1380&t=st=1689515978~exp=1689516578~hmac=2292e9c418fed6b580cf9244efcbb0e9d869f419f58538d26302a97e957119ed'
          likes={20}
          timeAgo={`${2}d ago`}
          key={1}
        />
        <Content
          profilePicture='https://img.freepik.com/free-photo/waist-up-portrait-handsome-serious-unshaven-male-keeps-hands-together-dressed-dark-blue-shirt-has-talk-with-interlocutor-stands-against-white-wall-self-confident-man-freelancer_273609-16320.jpg?w=1380&t=st=1689562397~exp=1689562997~hmac=d3a5aff1af3822d0491e5a047b9cfd5c32537d8848f591b905e1b09b546c9545'
          username='nevermind202'
          description='This is the only way This is the only way '
          image='https://img.freepik.com/free-photo/full-shot-teenage-friends-hanging-out_23-2150521820.jpg?w=1380&t=st=1689515978~exp=1689516578~hmac=2292e9c418fed6b580cf9244efcbb0e9d869f419f58538d26302a97e957119ed'
          likes={20}
          timeAgo={`${2}d ago`}
          key={2}
        />
      </div>
    </div>
  )
}

export default ContentContainer
