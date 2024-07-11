import React, { useState } from 'react';
import './TabComponent.css';

const TabComponent = () => {
  const [activeTab, setActiveTab] = useState('personal');

  const [fullName, setFullName] = useState('Tanmay Gupta');
  const [dob, setDob] = useState('DD-MM-YY');
  const [gender, setGender] = useState('Male');
  const [batch, setBatch] = useState('YYYY-YYYY');
  const [branch, setBranch] = useState('Branch Name');
  const [contact, setContact] = useState('XXXXXXXXXX');
  const [email, setEmail] = useState('abc@gmail.com');
  const [currentAddress, setCurrentAddress] = useState('Hyderbad');


  const [college, setCollege] = useState('BPIT');
  const [degree, setDegree] = useState('B.Tech');
  const [major, setMajor] = useState('Computer Science');
  const [graduationYear, setGraduationYear] = useState('YYYY');
  const [gpa, setGpa] = useState('XXXX');
  const [projects, setProjects] = useState('Projects');


  const [currentJobTitle, setCurrentJobTitle] = useState('SDE');
  const [currentCompanyName, setCurrentCompanyName] = useState('XYZ');
  const [currentDuration, setCurrentDuration] = useState('(start date to present');
  const [currentResponsibilities, setCurrentResponsibilities] = useState('YYYY');
  const [currentLocation, setCurrentLocation] = useState('');

  const [previousJobTitle, setPreviousJobTitle] = useState('SDE');
  const [previousCompanyName, setPreviousCompanyName] = useState('XYZ');
  const [previousDuration, setPreviousDuration] = useState('(start date to present');
  const [previousResponsibilities, setPreviousResponsibilities] = useState('YYYY');
  const [previousLocation, setPreviousLocation] = useState('');


  const [awardTitle, setAwardTitle] = useState('');
  const [awardDetails, setAwardDetails] = useState('');
  const [certificateTitle, setCertificateTitle] = useState('');
  const [certificateDetails, setCertificateDetails] = useState('');

  const handleContactChange = (e) => {
    const value = e.target.value;

    const numericValue = value.replace(/[^0-9+]/g, '');
    setContact(numericValue);
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'personal':
        return (
          <div className="bodysection">
            <div className="personal11">
              <p className="style">fullName</p>
              <p>{fullName}</p>
            </div>
              <div className="form-group">
                <p className="style">date of birth</p>
                <p>{dob}</p>
              </div>
              <div className="form-group">
                <p className="style">Gender</p>
                <p>{gender}</p>
              </div>
              <div className="form-group">
                <p className="style">Batch</p>
                <p>{batch}</p>
              </div>
              <div className="form-group">
                <p className="style">Branch</p>
                <p>{branch}</p>
              </div>
              <div className="form-group">
                <p className="style">Contact</p>
                <p>{contact}</p>
              </div>
              <div className="form-group">
                <p className="style">Email</p>
                <p>{email}</p>
              </div>
              <div className="address">
                <p className="style">Current Address</p>
                <p>{currentAddress}</p>
              </div>
            </div>

        );
      case 'educational':
        return (
          <div className="bodysection">
            <div className="form-group">
              <p className="style">College</p>
              <p>{college}</p>
            </div>
            <div className="form-group">
              <p className="style">Degree</p>
              <p>{degree}</p>
            </div>
            <div className="form-group">
              <p className="style">Major/Field Of Study</p>
              <p>{major}</p>
            </div>
            <div className="form-group">
              <p className="style">Graduation Year</p>
              <p>{graduationYear}</p>
            </div>
            <div className="form-group">
              <p className="style">GPA</p>
              <p>{gpa}</p>
            </div>
            
              <div className="address">
              <p className="style" >Relevant Projects or Research</p>
              <p>{projects}</p>
  
            </div>
          </div>
        );
      case 'professional':
        return (
          <div className="content">
            <div className="employment-section">
              <h3>Current Employment</h3>
              <div className="form-row">
                <div className="form-group">
                  <p className="style">Job Title</p>
                  <p>{currentJobTitle}</p>
                </div>
                <div className="form-group">
                  <p className="style">Company Name</p>
                  <p>{currentCompanyName}</p>
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <p className="style">Duration of Employment</p>
                  <p>{currentDuration}</p>
                </div>
                <div className="form-group">
                  <p className="style">Responsibilities and Achievements</p>
                  <p>{currentResponsibilities}</p>
                </div>
              </div>
              <div className="company">
                <p className="style">Company Location</p>
                <p>{currentLocation}</p>
              </div>
            </div>
            <div className="employment-section">
              <h3>Previous Employment</h3>
              <div className="form-row">
                <div className="form-group">
                  <p className="style">Job Title</p>
                  <p>{previousJobTitle}</p>
                </div>
                <div className="form-group">
                  <p className="style">Company Name</p>
                  <p>{previousCompanyName}</p>
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <p className="style">Duration of Employment</p>
                  <p>{previousDuration}</p>
                </div>
                <div className="form-group">
                  <p className="style">Responsibilities and Achievements</p>
                  <p>{previousResponsibilities}</p>
                </div>
              </div>
              <div className="company">
                <p className="style">Company Location</p>
                <p>{previousLocation}</p>
              </div>
            </div>
          </div>
        );
      case 'achievements':

      default:
        return null;
    }
  };

  return (
    <div className="maindiv">
      <h1>Meet our Distinguished Alumni</h1>
      <div className="tab-container">
        <div className="profile">
          <img src="edit.jpg" alt="edit" className="edit-img"/>
          <img src="newimage.jpg" alt="Profile" className="profile-img" />
          <h3 className="name">Tanmay Gupta</h3>
          <p className="enroll">Enroll No. 123456789xxx</p>
        </div>
        <div className="content-wrapper">
          <div className="tabs">
            <div className={`tab ${activeTab === 'personal' ? 'active' : ''}`} onClick={() => setActiveTab('personal')}>Personal Information</div>
            <div className={`tab ${activeTab === 'educational' ? 'active' : ''}`} onClick={() => setActiveTab('educational')}>Educational Background</div>
            <div className={`tab ${activeTab === 'professional' ? 'active' : ''}`} onClick={() => setActiveTab('professional')}>Professional Information</div>
            <div className={`tab ${activeTab === 'achievements' ? 'active' : ''}`} onClick={() => setActiveTab('achievements')}>Achievements</div>
          </div>
          <div className="content-container">
            <img src="edit.jpg" alt="edit" className="edit-img" />
            {renderContent()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TabComponent;