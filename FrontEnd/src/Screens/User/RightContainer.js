import React from 'react';


const RightContainer = ({ activeView }) => {
  const renderComponent = () => {
    switch (activeView) {
    //   case 'home':
    //     return <AdminHome />;
    //   case 'profile':
    //     return <AdminProfileView />;
    //   case 'changePassword':
    //     return <AdminChangePassword />;
    //   case 'messages':
    //     return <AdminViewMessages />;
    //   case 'restaurant':
    //     return <CreateRestaurantAccount />;
    //     case 'manageRestaurant':
    //       return <ManageRestaurants />;
        
    //   default:
    //     return <AdminHome />;
    }
  };

  return (
    <div className='dashboard-content'>
      <div className='container'>
        {renderComponent()}
      </div>
    </div>
  );
};

export default RightContainer;
