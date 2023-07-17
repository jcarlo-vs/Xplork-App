import React from 'react'
import c from '../../utils/library'
import Text from '../Text/Text'

interface Buttontype {
  children: string
  className?: string
  size: 'small' | 'medium' | 'large'
  color?: string
  onClick?: () => void
}

export const btnConfig = {
  small: 'px-2 py-1',
  medium: 'px-3 py-2',
  large: 'px-4 py-3',
}

const Button = ({
  children,
  className,
  size,
  onClick,
  color = 'bg-blue-500/90 hover:bg-blue-500',
}: Buttontype) => {
  return (
    <button
      onClick={onClick}
      type='button'
      className={c(
        className,
        btnConfig[size],
        color,
        'rounded-lg font-bold transition-all'
      )}
    >
      <Text size='tiny' className=''>
        {children}
      </Text>
    </button>
  )
}

export default Button
