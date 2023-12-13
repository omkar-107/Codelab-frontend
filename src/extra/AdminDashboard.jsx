import React from 'react'
import { Link } from 'react-router-dom'

const AdminDashboard = () => {
  return (
    <div>
        <Link to="/dashboard/add"><div>Add User</div></Link>
        <Link to="/dashboard/addtoclass"><div>Add User to class</div></Link>
        <Link to="/dashboard/exam"><div>Exam</div></Link>
    </div>
  )
}

export default AdminDashboard;