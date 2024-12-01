import React from "react";

const ManagerSider = ({ handleNavigation }) => {
  return (
    <div
      className="d-flex flex-column flex-shrink-0 p-3 text-light"
      style={{ height: "100%" }}
    >
      <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item">
          <a
            href="#"
            className="nav-link text-light"
            onClick={(e) => {
              e.preventDefault(); // Prevent default anchor behavior
              handleNavigation("home"); // Navigate to Home
            }}
          >
           
          </a>
        </li>

        <li className="nav-item">
          <a
            href="#"
            className="nav-link text-light"
            onClick={(e) => {
              e.preventDefault(); // Prevent default anchor behavior
              handleNavigation("analyze"); // Navigate to Home
            }}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              <span className="material-symbols-outlined text-light">
                search
              </span>
              <svg className="bi me-2 text-light" width="16" height="16">
                <use xlinkHref="#Analyze"></use>
              </svg>
              <span style={{color:"white"}}>Code Analyze</span>
            </div>
          </a>
        </li>
        {/* Database Analyzer */}
        <li className="nav-item">
          <a
            href="#"
            className="nav-link text-light"
            onClick={(e) => {
              e.preventDefault(); // Prevent default anchor behavior
              handleNavigation("analyzeDatabase"); // Navigate to Home
            }}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              <span className="material-symbols-outlined text-light">
                search
              </span>
              <svg className="bi me-2 text-light" width="16" height="16">
                <use xlinkHref="#AnalyzeDatabase"></use>
              </svg>
              <span style={{color:"white"}}>DB Analyze</span>
            </div>
          </a>
        </li>

        <li className="nav-item">
          <a
            href="#"
            className="nav-link text-light"
            onClick={(e) => {
              e.preventDefault(); // Prevent default anchor behavior
              handleNavigation("documentation"); // Navigate to View Documentation
            }}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              <span className="material-symbols-outlined text-light">
                article
              </span>
              <svg className="bi me-2 text-light" width="16" height="16">
                <use xlinkHref="#table"></use>
              </svg>
              <span style={{color:"white"}}>Project Docs</span>
            </div>
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#"
            className="nav-link text-light"
            onClick={(e) => {
              e.preventDefault(); // Prevent default anchor behavior
              handleNavigation("customPrompt"); // Navigate to Custom Prompt
            }}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              <span className="material-symbols-outlined text-light">
                keyboard
              </span>
              <svg className="bi me-2 text-light" width="16" height="16">
                <use xlinkHref="#table"></use>
              </svg>
              <span style={{color:"white"}}>Custom Prompt</span>
            </div>
          </a>
        </li>
        {/* Database View */}
        <li className="nav-item">
          <a
            href="#"
            className="nav-link text-light"
            onClick={(e) => {
              e.preventDefault(); // Prevent default anchor behavior
              handleNavigation("viewDatabaseDoc"); // Navigate to Custom Prompt
            }}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              <span className="material-symbols-outlined text-light">
                keyboard
              </span>
              <svg className="bi me-2 text-light" width="16" height="16">
                <use xlinkHref="#table"></use>
              </svg>
              <span style={{color:"white"}}>DB Docs</span>
            </div>
          </a>
        </li>

        <li className="nav-item">
          <a
            href="#"
            className="nav-link text-light"
            onClick={(e) => {
              e.preventDefault(); // Prevent default anchor behavior
              handleNavigation("SequenceDiagram"); // Navigate to Custom Prompt
            }}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              <span className="material-symbols-outlined" style={{color:"white"}}>
              alt_route
              </span>
              <svg className="bi me-2 text-light" width="16" height="16">
                <use xlinkHref="#table"></use>
              </svg>
              <span style={{color:"white"}}>Sequence Diagram</span>
            </div>
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#"
            className="nav-link text-light"
            onClick={(e) => {
              e.preventDefault(); // Prevent default anchor behavior
              handleNavigation("UMLDiagram"); // Navigate to Custom Prompt
            }}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              <span className="material-symbols-outlined" style={{color:"white"}}>
                family_history
              </span>
              <svg className="bi me-2 text-light" width="16" height="16">
                <use xlinkHref="#table"></use>
              </svg>
              <span style={{color:"white"}}>UML Diagram</span>
            </div>
          </a>
        </li>
          
      </ul>
      <hr className="text-light" />
    </div>
  );
};

export default ManagerSider;
