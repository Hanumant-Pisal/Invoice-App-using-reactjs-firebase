import React from 'react'
import '../../component/dashboard/dashboard.css'
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { auth } from '../../firebase';
import { signOut } from 'firebase/auth';  
function Dashboard() {
  const navigate = useNavigate ()
const logout = () => {
  signOut(auth).then(() => {
    localStorage.clear()
    navigate('/login')
  }).catch((error) => {
    console.log(error)
  });
  
}


  return (
    <div className='dashboard-wrapper'>

      <div className='side-nav'>

        <div className='profile-info'>
          <img src={localStorage.getItem('photoURL')} alt=''/>

          
          <div className='log-out'>
            <p>{localStorage.getItem('cName')}  </p>
            <button onClick={logout} className='log-btn'> Logout</button>
          </div>
        </div>

        <hr />

        <div className='menu'>
          <Link to='/dashboard/home' className='menu-link'>Home</Link>
          <Link to='/dashboard/invoices' className='menu-link'>Invoices</Link>
          <Link to='/dashboard/new-invoices' className='menu-link'>New Invoices</Link>
          <Link to='/dashboard/setting' className='menu-link'>Setting</Link></div>



      </div>

      <div className='main-container'>

        <Outlet />
      </div>

    </div>
  )
}

export default Dashboard;