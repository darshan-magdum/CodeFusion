import React, { useEffect, useState } from "react";
import { jsPDF } from 'jspdf';
import "../../../styles/UploadDocument.css"; 
import axios from "axios";
import { Document, Packer, Paragraph, TextRun } from "docx";
import { saveAs } from "file-saver";
const ViewDocumentation = () => {
  const [allResults, setAllResults] = useState([]);  // New state for all results
  const [analysisResults, setAnalysisResults] = useState([]);
  const [projectSummary, setProjectSummary] = useState(null);
  const [output, setOutput] = useState(false);
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState("");
  const [managerId, setManagerId] = useState(null);

  useEffect(() => {
    const id = localStorage.getItem("userId");
    setManagerId(id);
  }, []);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get('http://localhost:8080/NewProjects/GetAllprojects');
        setProjects(response.data.projects);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };

    fetchProjects();
  }, []);

  useEffect(() => {
    if (managerId) {
      axios.get(`http://localhost:8080/NewProjectSummary/ProjectsSummary/${managerId}`)
        .then(response => {
          setAllResults(response.data);  // Set all results
          setAnalysisResults(response.data);
          setOutput(true);
        })
        .catch(err => {
          console.error("Error fetching Project data:", err);
          setAllResults([]);
          setAnalysisResults([]);
          setOutput(false);
        });
    }
  }, [managerId]);

  useEffect(() => {
    if (selectedProject) {
      // Filter results based on selected project
      const filteredResults = allResults.filter(result => result.projectName.trim() === selectedProject.trim());
      setAnalysisResults(filteredResults);
    } else {
      // Reset to all results if no project selected
      setAnalysisResults(allResults);
    }
  }, [selectedProject, allResults]);

//   const handleDownloadAllPDF = () => {
//     const doc = new jsPDF();
//     doc.setFontSize(12);
//     const pageWidth = doc.internal.pageSize.getWidth();
//     const margin = 10;
//     const textWidth = pageWidth - 2 * margin;
//     let yOffset = margin;

//     const addTextToPage = (text, startYOffset) => {
//       let splitText = doc.splitTextToSize(text, textWidth);
//       let currentYOffset = startYOffset;

//       splitText.forEach((line, index) => {
//         if (currentYOffset + 10 > doc.internal.pageSize.getHeight() - margin) {
//           doc.addPage();
//           currentYOffset = margin;
//         }
//         doc.text(line, margin, currentYOffset);
//         currentYOffset += 10;
//       });

//       return currentYOffset;
//     };

//     if (projectSummary) {
//       doc.setFontSize(14);
//       doc.setFont('Helvetica', 'bold');
//       doc.text("Project Summary", margin, yOffset);
//       doc.setFont('Helvetica', 'normal');
//       yOffset += 10;
//       yOffset = addTextToPage(projectSummary, yOffset);
//       doc.addPage();
//     }

//     analysisResults.forEach((result, index) => {
//       if (index !== 0) doc.addPage();

//       doc.setFontSize(16);
//       doc.setFont('Helvetica', 'bold');
//       yOffset = margin;
//       doc.text(result.projectName, margin, yOffset);
//       doc.setFont('Helvetica', 'normal');
//       yOffset += 10;
//       yOffset = addTextToPage(result.projectSummary, yOffset);
//     });
//     const now = new Date();
// const date = `${now.getDate().toString().padStart(2, '0')}${(now.getMonth() + 1).toString().padStart(2, '0')}${now.getFullYear()}${now.getHours().toString().padStart(2, '0')}${now.getMinutes().toString().padStart(2, '0')}`;
//     doc.save(`${selectedProject?`${selectedProject}_Analysis_${date}.pdf`:`AllProject_Analysis_${date}.pdf`}`);
//   };
const handleDownloadAllPDF = async () => {
  // Create a new Document
  const sections = analysisResults.map((result) => ({
    properties: {},
    children: [
      new Paragraph({
        children: [
          new TextRun({
            text: result.projectName,
            bold: true,
            size: 45, // size in half-points
          }),
        ],
        alignment: "center",
      }),
      ...result.projectSummary.split("\n").map(line => new Paragraph({
        children: [
          new TextRun({
            text: line,
            size: 24,
          }),
        ],
      })),
    ],
  }));

  const doc = new Document({
    sections: sections,
  });

  // Generate the filename and trigger download
  const now = new Date();
  const date = `${now.getDate().toString().padStart(2, '0')}${(now.getMonth() + 1).toString().padStart(2, '0')}${now.getFullYear()}${now.getHours().toString().padStart(2, '0')}${now.getMinutes().toString().padStart(2, '0')}`;
  const fileName = `${selectedProject ? selectedProject : "AllProjects"}_Analysis_${date}.docx`;

  const buffer = await Packer.toBlob(doc);
  saveAs(buffer, fileName);
};





  return (
    <div>
      <div className="container py-3">
        <div className='DownloadAll'>
          <div className="row align-items-center">
            <div className="col-6">
              <h5
                style={{
                  fontWeight: "bold",
                  marginBottom: "10px",
                  marginTop: "10px",
                  color: "#20609c",
                }}
              >
                View Code Documentation
              </h5>
            </div>

            <div className="col-lg-3">
              <label htmlFor="projectDropdown">Select Project:</label>
              <select
                id="projectDropdown"
                value={selectedProject}
                onChange={(e) => setSelectedProject(e.target.value)}
                className="form-control"
              >
                <option value="">Select a project</option>
                {projects.map((project) => (
                  <option key={project._id} value={project.projectName}>
                    {project.projectName}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="form-group">
            {analysisResults.length > 0 && selectedProject && (
              <div className="col-4">
                <button
                  className="btn btn-primary"
                  onClick={handleDownloadAllPDF}
                >
                  Download All as PDF
                </button>
              </div>
            )}
          </div>
        </div>

        {analysisResults.length === 0 && selectedProject &&(
          <div className="row d-flex" style={{ width: "1000px" }}>
            <div className="col-lg-10">
              <div className="card">
                <div className="card-body text-center">
                  <p style={{ color: "black" }}>{`${selectedProject} project is not analyzed yet!!!`}</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {!selectedProject &&(
          <div className="row d-flex" style={{ width: "1000px" }}>
            <div className="col-lg-10">
              <div className="card">
                <div className="card-body text-center">
                  <p style={{ color: "black" }}>Please select the Project</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {analysisResults.length > 0 && selectedProject && (
          <div className="row d-flex" id="result" style={{ width: "1000px" }}>
            {analysisResults.map((result, resultIndex) => (
              <div key={resultIndex} className="col-lg-10 mb-4">
                <div className="card">
                  <div className="card-header">
                    <h5>{result.projectName}</h5>
                  </div>
                  <div className="card-body">
                    {result.projectSummary && (
                      <div className="mt-3">
                        <div className="card">
                          <div className="card-header">Project Summary</div>
                          <div className="card-body">
                            <pre>{result.projectSummary}</pre>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ViewDocumentation;