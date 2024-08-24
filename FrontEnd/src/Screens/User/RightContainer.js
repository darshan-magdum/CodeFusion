import React from 'react';
import UploadCode from './UploadCode';
import ViewDocumentation from './ViewDocumentation';
import Chat  from "./Chat";
import ChatHistory from "./ChatHistory";

const RightContainer = ({ activeView }) => {
  const renderComponent = () => {
    switch (activeView) {
      case 'UploadCode':
        return <UploadCode />;
        case 'viewDocumentation':
          return <ViewDocumentation />;
          case 'chat':
            return <Chat />;
            case 'chatHistory':
              return <ChatHistory />;
            case 'UploadCode':
              return <UploadCode />;
 
        
      default:
        return <UploadCode />;
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
