import React from 'react'

export const Btn = ({children,className,onClick}) => {
  return (
    <div onClick={onClick} className={className ? 'rounded-btn ' + className : 'rounded-btn'}>{children}</div>
  )
}
