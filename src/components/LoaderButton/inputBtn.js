import React from 'react'

const passwordBtn = ({className, name, placeholder, type}) => (
  <input className={className} type={type} name={name} id={name} placeholder={placeholder} />
)
export default passwordBtn