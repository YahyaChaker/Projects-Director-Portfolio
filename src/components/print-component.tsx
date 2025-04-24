// components/PrintComponent.tsx
import React, { useState } from 'react';
import { Printer, X, FileText } from 'lucide-react';
import styles from '../styles/ExecutivePortfolio.module.css';

interface PrintSectionProps {
  sections: {
    id: string;
    label: string;
  }[];
}

const PrintComponent: React.FC<PrintSectionProps> = ({ sections }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedSections, setSelectedSections] = useState<string[]>([]);
  const [includeHeader, setIncludeHeader] = useState(true);
  const [includeFooter, setIncludeFooter] = useState(true);
  const [orientation, setOrientation] = useState<'portrait' | 'landscape'>('portrait');
  const [isPreparing, setIsPreparing] = useState(false);

  // Toggle modal
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
    // Initialize with all sections selected when opening
    if (!isModalOpen) {
      setSelectedSections(sections.map(section => section.id));
    }
  };

  // Handle checkbox changes
  const handleCheckboxChange = (sectionId: string) => {
    if (selectedSections.includes(sectionId)) {
      setSelectedSections(selectedSections.filter(id => id !== sectionId));
    } else {
      setSelectedSections([...selectedSections, sectionId]);
    }
  };

  // Toggle select all
  const toggleSelectAll = () => {
    if (selectedSections.length === sections.length) {
      setSelectedSections([]);
    } else {
      setSelectedSections(sections.map(section => section.id));
    }
  };

  // Force Recharts to render properly
  const forceChartsRender = () => {
    // Find all chart containers
    const chartContainers = document.querySelectorAll('.recharts-wrapper');
    
    // Add a class to mark charts as being prepared for print
    document.body.classList.add('preparing-print');
    
    // Force a resize event which will make Recharts redraw
    window.dispatchEvent(new Event('resize'));
    
    // If pie chart is in selected sections, ensure it's fully visible
    if (selectedSections.includes('projects-section')) {
      // Make sure chart containers are visible
      chartContainers.forEach(container => {
        if (container instanceof HTMLElement) {
          container.style.opacity = '1';
          container.style.visibility = 'visible';
          container.style.display = 'block';
        }
      });
    }
    
    // Return a promise that resolves after charts have had time to render
    return new Promise<void>(resolve => {
      setTimeout(() => {
        resolve();
      }, 5000); // Wait 2 seconds for charts to render
    });
  };

  // Handle print action
  const handlePrint = async () => {
    // Show preparing indicator if desired
    setIsPreparing(true);
    
    // First, we need to show all sections that are selected for printing
    sections.forEach(section => {
      const sectionElement = document.getElementById(section.id);
      if (sectionElement) {
        if (selectedSections.includes(section.id)) {
          // Show selected sections and remove noPrint class
          sectionElement.style.display = 'block';
          sectionElement.classList.remove(styles.noPrint);
        } else {
          // Hide unselected sections with noPrint class
          sectionElement.classList.add(styles.noPrint);
        }
      }
    });

    // Handle header and footer display for printing
    const header = document.querySelector('header');
    if (header) {
      if (includeHeader) {
        header.classList.remove(styles.noPrint);
      } else {
        header.classList.add(styles.noPrint);
      }
    }

    const footer = document.querySelector('footer');
    if (footer) {
      if (includeFooter) {
        footer.classList.remove(styles.noPrint);
      } else {
        footer.classList.add(styles.noPrint);
      }
    }

    // Set page orientation
    const style = document.createElement('style');
    style.innerHTML = `@page { size: ${orientation}; }`;
    style.id = 'print-orientation';
    document.head.appendChild(style);

    // Close modal
    setIsModalOpen(false);
    
    try {
      // Wait for charts to render properly
      await forceChartsRender();
      
      // Trigger print after ensuring charts are rendered
      window.print();
      
      // Reset after printing
      setTimeout(() => {
        // Hide preparing indicator
        setIsPreparing(false);
        
        // Reset section visibility
        sections.forEach(section => {
          const sectionElement = document.getElementById(section.id);
          if (sectionElement) {
            sectionElement.classList.remove(styles.noPrint);
            // Reset display property to maintain active section UI
            sectionElement.style.display = '';
          }
        });

        // Reset header/footer
        if (header) header.classList.remove(styles.noPrint);
        if (footer) footer.classList.remove(styles.noPrint);

        // Remove orientation style
        const orientationStyle = document.getElementById('print-orientation');
        if (orientationStyle) orientationStyle.remove();
        
        // Remove preparing class
        document.body.classList.remove('preparing-print');

      }, 500);
    } catch (error) {
      console.error('Error preparing print view:', error);
      setIsPreparing(false);
      document.body.classList.remove('preparing-print');
    }
  };

  return (
    <>
      <button 
        className={styles.printButton} 
        onClick={toggleModal}
        aria-label="Print Portfolio"
        title="Print Portfolio"
      >
        <Printer size={22} />
      </button>

      {isModalOpen && (
        <div className={styles.printModalOverlay}>
          <div className={styles.printModal}>
            <div className={styles.printModalHeader}>
              <h3 className={styles.printModalTitle}>
                <FileText size={20} className={styles.modalIcon} />
                Print Portfolio
              </h3>
              <button 
                className={styles.closeButton} 
                onClick={toggleModal}
                aria-label="Close"
              >
                <X size={20} />
              </button>
            </div>
            
            <div className={styles.printOptions}>
              <div className={styles.selectAllContainer}>
                <button className={styles.selectAllButton} onClick={toggleSelectAll}>
                  {selectedSections.length === sections.length ? 'Deselect All' : 'Select All'}
                </button>
              </div>
              
              <h4 className={styles.optionTitle}>Content to print:</h4>
              <div className={styles.printCheckboxes}>
                {sections.map((section) => (
                  <div key={section.id} className={styles.checkboxItem}>
                    <input
                      type="checkbox"
                      id={`print-${section.id}`}
                      className={styles.checkboxCustom}
                      checked={selectedSections.includes(section.id)}
                      onChange={() => handleCheckboxChange(section.id)}
                    />
                    <label 
                      htmlFor={`print-${section.id}`}
                      className={styles.checkboxLabel}
                    >
                      {section.label}
                    </label>
                  </div>
                ))}
              </div>
              
              <div className={styles.printOptionsExtra}>
                <h4 className={styles.optionTitle}>Page elements:</h4>
                <div className={styles.checkboxItem}>
                  <input
                    type="checkbox"
                    id="include-header"
                    className={styles.checkboxCustom}
                    checked={includeHeader}
                    onChange={() => setIncludeHeader(!includeHeader)}
                  />
                  <label 
                    htmlFor="include-header"
                    className={styles.checkboxLabel}
                  >
                    Include header
                  </label>
                </div>
                
                <div className={styles.checkboxItem}>
                  <input
                    type="checkbox"
                    id="include-footer"
                    className={styles.checkboxCustom}
                    checked={includeFooter}
                    onChange={() => setIncludeFooter(!includeFooter)}
                  />
                  <label 
                    htmlFor="include-footer"
                    className={styles.checkboxLabel}
                  >
                    Include footer
                  </label>
                </div>
              </div>
              
              <div className={styles.printOptionsExtra}>
                <h4 className={styles.optionTitle}>Page orientation:</h4>
                <div className={styles.orientationOptions}>
                  <div className={`${styles.orientationOption} ${orientation === 'portrait' ? styles.orientationActive : ''}`}>
                    <input
                      type="radio"
                      id="portrait"
                      name="orientation"
                      value="portrait"
                      checked={orientation === 'portrait'}
                      onChange={() => setOrientation('portrait')}
                      className={styles.radioHidden}
                    />
                    <label 
                      htmlFor="portrait"
                      className={styles.orientationLabel}
                      title="Portrait orientation"
                    >
                      <div className={styles.orientationIcon}>
                        <div className={styles.portraitIcon}></div>
                      </div>
                      Portrait
                    </label>
                  </div>
                  
                  <div className={`${styles.orientationOption} ${orientation === 'landscape' ? styles.orientationActive : ''}`}>
                    <input
                      type="radio"
                      id="landscape"
                      name="orientation"
                      value="landscape"
                      checked={orientation === 'landscape'}
                      onChange={() => setOrientation('landscape')}
                      className={styles.radioHidden}
                    />
                    <label 
                      htmlFor="landscape"
                      className={styles.orientationLabel}
                      title="Landscape orientation"
                    >
                      <div className={styles.orientationIcon}>
                        <div className={styles.landscapeIcon}></div>
                      </div>
                      Landscape
                    </label>
                  </div>
                </div>
              </div>
            </div>
            
            <div className={styles.printActions}>
              <button 
                className={styles.cancelButton}
                onClick={toggleModal}
              >
                Cancel
              </button>
              <button 
                className={styles.printConfirmButton}
                onClick={handlePrint}
                disabled={selectedSections.length === 0 || isPreparing}
              >
                {isPreparing ? (
                  <span>Preparing...</span>
                ) : (
                  <>
                    <Printer size={16} className={styles.buttonIcon} />
                    Print
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      )}
      
      {/* Visual indicator when preparing print (optional) */}
      {isPreparing && (
        <div className={styles.preparingOverlay}>
          <div className={styles.preparingContent}>
            Preparing print view...
          </div>
        </div>
      )}
    </>
  );
};

export default PrintComponent;