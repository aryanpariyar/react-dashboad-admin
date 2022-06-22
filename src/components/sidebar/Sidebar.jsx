import React from 'react';
import './sidebar.scss';
import DashboardRoundedIcon from '@mui/icons-material/DashboardRounded';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import BarChartIcon from '@mui/icons-material/BarChart';
import NotificationsIcon from '@mui/icons-material/Notifications';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import PsychologyRoundedIcon from '@mui/icons-material/PsychologyRounded';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import LogoutIcon from '@mui/icons-material/Logout';

const Sidebar = () => {
  return (
    <>
    <div className="sidebar">
      <div className="top">
        <span className="logo">AryanAdmin</span>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <li><DashboardRoundedIcon className='icon'/><span>Dashboard</span></li>
          <p className="title">LISTS</p>

          <li><PersonOutlineOutlinedIcon className='icon'/><span>Users</span></li>
          <li><ShoppingCartIcon className='icon'/><span>Products</span></li>
          <li><CreditCardIcon className='icon'/><span>Orders</span></li>
          <li><DeliveryDiningIcon className='icon'/><span>Delivery</span></li>
          <p className="title">USEFUL</p>

          <li><BarChartIcon className='icon'/><span>Stats</span></li>
          <li><NotificationsIcon className='icon'/><span>Notification</span></li>
          <p className="title">SERVICE</p>

          <li><HealthAndSafetyIcon className='icon'/><span>System Health</span></li>
          <li><PsychologyRoundedIcon className='icon'/><span>Logs</span></li>
          <li><SettingsIcon className='icon'/><span>Setting</span></li>
          <p className="title">USER</p>

          <li><AccountCircleRoundedIcon className='icon'/><span>Profile</span></li>
          <li><LogoutIcon className='icon'/><span>Logout</span></li>
          </ul>
      </div>
      <div className="bottom">
        
        <div className="colorOption"></div>
        <div className="colorOption"></div>
      </div>
    </div>
    </>
  )
}

export default Sidebar;