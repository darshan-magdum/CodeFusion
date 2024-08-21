import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFolderOpen, faBrain, faBook, faComments } from '@fortawesome/free-solid-svg-icons';
import '../../Screens/Landingpage/Styles/WorkFLow.css'; // Import the CSS file

const WorkFLow = () => {
  return (
    <div className="WFContainer">
      <h1 className="WFHeader">How It Works</h1>
      <div className="WFCardsContainer">
        <div className="WFCard">
          <FontAwesomeIcon icon={faFolderOpen} className="WFIcon" />
          <div className="WFTitle">Step 1: Upload Folder</div>
          <p className="WFDescription">
            First, the user will need to upload the folder containing the files.
          </p>
        </div>
        <div className="WFCard">
          <FontAwesomeIcon icon={faBrain} className="WFIcon" />
          <div className="WFTitle">Step 2: Analyze Files</div>
          <p className="WFDescription">
            AI will then analyze all the files within the folder.
          </p>
        </div>
        <div className="WFCard">
          <FontAwesomeIcon icon={faBook} className="WFIcon" />
          <div className="WFTitle">Step 3: View Documentation</div>
          <p className="WFDescription">
            Go to the documentation view where code documentation is present with detailed file-wise information.
          </p>
        </div>
        <div className="WFCard">
          <FontAwesomeIcon icon={faComments} className="WFIcon" />
          <div className="WFTitle">Step 4: Custom Prompt</div>
          <p className="WFDescription">
            Users can ask anything regarding the code through the custom prompt feature.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WorkFLow;
