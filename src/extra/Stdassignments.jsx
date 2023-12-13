import React from 'react'
import { useParams,Link } from 'react-router-dom';
import { useEffect,useState } from 'react';
import { useSelector } from 'react-redux';
import Spinner from '../image/Spinner';
import toast from 'react-hot-toast';
import axios from 'axios';
const BASE_URL = process.env.REACT_APP_API_URL




const Stdassignments = () => {
    const { id } = useParams();
    const {token} = useSelector((state) => state.auth);
    const [loading,setLoading] = useState(false);
    const [result,setResult] = useState([]);
    useEffect(() => {
        setLoading(true);

        const body = {
            InsId: id
        }
      
        add(body,token);


        setLoading(false);
    }, []);




    const add = async (body, token) => {
        try {
    
            axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    
            const res = await axios.get(BASE_URL + "/api/v1/auth/getallasg", body);
            console.log( res.data.data);
    
            // const res = await axios.get(BASE_URL+"/api/v1/auth/getallasg", body, {
            //     headers: {
            //         'Content-Type': 'application/json',
            //         'Authorization': `Bearer ${token}`
            //     },
            // });
    
    
    
            if (res.data.success === true) {
                
                toast.success(res.data.message);
                setResult(res.data.data);
            }
            else{
                
                toast.error(res.data.message);
            }
        } catch (error) {
            console.error(error);
        }
    };







   if (loading) <Spinner/>

    return (
    <div className='min-h-screen'>
    {
        
        result.length>0 && result.map((data) => {
            return <div><Link to={`${data._id}`}><div>{data.name}</div> </Link></div>
        })
        // result.length>0 && <div> {result}</div>

    }
  </div>
  )
}

export default Stdassignments;