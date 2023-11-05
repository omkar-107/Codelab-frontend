import React from 'react'
import { useNavigate } from 'react-router-dom';
import { logout } from "../services/operations/authapi"
import { useDispatch } from 'react-redux';


const Logout = () => {
    const navigate = useNavigate()
  const dispatch = useDispatch()
  const handleLogout = (event) => {
    event.preventDefault();
   
    dispatch(logout(navigate))

   
  };

    return (
        <form> 
        <div class="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
            <div class="relative py-3 sm:max-w-xl sm:mx-auto">
                <div
                    class="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl">
                </div>
                <div class="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
                    <div class="max-w-md mx-auto">
                        <div>
                            <h1 class="text-2xl font-semibold">Logged In </h1>
                            {/* <faCheckSquare/> */}
                        </div>
                        <div class="divide-y divide-gray-200">
                            <div class="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                                
                                <div class="relative">
                                    <button class="bg-blue-500 text-white rounded-md px-2 py-1" onClick={handleLogout   }>LogOut</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </form>
  )
}

export default Logout;