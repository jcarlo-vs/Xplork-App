import React from 'react'
import c from '../../utils/library'
import config from './config'

type TypeProps = {
  children: React.ReactNode
  className?: string
  size?: 'hero' | 'title' | 'subtitle' | 'normal' | 'description' | 'tiny'
}

const Text = ({ children, size = 'normal', className }: TypeProps) => {
  return (
    <div className={c(config[size], className)}>
      {children}

      <div className='text'></div>
    </div>
  )
}

export default Text
