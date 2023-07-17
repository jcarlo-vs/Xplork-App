import React from 'react'
import Text from '../Text/Text'
import {
  HiOutlineChatBubbleBottomCenterText,
  HiOutlineHeart,
  HiOutlinePaperAirplane,
} from 'react-icons/hi2'

interface ContentType {
  profilePicture: string
  username: string
  timeAgo: string
  image: string
  likes: number
  description: string
  comments?: string
}

const Content = ({
  profilePicture,
  username,
  timeAgo,
  image,
  likes,
  description,
  comments,
}: ContentType) => {
  return (
    <div className='max-w-sm mx-auto flex flex-col gap-3 p-5'>
      <article className='flex gap-3 items-center'>
        <div>
          <img
            src={profilePicture}
            alt=''
            className='rounded-full object-cover h-10 w-10'
          />
        </div>
        <Text size='tiny' className='font-semibold'>
          {username}
        </Text>
        <Text size='tiny' className='font-extralight text-[9.5px]'>
          {timeAgo}
        </Text>
      </article>

      <img src={image} alt='' className='rounded-md' />

      <article className='flex flex-col gap-2'>
        <div className='[&>*]:h-5 [&>*]:w-5 flex gap-3'>
          <HiOutlineHeart />
          <HiOutlineChatBubbleBottomCenterText />
          <HiOutlinePaperAirplane />
        </div>
        <Text size='tiny' className='font-semibold'>
          {likes.toString()} likes
        </Text>
      </article>

      <article className='gap-3 flex items-center'>
        <Text size='tiny' className='font-bold'>
          {username}
        </Text>
        <Text size='tiny'>{description.slice(0, 40)}....</Text>
      </article>
      <article>
        <Text size='tiny' className='text-[9.5px]'>
          View all 10 comments
        </Text>
        <label htmlFor='comment'></label>
        <input
          type='text'
          id='comment'
          name='comment'
          placeholder='Add a comment...'
          className='placeholder:text-[9px] bg-transparent outline-none text-[10px]'
        />
      </article>
    </div>
  )
}

export default Content
