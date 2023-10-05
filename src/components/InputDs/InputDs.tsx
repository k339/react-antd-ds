import React from 'react'

interface InputDsProps {
  type: 'text' | 'password'
}

const InputDs = ({ type }: InputDsProps) => {
  return (
    <input type={type}/>
  )
}

export default InputDs