import React from 'react'

const Button = (props) => {

    const { name } = props;

  return (
    <span>
        <button className='px-5 py-2 m-2 rounded-lg bg-gray-100 hover:bg-gray-300'>{name}</button>
    </span>
  )
}

export default Button