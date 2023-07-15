import React from 'react'

const Header = () => {
  return (
    <div className='grid grid-flow-col p-2 shadow-md content-evenly'>
        <div className='flex col-span-1'>
            <span className='self-center cursor-pointer'>
                <svg xmlns="http://www.w3.org/2000/svg" height="1.5em" viewBox="0 0 448 512"><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/></svg>
            </span>
            <img 
                src='https://logos-world.net/wp-content/uploads/2020/04/YouTube-Logo-2017-present.jpg' 
                alt='logo' 
                className='h-14 cursor-pointer'
            />
        </div>
        <div className='col-span-10 flex justify-center'>
            <input type='text' placeholder='search' className='h-8 border-solid border border-gray-600 rounded-l-full pl-4 self-center w-96 outline-none' />
            <button className='border-solid border border-gray-600 h-8 self-center px-3 rounded-r-full'>search</button>
        </div>
        <div className='col-span-1 flex'>
            <span className='self-center cursor-pointer'>
                <svg xmlns="http://www.w3.org/2000/svg" height="1.5em" viewBox="0 0 448 512"><path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"/></svg>
            </span>
        </div>
    </div>
  )
}

export default Header