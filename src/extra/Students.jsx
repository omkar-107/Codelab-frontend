import React from 'react'
import axios from 'axios';
import { useState,useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Spinner from '../image/Spinner';
import toast from 'react-hot-toast';

const BASE_URL = process.env.REACT_APP_API_URL

const send= async ({token})=>{
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    
    const res = await axios.get(BASE_URL + "/api/v1/auth/getallstudents");
    if(res.data.success == true)
      toast.success(res.data.message)
    // console.log(res.data.data)
    return res.data.data;
}

const Students = () => {
    const {token} = useSelector((state) => state.auth);
    const [loading,setLoading] = useState(false);
    const [data,setData] = useState([]);

    useEffect(()=>{
        setLoading(true);
        const fetchData = async () => {
            try {
              const result = await send({ token: token });
              setData(result);
           
            } catch (error) {
              console.log(error)
            } finally {
              setLoading(false);
            }
          };
      
          fetchData();

    },[])
    return (
        loading ? <Spinner /> : 
        // <div>
        //     {
        //         data.length >0 ? data.map((student)=>{
        //        return(<div key={student.stdid}>
        //         <Link to ={`${student.stdid}`} >{student.stdname}</Link>
        //     </div>) }
        //         ) :<div>No Data</div>
        //     }
            
        // </div>
        <div className='min-h-[80vh]'>
        <div className="flex justify-center mt-4">
         <main className=" w-[90%] p-8 bg-white rounded-lg shadow-lg border-gray-400 border-2">
           <div className="flex items-center justify-between mb-8">
             <div>
               <h1 className="text-3xl font-semibold"># All Students </h1>
             </div>
           </div>
           <div className="flex items-center justify-center ">
           <div>
             {
                 data.length >0 ? data.map((student)=>{
                return(<div key={student.stdid}>
                 <Link  to ={`${student.stdid}`} ><div className="bg-slate-400 w-[100%] m-3 p-4 rounded-md">{student.stdname}</div></Link>
             </div>) }
                 ) :<div>No Data</div>
             }
            
         </div>
           </div>
        </main>
       </div>
       </div>

      );
      
}

export default Students;



// <div className="flex justify-center mt-4">
//         <main className=" w-[90%] p-8 bg-white rounded-lg shadow-lg border-gray-400 border-2">
//           <div className="flex items-center justify-between mb-8">
//             <div>
//               <h1 className="text-3xl font-semibold"># Hello Instructor </h1>
//             </div>
//           </div>
//           <div className="flex items-center justify-center ">
         
//           </div>
//         </main>
//       </div>