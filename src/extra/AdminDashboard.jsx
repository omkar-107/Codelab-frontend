import React from 'react'
import { Link } from 'react-router-dom'
let arr = [
  { username: "21510046", exam: "DSA-CSE", date: "09-12-2023", time: "13:05" },
  { username: "21510070", exam: "PL-CSE", date: "09-12-2023", time: "13:05" },
  { username: "21510046", exam: "DSA-CSE", date: "09-12-2023", time: "13:05" },
  { username: "21510046", exam: "DSA-CSE", date: "09-12-2023", time: "13:05" },
];

const AdminDashboard = () => {
  return (
    // <div>
    //     <Link to="/dashboard/add"><div>Add User</div></Link>
    //     <Link to="/dashboard/addtoclass"><div>Add User to class</div></Link>
    //     <Link to="/dashboard/exam"><div>Exam</div></Link>
    // </div>

    <div className=" min-h-screen bg-slate-200 mb-5">
      <header>
        <div className="flex flex-row justify-evenly w-full items-center text-2xl p-4 bg-slate-500 text-white">
          <h1 className="text-4xl">Hello Admin !</h1>
         
        </div>
      </header>

      <div className="flex justify-center mt-4">
        <main className=" w-[90%] p-8 bg-white rounded-lg shadow-lg border-gray-400 border-2">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl font-semibold"># Create User</h1>
            </div>
          </div>

          <div className="flex justify-center w-full">
            <div className="flex flex-col w-[32%] p-10 gap-6 text-lg items-center bg-slate-100">
             
        
              <Link className='w-[60%]' to="/dashboard/add"><div className='flex justify-center p-5   rounded-lg font-semibold bg-blue-500 hover:bg-blue-700 text-white'>Add User</div></Link>
            
              <Link  className='w-[60%]'   to="/dashboard/addtoclass"><div className='flex justify-center p-5   rounded-lg font-semibold bg-blue-500 hover:bg-blue-700 text-white'> Add User to class</div></Link>
            
              <Link  className='w-[60%]' to="/dashboard/exam"><div  className='flex justify-center p-5   rounded-lg font-semibold bg-blue-500 hover:bg-blue-700 text-white' >Exam</div></Link>
         

              
            </div>
          </div>
        </main>
      </div>

      <div className="flex justify-center mt-4">
        <main className=" w-[90%] p-8 bg-white rounded-lg shadow-lg border-gray-400 border-2">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl font-semibold"># Activity Log</h1>
            </div>
          </div>

          <div className="overflow-x-auto mb-6 ">
            <table className="w-full table-auto text-lg font-semibold">
              <thead className="text-xl">
                <tr>
                  <th className="px-4 py-2">PRN/Username</th>
                  <th className="px-4 py-2">Exam</th>
                  <th className="px-4 py-2">Date</th>
                  <th className="px-4 py-2">Time</th>
                  <th className="px-4 py-2">Action</th>
                </tr>
              </thead>
              <tbody className="text-center">
                {arr.map((ele) => (
                  <tr>
                    <td className="px-4 py-2">
                      <p>{ele.username}</p>
                    </td>
                    <td className="px-4 py-2">
                      <p>{ele.exam}</p>
                    </td>
                    <td className="px-4 py-2">{ele.date}</td>
                    <td className="px-4 py-2">{ele.time}</td>
                    <td className="px-4 py-2">
                      <button className="px-2 py-1 font-semibold text-white bg-red-500 rounded-md text-lg">
                        Clear
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <button className="rounded-full bg-red-500 text-white p-2 w-32 mt-2 font-semibold text-lg">
            Clear All
          </button>
        </main>
      </div>
    </div>

  )
}

export default AdminDashboard;