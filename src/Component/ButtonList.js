import React from 'react'
import Button from './Button'

const ButtonList = () => {
  return (
    <div className='overflow-x-auto text-center child:w-max'>
        <Button name="All" />
        <Button name="Kapil Sharma" />
        <Button name="Namaste javascript" />
        <Button name="Akshay saini" />
        <Button name="Cricket" />
        <Button name="World affairs" />
        <Button name="Dhruv Rathee" />
        <Button name="Think school" />
    </div>
  )
}

export default ButtonList