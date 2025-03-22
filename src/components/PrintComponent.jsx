import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { Printer, Check, ChevronDown, X } from 'lucide-react';
import styles from '../styles/ExecutivePortfolio.module.css';

const PrintComponent = ({ sections = [] }) => {
  const [showMenu, setShowMenu] = useState(false);
  const [selectedSections, setSelectedSections] = useState(
    sections.reduce((acc, section) => ({ ...acc, [section.id]: true }), {})
  );
  
  // Function to handle print operation
  const handlePrint = () => {
    // Close the menu
    setShowMenu(false);
    
    // Add a class to the body for print preparation
    document.body.classList.add('preparing-print');
    
    // Apply print hiding to non-selected sections
    sections.forEach(section => {
      const sectionElement = document.getElementById(section.id);
      if (sectionElement) {
        if (selectedSections[section.id]) {
          sectionElement.classList.remove('noPrint');
        } else {
          sectionElement.classList.add('noPrint');
        }
      }
    });
    
    // Small delay to ensure styles are applied
    setTimeout(() => {
      // Trigger print
      window.print();
      
      // Remove preparation class after printing
      window.onafterprint = () => {
        document.body.classList.remove('preparing-print');
        // Reset any section hiding
        sections.forEach(section => {
          const sectionElement = document.getElementById(section.id);
          if (sectionElement) {
            sectionElement.classList.remove('noPrint');
          }
        });
      };
    }, 100);
  };
  
  const toggleMenu = () => setShowMenu(!showMenu);
  
  const toggleSection = (id) => {
    setSelectedSections(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };
  
  const selectAll = () => {
    const allSelected = sections.reduce((acc, section) => ({ ...acc, [section.id]: true }), {});
    setSelectedSections(allSelected);
  };
  
  const deselectAll = () => {
    const allDeselected = sections.reduce((acc, section) => ({ ...acc, [section.id]: false }), {});
    setSelectedSections(allDeselected);
  };
  
  return (
    <div className={styles.printComponent}>
      {showMenu && (
        <div className={styles.printMenu}>
          <div className={styles.printMenuHeader}>
            <span className={styles.printMenuTitle}>
              <Printer className={styles.modalIcon} size={16} /> Print Portfolio
            </span>
            <button className={styles.closeButton} onClick={toggleMenu}>
              <X size={18} />
            </button>
          </div>
          
          <div className={styles.printSections}>
            {sections.map((section) => (
              <div key={section.id} className={styles.sectionItem}>
                <input
                  type="checkbox"
                  id={`print-${section.id}`}
                  checked={selectedSections[section.id]}
                  onChange={() => toggleSection(section.id)}
                  className={styles.sectionCheckbox}
                />
                <label htmlFor={`print-${section.id}`} className={styles.sectionLabel}>
                  {section.label}
                </label>
              </div>
            ))}
          </div>
          
          <div className={styles.printActions}>
            <div>
              <button className={styles.selectAction} onClick={selectAll}>
                Select All
              </button>
              <button className={styles.selectAction} onClick={deselectAll}>
                Deselect All
              </button>
            </div>
          </div>
          
          <button 
            className={styles.printAction}
            onClick={handlePrint}
            disabled={!Object.values(selectedSections).some(Boolean)}
          >
            <Printer size={18} /> Print Selected Sections
          </button>
        </div>
      )}
      
      <button onClick={toggleMenu} className={styles.printComponentButton}>
        <Printer size={18} /> Print Portfolio
      </button>
    </div>
  );
};

export default PrintComponent;
