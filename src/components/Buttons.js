import React from 'react'

function Buttons() {
  return (
    <div className='flex justify-center mt-2 mb-2'>
        <div className=' flex justify-evenly w-[50%]'>
            <button className=' border-2 border-blue-500 rounded-2xl p-2  hover:text-white hover:bg-blue-500 transition-all ease-in-out'>Compile</button>
            <button className='border-2 border-blue-500 rounded-2xl p-2  hover:text-white hover:bg-blue-500 transition-all ease-in-out'>Compile and Execute</button>
        </div>
    </div>
  )
}

export default Buttons  