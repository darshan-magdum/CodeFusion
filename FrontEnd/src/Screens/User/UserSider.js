import React from 'react';

const UserSider = ({ isOpen, toggleSidebar, onSelectView }) => {

  const handleSignOut = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    window.location = "/";
  };

  return (
    <div className={`dashboard-nav ${isOpen ? 'mobile-show' : ''}`}>
   <header>
    <a href="#!" className="menu-toggle" onClick={toggleSidebar}>
        <i className="fas fa-times"></i>
    </a>
    <a href="#" className="brand-logo">
        <i className="fa fa-robot"></i> <span>Fusion AI</span>
    </a>
</header>

      <nav className="dashboard-nav-list">
        <a href="#!" className="dashboard-nav-item" onClick={() => onSelectView('uploadFolder')}>
          <i className="fas fa-upload"></i> Upload Folder
        </a>
        <a href="#!" className="dashboard-nav-item" onClick={() => onSelectView('viewDocumentation')}>
          <i className="fas fa-file-alt"></i> View Documentation
        </a>
        <a href="#!" className="dashboard-nav-item" onClick={() => onSelectView('chat')}>
          <i className="fas fa-comment-dots"></i> Chat
        </a>
        <a href="#!" className="dashboard-nav-item" onClick={() => onSelectView('chatHistory')}>
          <i className="fas fa-history"></i> Chat History
        </a>
        <div className="nav-item-divider"></div>
        <a href="#!" className="dashboard-nav-item" onClick={handleSignOut}>
          <i className="fas fa-sign-out-alt"></i> Logout
        </a>
      </nav>
    </div>
  );
};

export default UserSider;
