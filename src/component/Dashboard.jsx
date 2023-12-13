import React from 'react'
import Notfound from '../extra/Notfound';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import StudentDashboard from '../extra/StudentDashboard';
import AdminDashboard from '../extra/AdminDashboard';
import Insdashboard from '../extra/Insdashboard';


const Dashboard = () => {
    // const { user } = useSelector((state) => state.profile);
//    let user= localStorage.getItem('user');
//       user = JSON.parse(user);  
//       console.log(user);
  const { user } = useSelector((state) => state.profile)
    if (!user) {
      return <Navigate to="/login" />
    }
     if (user.accountType === 'admin') {
        return <div><AdminDashboard/></div>
    }
    if (user.accountType === 'student') {
        return <div><StudentDashboard/></div>
    }
    if(user.accountType === 'instructor') {
        return <div><Insdashboard/></div>
    }
   }

export default Dashboard