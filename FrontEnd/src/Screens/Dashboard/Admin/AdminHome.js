import React, { useState, useEffect } from "react";
import axios from "axios";
import "../../../styles/UploadDocument.css"; 

const AdminHome = () => {
  const [projectCount, setProjectCount] = useState(0);
  const [managerCount, setManagerCount] = useState(0);
  const [contactCount, setContactCount] = useState(0);  
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProjectCount = async () => {
      try {
        const response = await axios.get("http://localhost:8080/NewProjects/GetAllprojects");
        console.log("response",response)
        setProjectCount(response.data.projects.length);
        setLoading(false);
      } catch (error) {
        console.error("Failed to fetch manager count", error);
        setError("Failed to fetch manager count");
        setLoading(false);
      }
    };

    fetchProjectCount();
  }, []);

  useEffect(() => {
    const fetchManagerCount = async () => {
      try {
        const response = await axios.get("http://localhost:8080/Manager/Getallmanagers");
        setManagerCount(response.data.length);
        setLoading(false);
      } catch (error) {
        console.error("Failed to fetch manager count", error);
        setError("Failed to fetch manager count");
        setLoading(false);
      }
    };

    fetchManagerCount();
  }, []);


  useEffect(() => {
    const fetchContactCount = async () => {
      try {
        const response = await axios.get("http://localhost:8080/Contact/GetAll");
        setContactCount(response.data.length);
        setLoading(false);
      } catch (error) {
        console.error("Failed to fetch manager count", error);
        setError("Failed to fetch manager count");
        setLoading(false);
      }
    };

    fetchContactCount();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="container py-3">
      <div className="row">
        <div className="col-lg-9">
          <h5
            style={{
              textAlign: "left",
              fontWeight: "bold",
              marginBottom: "20px",
              color: "#20609c",
            }}
          >
            Home
          </h5>
        </div>
      </div>
      <div className="row">
  {/* Total Projects Card */}
      <div className="col-lg-3">
          <div className="card" style={{ width: "100%", padding: "0", border: "none" }}>
            <div style={{ display: "flex", height: "150px", borderRadius: "5px", overflow: "hidden" }}>
              <div style={{backgroundColor: "#4caf50", color: "white", width: "45%", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <span className="material-symbols-outlined" style={{ fontSize: "55px", color: "white" }}>
                team_dashboard
                </span>

                
              </div>
              <div style={{ flex: "1", padding: "20px", borderLeft: "2px solid #ddd", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column" }}>
                <h5 className="card-title" style={{ marginBottom: "5px", marginTop: "0", textAlign: "center", fontSize: "17px" }}>
            Projects
                </h5>
              
                <p className="card-text" style={{ fontSize: "24px", fontWeight: "bold", color: "#20609c", margin: 0, textAlign: "center" }}>
                {projectCount}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Total Managers Card */}
        <div className="col-lg-3">
          <div className="card" style={{ width: "100%", padding: "0", border: "none" }}>
            <div style={{ display: "flex", height: "150px", borderRadius: "5px", overflow: "hidden" }}>
              <div style={{ backgroundColor: "#ff9800", color: "white", width: "45%", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <span className="material-symbols-outlined" style={{ fontSize: "55px", color: "white" }}>
                  groups
                </span>
              </div>
              <div style={{ flex: "1", padding: "20px", borderLeft: "2px solid #ddd", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column" }}>
                <h5 className="card-title" style={{ marginBottom: "5px", marginTop: "0", textAlign: "center", fontSize: "17px" }}>
                  Managers
                </h5>
                <p className="card-text" style={{ fontSize: "24px", fontWeight: "bold", color: "#20609c", margin: 0, textAlign: "center" }}>
                  {managerCount}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Messages Card */}
<div className="col-lg-3">
          <div className="card" style={{ width: "100%", padding: "0", border: "none" }}>
            <div style={{ display: "flex", height: "150px", borderRadius: "5px", overflow: "hidden" }}>
              <div style={{ backgroundColor: "#dc0062", color: "white", width: "45%", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <span className="material-symbols-outlined" style={{ fontSize: "55px", color: "white" }}>
                mail
                </span>
              </div>
              <div style={{ flex: "1", padding: "20px", borderLeft: "2px solid #ddd", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column" }}>
                <h5 className="card-title" style={{ marginBottom: "5px", marginTop: "0", textAlign: "center", fontSize: "17px" }}>
                Messages
                </h5>
                <p className="card-text" style={{ fontSize: "24px", fontWeight: "bold", color: "#20609c", margin: 0, textAlign: "center" }}>
                  {contactCount}
                </p>
              </div>
            </div>
          </div>
        </div>


        {/* Service Consumption Card */}
        
        



      </div>


     
    </div>
  );
};

export default AdminHome;
