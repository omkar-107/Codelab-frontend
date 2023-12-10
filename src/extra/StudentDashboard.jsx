import React from 'react'
import { useState,useEffect } from 'react';
import { endpoints } from '../services/apis';
import { useSelector } from 'react-redux';
import axios from 'axios';
import Spinner from '../image/Spinner';
import { Link } from 'react-router-dom';



const  StudentDashboard =   () => {
    const [loading, setLoading] = useState(true);
    const [responseData, setResponseData] = useState([]);
    const { user } = useSelector((state) => state.profile);
    const { token } = useSelector((state) => state.auth);
    useEffect(  () => {
        setLoading(true);
        const fetchData = async () => {
            try {
                const res = await axios.get(endpoints.GET_INS, {
                    params: user, 
                    headers: {
                      'Content-Type': 'application/json',
                      "Authorization": `Bearer ${token}`
                    },
                  });
                console.log(res.data);
                setResponseData( res.data.data);
            } catch (error) {
                console.log(error);
            }
        }
        fetchData();
        setLoading(false);
    },[]);
    if(loading || responseData.length === 0){
        return <Spinner/>   
    }
  
    return (
    <div className='h-screen flex justify-center flex-col '>
        {responseData.length > 0 && responseData.map((data) => {
            return <div><Link to={`dashboard/sub/${data.id}`}><div>{data.name}</div> </Link></div>

        
        })}
    </div>
  )
}

export default StudentDashboard;