import React, { useState } from 'react';
import '../../Screens/User/Styles/UserDashboard.css'; 
import UserSider from './UserSider';
import RightContainer from './RightContainer';


const UserDashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeView, setActiveView] = useState('home');

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleSelectView = (view) => {
    setActiveView(view);
  };

  return (
    <div className={`dashboard ${isSidebarOpen ? 'dashboard-compact' : ''}`}>
      <UserSider 
        isOpen={isSidebarOpen} 
        toggleSidebar={toggleSidebar} 
        onSelectView={handleSelectView} 
      />
      <div className='dashboard-app'>
        <header className='dashboard-toolbar d-flex justify-content-between align-items-center'>
          <a href="#!" className="menu-toggle" onClick={toggleSidebar}>
            <i className="fas fa-bars"></i>
          </a>
          <span
            style={{
              fontWeight: 'bold', 
              fontSize: '1.2rem', 
              marginLeft: 'auto' ,
              color:"#47b2e4" 
            }}
          >
            User Dashboard
          </span>
        </header>
        <RightContainer activeView={activeView} />
      </div>
    </div>
  );
};

export default UserDashboard;
