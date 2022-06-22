import React from 'react';
import './navbar.scss';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import FullscreenOutlinedIcon from '@mui/icons-material/FullscreenOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import ListOutlinedIcon from '@mui/icons-material/ListOutlined';



const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder='Search...' />
          <SearchRoundedIcon/>
        </div>
        <div className="items">
          <div className="item">
            <LanguageOutlinedIcon className="icon"/>
            English
          </div>
          <div className="item">
            <DarkModeOutlinedIcon className="icon"/>
            
          </div>
          <div className="item">
            <FullscreenOutlinedIcon className="icon"/>
            
          </div>
          <div className="item">
            <NotificationsNoneOutlinedIcon className="icon"/>
            <div className="counter">1</div>
          </div>
          <div className="item">
            <ChatBubbleOutlineIcon className="icon"/>
            <div className="counter">2</div>
            
          </div>
          <div className="item">
            <ListOutlinedIcon className="icon"/>
            
          </div>
          <div className="item">
<img src="https://1.bp.blogspot.com/-v7k0yNiahU0/YU_uwTiWw5I/AAAAAAAAZFI/8B7o0aYoNvMM0SaqXChsc3-RdJ11rAQygCLcBGAsYHQ/s0/Untitled%2Bdesign%2B%25281%2529.png" alt="profile" className='avatar' />            
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar