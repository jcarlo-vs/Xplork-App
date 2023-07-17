import React from 'react'

interface ImageType {
  image: string
}

const ImageContainer = ({ image }: ImageType) => {
  return (
    <div>
      <img src={image} className='h-56 w-56 object-cover' alt={image} />
    </div>
  )
}

export default ImageContainer
