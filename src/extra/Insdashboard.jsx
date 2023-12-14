import React from 'react'
import { Link } from 'react-router-dom'

const Insdashboard = () => {
  return (
    <div className='min-h-[80vh]'>
        {/* <Link to="/dashboard/addasg"><div>Add Assignment</div></Link>
        <Link to="/dashboard/students"><div>All students</div></Link>
         */}

<div className="flex justify-center mt-4">
        <main className=" w-[90%] p-8 bg-white rounded-lg shadow-lg border-gray-400 border-2">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl font-semibold"># Hello Instructor </h1>
            </div>
          </div>
          <div className="flex items-center justify-center ">
          <Link className='w-[30%]' to="/dashboard/addasg"><div className='flex justify-center p-5   rounded-lg font-semibold bg-blue-500 hover:bg-blue-700 text-white m-4'>Add Assignment</div></Link>
          <Link className='w-[30%]' to="/dashboard/students"><div className='flex justify-center p-5 rounded-lg font-semibold bg-blue-500 hover:bg-blue-700 text-white m-4'>All students</div></Link>
          </div>
        </main>
      </div>
         
        
    </div>
  )
}

export default Insdashboard;



//




