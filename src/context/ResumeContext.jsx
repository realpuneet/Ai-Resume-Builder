import React, { createContext, useContext, useState } from 'react';

const ResumeContext = createContext();

export const useResume = () => {
  return useContext(ResumeContext);
};

export const ResumeProvider = ({ children }) => {
  const [resumeData, setResumeData] = useState({
    basics: {
      fullName: '',
      email: '',
      phone: '',
      address: '',
      headline: '',
      photo: '',
    },
    education: [],
    experience: [],
    skills: [],
    projects: [],
    summary: '',
    socialLinks: [],
    theme: 'classic',
    aiPreview: '',
  });

  const updateResume = (section, data) => {
    setResumeData(prev => ({
      ...prev,
      [section]: data,
    }));
  };

  // Add this function to save AI response
  const setAiPreview = (content) => {
    setResumeData(prev => ({
      ...prev,
      aiPreview: content,
    }));
  };

  const clearResume = () => {
    setResumeData({
      basics: {
        fullName: '',
        email: '',
        phone: '',
        address: '',
        headline: '',
        photo: '',
      },
      education: [],
      experience: [],
      skills: [],
      projects: [],
      summary: '',
      socialLinks: [],
      theme: 'classic',
      aiPreview: '', 
    });
  };

  return (
    <ResumeContext.Provider value={{ resumeData, updateResume, clearResume, setAiPreview }}>
      {children}
    </ResumeContext.Provider>
  );
};