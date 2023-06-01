import React from 'react'
import './Button.css'

const Button = ({setShownModal}) => {
  return (
    <button className='add__btn' onClick={() => {setShownModal(true)}}>Add user</button>
  )
}

export default Button