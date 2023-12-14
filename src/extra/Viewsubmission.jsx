import React from 'react'
import toast from 'react-hot-toast';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useState,useEffect } from 'react'
import Spinner from '../image/Spinner'
import { useSelector } from 'react-redux';
import Codeview from '../component/Codeview';
const BASE_URL = process.env.REACT_APP_API_URL

const add = async (body, token,setResult) => {
    try {

        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

        const res = await axios.get(BASE_URL + "/api/v1/auth/getasg2", body);
      



        if (res.data.success === true) {
            // console.log(res.data.data);
            toast.success(res.data.message);
            setResult(res.data.data.name);
            // console.log(result);
        }
        else{
            
            toast.error(res.data.message);
        }
    } catch (error) {
        console.error(error);
    }
};

const Viewsubmission = () => {
    const[loading,setLoading]=useState(false);
    const {id2,id3} = useParams();
    const {token} = useSelector((state) => state.auth);
    const [result,setResult] = useState("");

    useEffect(() => {
        setLoading(true);

      const jsonData={
        asgId: id2
       }
      
       add(jsonData,token,setResult);


        setLoading(false);
    }, []);


    return (
        <div>
            {loading?<Spinner/>:
            <div>

                        <Codeview question={result} id={id2} submissionid= {id3} token={token}></Codeview>

            </div>
            }
        </div>
      )
      
}

export default Viewsubmission;