// Excerpt showing the implementation of PrintComponent

import PrintComponent from '../components/PrintComponent';

const ExecutivePortfolio = () => {
  // Define sections that can be toggled for printing
  const printableSections = [
    { id: 'summary-section', label: 'Executive Summary' },
    { id: 'skills-section', label: 'Skills & Competencies' },
    { id: 'experience-section', label: 'Professional Experience' },
    { id: 'projects-section', label: 'Project Portfolio' },
    { id: 'education-section', label: 'Education & Certifications' }
  ];

  return (
    <div className={styles.portfolioContainer}>
      {/* ...existing component content... */}
      
      {/* Print Component - Add this to your component */}
      <PrintComponent sections={printableSections} />
    </div>
  );
};

export default ExecutivePortfolio;
