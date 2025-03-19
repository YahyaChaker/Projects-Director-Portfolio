import React, { useState } from 'react';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from 'recharts';
import * as LucideIcons from 'lucide-react';
import styles from '../styles/ExecutivePortfolio.module.css';
import PrintComponent from './print-component'; // Import PrintComponent for print functionality

// Type assertion for Lucide icons
const {
  MapPin,
  Phone,
  Mail,
  Linkedin,
  ArrowUpRight,
  User,
  Target,
  Briefcase,
  BarChart2,
  BookOpen,
  ChevronDown,
  ChevronRight,
 
} = LucideIcons as any;

const ExecutivePortfolio: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('summary');
  const [expandedSkill, setExpandedSkill] = useState<string | null>(null);

  // Print sections configuration
  const printSections = [
    { id: 'summary-section', label: 'Executive Summary' },
    { id: 'skills-section', label: 'Skills & Strengths' },
    { id: 'experience-section', label: 'Professional Experience' },
    { id: 'projects-section', label: 'Projects Portfolio' },
    { id: 'education-section', label: 'Education & Certifications' },
  ];
  
  // Data for skills radar chart
  const skillsData = [
    { subject: 'Leadership', A: 95, fullMark: 100 },
    { subject: 'Communication', A: 90, fullMark: 100 },
    { subject: 'Problem Solving', A: 92, fullMark: 100 },
    { subject: 'Strategic Planning', A: 93, fullMark: 100 },
    { subject: 'Project Management', A: 94, fullMark: 100 },
    { subject: 'Budget Management', A: 91, fullMark: 100 },
  ];
  
  // Data for experience timeline
  const experienceData = [
    { year: '2023-Present', title: 'FM Projects Director', company: 'Elegancia Facilities Management' },
    { year: '2019-2023', title: 'Senior Facilities Manager', company: 'Elegancia Facilities Management' },
    { year: '2018-2019', title: 'MEP Construction Manager', company: 'Qatari Diar - Saudi Bin Laden Group' },
    { year: '2016-2018', title: 'Operations and Maintenance Manager', company: 'Al Jabor Realty' },
    { year: '2013-2016', title: 'Project Manager - MEP and Instrumentation', company: 'Roots Energy and Engineering Services' },
    { year: '2011-2013', title: 'Senior Electrical Engineer', company: 'Roots Energy and Engineering Services' },
    { year: '2007-2011', title: 'Facility Manager', company: 'Allied Maintenance Co. Ltd.' },
  ];
  
  // Data for project value chart
  const projectValueData = [
    { name: 'Lusail Commercial Boulevard', value: 93 },
    { name: 'Al Seef Towers', value: 14 },
    { name: 'Korean Medical Center', value: 9.5 },
    { name: 'Pumping Stations', value: 24 },
    { name: 'QNB Tower', value: 22.5 },
  ];
  
  // Data for performance improvements chart
  // const performanceData = [
  //   { name: 'Maintenance Compliance', before: 76, after: 98.5 },
  //   { name: 'Project Completion Rate', before: 78, after: 94 },
  //   { name: 'Safety Incidents', before: 100, after: 55 },
  //   { name: 'Team Retention', before: 72, after: 100 },
  //   { name: 'Cost Reduction', before: 100, after: 74 },
  // ];
  
  // Boho summer vibe color palette
  const COLORS = ['#F9A826', '#2A9D8F', '#E76F51', '#8AB17D', '#E9C46A'];
  
  const toggleSkill = (skill: string): void => {
    if (expandedSkill === skill) {
      setExpandedSkill(null);
    } else {
      setExpandedSkill(skill);
    }
  };
  
  return (
    <div className={styles.portfolioContainer}>
      {/* Header */}
      <header className={styles.header}>
        <div className={styles.headerContainer}>
          <div className={styles.headerContent}>
            <div className={styles.headerTextContent}>
              <div className={styles.headerImgaeTitle}>
                <div className={styles.profileImageContainer}>
                  <img 
                    src='/Profile-Photo.jpg'
                    alt="Yahya Chaker" 
                    className={styles.profileImage}
                  />
                </div>
                
                <div>
                  <h1 className={styles.title}>Yahya Chaker</h1>
                  <h2 className={styles.subtitle}>Projects Director</h2>
                </div>
              </div>

              <div className={styles.contactInfo}>
                <div className={styles.contactItem}>
                  <MapPin className={styles.lucideIcon} size={18} />
                  <span>Doha, Qatar</span>
                </div>
                <div className={styles.contactItem}>
                  <Phone className={styles.lucideIcon} size={18} />
                  <span>(974) 6645 8738</span>
                </div>
                <div className={styles.contactItem}>
                  <Mail className={styles.lucideIcon} size={18} />
                  <span>yahya_shaker@hotmail.com</span>
                </div>
                <div className={styles.contactItem}>
                  <Linkedin className={styles.lucideIcon} size={18} />
                  <a href="https://www.linkedin.com/in/yahya-chaker/" target="_blank" rel="noopener noreferrer" className={styles.linkedinLink}>
                    LinkedIn Profile <ArrowUpRight className={styles.lucideIcon} size={14} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      
      {/* Navigation */}
      <nav className={styles.nav}>
        <div className={styles.navContainer}>
          <div className={styles.navItems}>
            <button 
              onClick={() => setActiveSection('summary')}
              className={`${styles.navButton} ${activeSection === 'summary' ? styles.navButtonActive : ''}`}
            >
              <User className={styles.lucideIcon} size={16} />
              <span>Summary</span>
            </button>
            <button 
              onClick={() => setActiveSection('skills')}
              className={`${styles.navButton} ${activeSection === 'skills' ? styles.navButtonActive : ''}`}
            >
              <Target className={styles.lucideIcon} size={16} />
              <span>Skills & Strengths</span>
            </button>
            <button 
              onClick={() => setActiveSection('experience')}
              className={`${styles.navButton} ${activeSection === 'experience' ? styles.navButtonActive : ''}`}
            >
              <Briefcase className={styles.lucideIcon} size={16} />
              <span>Experience</span>
            </button>
            <button 
              onClick={() => setActiveSection('projects')}
              className={`${styles.navButton} ${activeSection === 'projects' ? styles.navButtonActive : ''}`}
            >
              <BarChart2 className={styles.lucideIcon} size={16} />
              <span>Projects</span>
            </button>
            <button 
              onClick={() => setActiveSection('education')}
              className={`${styles.navButton} ${activeSection === 'education' ? styles.navButtonActive : ''}`}
            >
              <BookOpen className={styles.lucideIcon} size={16} />
              <span>Education</span>
            </button>
          </div>
        </div>
      </nav>
      
      {/* Main Content */}
      <main className={styles.main}>
        <div className={styles.mainContainer}>
          {/* Executive Summary */}
          <section 
            id="summary-section" 
            className={`${styles.summarySection} ${activeSection === 'summary' ? styles.visible : styles.hidden}`}
          >
            {/* Hero Section */}
            <div className={styles.summaryHero}>
              <div className={styles.summaryHeroPattern}></div>
              <div className={styles.summaryHeroContent}>
                <div className={styles.summaryHeadline}>Projects Director Portfolio</div>
                <h2 className={styles.summaryTitle}>Transforming Operations Into Excellence</h2>
                <p className={styles.summaryTagline}>
                  Delivering exceptional results by combining strategic vision, operational expertise, and a proven track record of leading multimillion-dollar projects and high-performing teams.
                </p>
                
                {/* Key Statistics */}
                <div className={styles.summaryHighlights}>
                  <div className={styles.summaryHighlight}>
                    <div className={styles.highlightNumber}>18+</div>
                    <div className={styles.highlightLabel}>Years Experience</div>
                  </div>
                  <div className={styles.summaryHighlight}>
                    <div className={styles.highlightNumber}>720+</div>
                    <div className={styles.highlightLabel}>Team Size Led</div>
                  </div>
                  <div className={styles.summaryHighlight}>
                    <div className={styles.highlightNumber}>163M</div>
                    <div className={styles.highlightLabel}>QAR Projects Value</div>
                  </div>
                  <div className={styles.summaryHighlight}>
                    <div className={styles.highlightNumber}>94%</div>
                    <div className={styles.highlightLabel}>Completion Rate</div>
                  </div>
                </div>
              </div>
            </div>
          
            {/* Main Content */}
            <div className={styles.summaryContent}>
              <p className={styles.summaryText}>
                <strong>UPDA-accredited Electrical and Electronics Engineer</strong> with extensive leadership experience across the GCC region. My career has been defined by consistently delivering operational excellence and strategic growth in diverse sectors including facilities management, construction, real estate, and oil & gas.
              </p>
              <p className={styles.summaryText}>
                I specialize in optimizing operations, driving efficiency improvements, and maximizing resource utilization while maintaining the highest standards of quality and safety. My approach combines <strong>analytical precision</strong> with <strong>strategic vision</strong> to transform organizational performance and deliver measurable results that exceed expectations.
              </p>
              
              {/* Executive Performance Metrics - Refined Professional Design */}
              <div className={styles.metricsSection}>
                <div className={styles.metricsSectionHeader}>
                  <div className={styles.metricsHeading}>
                    {/*<div className={styles.headingAccent}></div>*/}  
                    Performance Overview
                  </div>
                  <div className={styles.metricsSubheading}>
                    Key performance indicators showing measurable improvements across critical business areas under my leadership.
                  </div>
                </div>
                
                <div className={styles.metricsGrid}>
                  {/* Maintenance Compliance */}
                  <div className={`${styles.metricCard} ${styles.maintenance}`}>
                    <div className={styles.metricTitle}>Maintenance Compliance</div>
                    <div className={styles.metricValue}>98.5%</div>
                    <div className={`${styles.metricChange} ${styles.positiveChange}`}>
                      +22.5% improvement
                    </div>
                    
                    <div className={styles.metricBar}>
                      <div 
                        className={`${styles.metricBarBefore} ${styles.metricBarBefore76}`}
                      ></div>
                      <div 
                        className={`${styles.metricBarAfter} ${styles.metricBarAfter98_5}`}
                      ></div>
                    </div>
                    
                    <div className={styles.metricComparison}>
                      <span className={styles.metricLabel}>Initial: 76%</span>
                      <span className={styles.metricLabel}>Current: 98.5%</span>
                    </div>
                  </div>
                  
                  {/* Project Completion */}
                  <div className={`${styles.metricCard} ${styles.completion}`}>
                    <div className={styles.metricTitle}>Project Completion</div>
                    <div className={styles.metricValue}>94%</div>
                    <div className={`${styles.metricChange} ${styles.positiveChange}`}>
                      +16% improvement
                    </div>
                    
                    <div className={styles.metricBar}>
                      <div 
                        className={`${styles.metricBarBefore} ${styles.metricBarBefore78}`}
                      ></div>
                      <div 
                        className={`${styles.metricBarAfter} ${styles.metricBarAfter94}`}
                      ></div>
                    </div>
                    
                    <div className={styles.metricComparison}>
                      <span className={styles.metricLabel}>Initial: 78%</span>
                      <span className={styles.metricLabel}>Current: 94%</span>
                    </div>
                  </div>
                  
                  {/* Safety Incidents */}
                  <div className={`${styles.metricCard} ${styles.safety}`}>
                    <div className={styles.metricTitle}>Safety Incidents</div>
                    <div className={styles.metricValue}>-45%</div>
                    <div className={`${styles.metricChange} ${styles.negativeChange}`}>
                      Significant reduction
                    </div>
                    
                    <div className={styles.metricBar}>
                      <div 
                        className={`${styles.metricBarBefore} ${styles.metricBarBefore100}`}
                      ></div>
                      <div 
                        className={`${styles.metricBarAfter} ${styles.metricBarAfter55}`}
                      ></div>
                    </div>
                    
                    <div className={styles.metricComparison}>
                      <span className={styles.metricLabel}>Before: 100%</span>
                      <span className={styles.metricLabel}>After: 55%</span>
                    </div>
                  </div>
                  
                  {/* Team Retention */}
                  <div className={`${styles.metricCard} ${styles.retention}`}>
                    <div className={styles.metricTitle}>Team Retention</div>
                    <div className={styles.metricValue}>100%</div>
                    <div className={`${styles.metricChange} ${styles.positiveChange}`}>
                      +28% improvement
                    </div>
                    
                    <div className={styles.metricBar}>
                      <div 
                        className={`${styles.metricBarBefore} ${styles.metricBarBefore72}`}
                      ></div>
                      <div 
                        className={`${styles.metricBarAfter} ${styles.metricBarAfter100}`}
                      ></div>
                    </div>
                    
                    <div className={styles.metricComparison}>
                      <span className={styles.metricLabel}>Initial: 72%</span>
                      <span className={styles.metricLabel}>Current: 100%</span>
                    </div>
                  </div>
                  
                  {/* Cost Reduction */}
                  <div className={`${styles.metricCard} ${styles.cost}`}>
                    <div className={styles.metricTitle}>Cost Reduction</div>
                    <div className={styles.metricValue}>26%</div>
                    <div className={`${styles.metricChange} ${styles.negativeChange}`}>
                      Reduced expenses
                    </div>
                    
                    <div className={styles.metricBar}>
                      <div 
                        className={`${styles.metricBarBefore} ${styles.metricBarBefore100}`}
                      ></div>
                      <div 
                        className={`${styles.metricBarAfter} ${styles.metricBarAfter74}`}
                      ></div>
                    </div>
                    
                    <div className={styles.metricComparison}>
                      <span className={styles.metricLabel}>Before: 100%</span>
                      <span className={styles.metricLabel}>After: 74%</span>
                    </div>
                  </div>
                </div>
                
                <div className={styles.metricsSummary}>
                  <div className={styles.summaryBox}>
                    <div className={styles.summaryText}>
                      These metrics demonstrate my consistent track record of driving operational excellence and delivering measurable business results across multiple critical performance areas.
                    </div>
                  </div>
                </div>
              </div>



              
              {/* Key Achievements */}
              <div className={styles.summaryAchievements}>
                <div className={styles.achievement}>
                  <div className={styles.achievementIcon}>
                    <MapPin className={styles.lucideIcon} size={20} />
                  </div>
                  <div className={styles.achievementTitle}>Lekhwiya Head Quarter</div>
                  <div className={styles.achievementText}>
                    Transformed a stalled project from 10% to 100% MEP completion within 6 months, managing 720 personnel and reducing safety incidents by 45%.
                  </div>
                </div>
                
                <div className={styles.achievement}>
                  <div className={styles.achievementIcon}>
                    <Target className={styles.lucideIcon} size={20} />
                  </div>
                  <div className={styles.achievementTitle}>Ministry of Interior</div>
                  <div className={styles.achievementText}>
                    Increased maintenance compliance from 76% to 98.5%, securing a three-year contract renewal with zero penalties over the entire term.
                  </div>
                </div>
                
                <div className={styles.achievement}>
                  <div className={styles.achievementIcon}>
                    <BarChart2 className={styles.lucideIcon} size={20} />
                  </div>
                  <div className={styles.achievementTitle}>Al Jabor Realty</div>
                  <div className={styles.achievementText}>
                    Generated over 1M QAR in annual cost savings while reducing payroll expenses by 18% and simultaneously increasing productivity by 22%.
                  </div>
                </div>
                
                <div className={styles.achievement}>
                  <div className={styles.achievementIcon}>
                    <Briefcase className={styles.lucideIcon} size={20} />
                  </div>
                  <div className={styles.achievementTitle}>Elegancia Projects</div>
                  <div className={styles.achievementText}>
                    Currently managing projects valued at 163M QAR with 629 total personnel, improving on-time completion rates from 78% to 94%.
                  </div>
                </div>
              </div>
            </div>
          </section>
          
          {/* Skills and Strengths */}
          <section 
            id="skills-section" 
            className={`${styles.section} ${activeSection === 'skills' ? styles.visible : styles.hidden}`}
          >
            <h2 className={styles.sectionTitleWithMargin}>Key Skills and Strengths</h2>
            
            <div className={styles.skillsContainer}>
              <div className={styles.skillsHalf}>
                <div className={styles.chartContainer}>
                  <ResponsiveContainer width="100%" height="100%">
                    <RadarChart cx="50%" cy="50%" outerRadius="80%" data={skillsData}>
                      <PolarGrid />
                      <PolarAngleAxis dataKey="subject" />
                      <PolarRadiusAxis angle={30} domain={[0, 100]} />
                      <Radar name="Skills" dataKey="A" stroke="#F9A826" fill="#F9A826" fillOpacity={0.6} />
                    </RadarChart>
                  </ResponsiveContainer>
                </div>
              </div>
              
              <div className={styles.skillsHalf}>
                <div className={styles.skillsList}>
                  {/* Leadership */}
                  <div className={styles.skillCard}>
                    <button 
                      className={styles.skillCardButton}
                      onClick={() => toggleSkill('leadership')}
                    >
                      <div className={styles.skillCardTitle}>Leadership</div>
                      {expandedSkill === 'leadership' ? 
                        <ChevronDown className={styles.lucideIcon} size={20} /> : 
                        <ChevronRight className={styles.lucideIcon} size={20} />
                      }
                    </button>
                    
                    {expandedSkill === 'leadership' && (
                      <div className={styles.skillCardContent}>
                        <ul className={styles.skillCardList}>
                          <li>Spearheaded MEP completion for Lekhwiya Head Quarter project, transforming progress from 10% to 100% within 6 months</li>
                          <li>Managed a team of 720 personnel across 5 buildings, implementing safety-conscious strategies that reduced incidents by 45%</li>
                          <li>Directed a 220-member team for Ministry of Interior project, increasing preventative maintenance compliance from 76% to 98.5%</li>
                        </ul>
                      </div>
                    )}
                  </div>
                  
                  {/* Communication */}
                  <div className={styles.skillCard}>
                    <button 
                      className={styles.skillCardButton}
                      onClick={() => toggleSkill('communication')}
                    >
                      <div className={styles.skillCardTitle}>Communication</div>
                      {expandedSkill === 'communication' ? 
                        <ChevronDown className={styles.lucideIcon} size={20} /> : 
                        <ChevronRight className={styles.lucideIcon} size={20} />
                      }
                    </button>
                    
                    {expandedSkill === 'communication' && (
                      <div className={styles.skillCardContent}>
                        <ul className={styles.skillCardList}>
                          <li>Secured three-year contract renewal by implementing targeted communication strategies</li>
                          <li>Established weekly alignment meetings with stakeholders and developed comprehensive documentation</li>
                          <li>Cultivated strong relationships with suppliers, reducing costs by 26% and improving system uptime from 96.7% to 99.3%</li>
                        </ul>
                      </div>
                    )}
                  </div>
                  
                  {/* Problem-solving */}
                  <div className={styles.skillCard}>
                    <button 
                      className={styles.skillCardButton}
                      onClick={() => toggleSkill('problem-solving')}
                    >
                      <div className={styles.skillCardTitle}>Problem-solving</div>
                      {expandedSkill === 'problem-solving' ? 
                        <ChevronDown className={styles.lucideIcon} size={20} /> : 
                        <ChevronRight className={styles.lucideIcon} size={20} />
                      }
                    </button>
                    
                    {expandedSkill === 'problem-solving' && (
                      <div className={styles.skillCardContent}>
                        <ul className={styles.skillCardList}>
                          <li>Addressed budget inefficiencies by implementing zero-based budgeting, reducing payroll expenses by 18% while increasing productivity by 22%</li>
                          <li>Resolved critical documentation issues, improving reporting accuracy to 90% and eliminating disputed KPI deductions</li>
                          <li>Improved departmental NPS scores by 15 points through targeted process improvements</li>
                        </ul>
                      </div>
                    )}
                  </div>
                  
                  {/* Strategic Planning */}
                  <div className={styles.skillCard}>
                    <button 
                      className={styles.skillCardButton}
                      onClick={() => toggleSkill('strategic-planning')}
                    >
                      <div className={styles.skillCardTitle}>Strategic Planning</div>
                      {expandedSkill === 'strategic-planning' ? 
                        <ChevronDown className={styles.lucideIcon} size={20} /> : 
                        <ChevronRight className={styles.lucideIcon} size={20} />
                      }
                    </button>
                    
                    {expandedSkill === 'strategic-planning' && (
                      <div className={styles.skillCardContent}>
                        <ul className={styles.skillCardList}>
                          <li>Developed multi-tiered budget tracking system and created customized financial dashboards</li>
                          <li>Generated over 1M QAR in annual cost savings through strategic contract restructuring</li>
                          <li>Implemented a centralized resource management system, improving on-time completion rates from 78% to 94% across all projects</li>
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </section>
          
          {/* Professional Experience */}
          <section 
            id="experience-section" 
            className={`${styles.section} ${activeSection === 'experience' ? styles.visible : styles.hidden}`}
          >
            <h2 className={styles.sectionTitleWithMargin}>Professional Experience</h2>
            
            <div className={styles.experienceContainer}>
              <div className={styles.timelineContainer}>
                <div className={styles.timeline}>
                  {experienceData.map((job, index) => (
                    <div key={index} className={styles.timelineItem}>
                      <div className={styles.timelineMarker}></div>
                      <div className={styles.timelineYear}>{job.year}</div>
                      <div className={styles.timelineTitle}>{job.title}</div>
                      <div className={styles.timelineCompany}>{job.company}</div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className={styles.detailsContainer}>
                {/* FM Projects Director */}
                <div className={styles.experienceCard}>
                  <h3 className={styles.cardTitle}>FM Projects Director</h3>
                  <div className={styles.cardSubtitle}>Elegancia Facilities Management, Qatar | May 2023 – Present</div>
                  
                  <h4 className={styles.cardHeading}>Projects:</h4>
                  <ul className={styles.cardList}>
                    <li>Qatari Diar - Lusail Commercial Boulevard: Property and Facility Management Services. Project Value: 93M QAR, Total Manpower: 320.</li>
                    <li>Qatari Diar – Al Seef Towers: Operation & Maintenance Services. Project Value: 14M QAR, Total Manpower: 40.</li>
                    <li>KMC – Korean Medical Center: Integrated Facilities Management. Project Value: 9.5M QAR, Total Manpower: 65.</li>
                    <li>Qatar Diar – Pumping Stations: Operations and Maintenance for 19 pumping stations. Project Value: 24M QAR, Total Manpower: 72.</li>
                    <li>QNB Tower: Integrated Facilities Management. Project Value: 22.5M QAR, Total Manpower: 132.</li>
                  </ul>
                  
                  <h4 className={styles.cardHeading}>Responsibilities:</h4>
                  <ul className={styles.cardList}>
                    <li>Planned, coordinated, and supervised the execution of projects.</li>
                    <li>Managed project budgets, timelines, resources, and quality.</li>
                    <li>Led the handover process and acted as a client representative.</li>
                    <li>Communicated with stakeholders and clients.</li>
                    <li>Ensured conformity with safety, environmental, and contractual obligations.</li>
                    <li>Determined and eliminated project hazards and conflicts.</li>
                    <li>Served as a source of leadership and direction for the project team and contractors.</li>
                  </ul>
                  
                  <h4 className={styles.cardHeading}>Key Achievements:</h4>
                  <ul className={styles.cardList}>
                    <li>Successfully resolved a critical documentation issue on the Lusail Boulevard project, improving reporting accuracy to 90% and eliminating disputed KPI deductions.</li>
                    <li>Implemented a centralized resource management system, improving on-time completion rates from 78% to 94% across all projects.</li>
                    <li>Developed a unified project management methodology and centralized procurement system.</li>
                    <li>Established shared equipment pools, optimizing resource utilization.</li>
                  </ul>
                </div>
                
                {/* Senior Facilities Manager */}
                <div className={styles.experienceCard}>
                  <h3 className={styles.cardTitle}>Senior Facilities Manager</h3>
                  <div className={styles.cardSubtitle}>Elegancia Facilities Management, Qatar | June 2019 – April 2023</div>
                  
                  <div className={styles.cardProject}>Project: Ministry of Interior – Head Quarter and Cyber Security Center (Operational Maintenance)</div>
                  
                  <h4 className={styles.cardHeading}>Responsibilities:</h4>
                  <ul className={styles.cardList}>
                    <li>Led a team of 220 professionals, including an operations manager and engineers, to guarantee seamless maintenance of both hard and soft services.</li>
                    <li>Negotiated and secured project bids and maintenance contracts, cultivating robust relationships with suppliers and subcontractors.</li>
                    <li>Monitored vendor performance to ensure conformity to quality standards and timely, cost-effective service delivery.</li>
                    <li>Assisted in the development of procedures, recruitment, and performance evaluation processes.</li>
                    <li>Coordinated procurement of parts, services, and labor for projects.</li>
                    <li>Implemented a Planned Preventive Maintenance system and ensured all reactive/corrective maintenance activities.</li>
                    <li>Supervised the integration of the CAFAM system and closely followed up on daily activities at the site.</li>
                  </ul>
                  
                  <h4 className={styles.cardHeading}>Key Achievements:</h4>
                  <ul className={styles.cardList}>
                    <li>Achieved three-year contract renewal through exceptional performance and close collaboration with the tendering department.</li>
                    <li>Spearheaded a project that ranked number one in terms of problem-free status and absence of penalties for three consecutive years.</li>
                    <li>Implemented a tiered leadership approach and established daily operational briefings.</li>
                    <li>Integrated a cloud-based CMMS system that increased preventative maintenance compliance from 76% to 98.5% within the first quarter.</li>
                    <li>Established weekly alignment meetings with procurement stakeholders and developed comprehensive documentation.</li>
                  </ul>
                </div>
                
                {/* MEP Construction Manager */}
                <div className={styles.experienceCard}>
                  <h3 className={styles.cardTitle}>MEP Construction Manager (Contract)</h3>
                  <div className={styles.cardSubtitle}>Qatari Diar - Saudi Bin Laden Group (QD-SBG), Qatar | November 2018 – June 2019</div>
                  
                  <div className={styles.cardProject}>Project: Lekhwiya Head Quarter (Value ~ QAR 3 billion)</div>
                  
                  <h4 className={styles.cardHeading}>Responsibilities:</h4>
                  <ul className={styles.cardList}>
                    <li>Led the successful handover of four buildings within a highly accelerated timeline, managing a team of 720.</li>
                    <li>Ensured that all construction activities adhered to relevant laws and regulations.</li>
                    <li>Acted as a key point of communication and coordination for construction scheduling.</li>
                    <li>Utilized expertise in cost estimation and budget management to closely track and optimize costs.</li>
                    <li>Monitored and optimized material and equipment costs throughout the preconstruction and construction phases.</li>
                  </ul>
                  
                  <h4 className={styles.cardHeading}>Key Achievements:</h4>
                  <ul className={styles.cardList}>
                    <li>Spearheaded the MEP completion, transforming progress from 10% to 100% within a 6-month contract period.</li>
                    <li>Established a multi-tiered leadership structure, effectively managing a team of 720 personnel across 5 buildings and a storage facility.</li>
                    <li>Implemented safety-conscious strategies that reduced safety incidents by 45% and improved team retention by 28%.</li>
                  </ul>
                </div>
                
                {/* Operations and Maintenance Manager */}
                <div className={styles.experienceCard}>
                  <h3 className={styles.cardTitle}>Operations and Maintenance Manager</h3>
                  <div className={styles.cardSubtitle}>Al Jabor Realty / Swimming Pools & SPAs, Qatar | October 2016 – November 2018</div>
                  
                  <h4 className={styles.cardHeading}>Responsibilities:</h4>
                  <ul className={styles.cardList}>
                    <li>Utilized analytical and managerial skills to identify and address areas of budget inefficiency.</li>
                    <li>Managed all facility operations and maintenance.</li>
                    <li>Developed and managed a comprehensive facilities operating budget.</li>
                    <li>Directed and inspected facilities for compliance with regulatory guidelines.</li>
                  </ul>
                  
                  <h4 className={styles.cardHeading}>Key Achievements:</h4>
                  <ul className={styles.cardList}>
                    <li>Addressed budget inefficiencies by conducting detailed cost-benefit analyses and implementing zero-based budgeting.</li>
                    <li>Implemented personnel changes that reduced payroll expenses by 18% while increasing productivity by 22%.</li>
                    <li>Improved departmental NPS scores by 15 points through process optimization.</li>
                    <li>Developed a multi-tiered budget tracking system and customized financial dashboards.</li>
                    <li>Generated over 1M QAR in annual cost savings through strategic contract restructuring.</li>
                  </ul>
                </div>
                
                {/* Project Manager - MEP and Instrumentation */}
                <div className={styles.experienceCard}>
                  <h3 className={styles.cardTitle}>Project Manager - MEP and Instrumentation</h3>
                  <div className={styles.cardSubtitle}>Roots Energy and Engineering Services – Tadmur, Qatar | December 2013 – September 2016</div>
                  
                  <h4 className={styles.cardHeading}>Projects:</h4>
                  <ul className={styles.cardList}>
                    <li>EPIC For Replacement of Variable Speed Drive Systems and Soft Starter Units at Production Stations and RG Plant in Dukhan Field (Value ~QAR 30 million).</li>
                    <li>EPIC Of Three Instrument PCRS At NGL-3, Gas Operations, Mesaieed (Value ~ QAR 50 million).</li>
                    <li>Replacement of existing pilot wire protection relays with new Numerical Protection Relays at QP Refinery, Mesaieed (Value ~QAR 25 million).</li>
                  </ul>
                  
                  <h4 className={styles.cardHeading}>Responsibilities:</h4>
                  <ul className={styles.cardList}>
                    <li>Managed the MEP aspects of 3 projects simultaneously.</li>
                    <li>Ensured projects on-time handover with no delays after leading pre-commissioning and commissioning.</li>
                    <li>Reviewed, approved, and implemented all engineering documents, reports, standards, and drawings.</li>
                    <li>Arranged and scheduled technical and managerial meetings with clients and internal meetings.</li>
                    <li>Prepared and maintained yearly project cash flow.</li>
                    <li>Led preparation and submittal of preliminary documentation.</li>
                    <li>Reviewed pre-qualifications and proposals of subcontractors.</li>
                    <li>Prepared the Techno-commercial Bid Evaluation.</li>
                  </ul>
                </div>
                
                {/* Senior Electrical Engineer */}
                <div className={styles.experienceCard}>
                  <h3 className={styles.cardTitle}>Senior Electrical Engineer (Oil & Gas)</h3>
                  <div className={styles.cardSubtitle}>Roots Energy and Engineering Services – Tadmur, Qatar | April 2011 – November 2013</div>
                  
                  <h4 className={styles.cardHeading}>Projects:</h4>
                  <ul className={styles.cardList}>
                    <li>Head Works Construction for Doha South RPS and Associated Pipelines – Pumping Station (Electrical, Mechanical and Instrumentation) (~ QAR 40 million).</li>
                    <li>EPIC Of Automation Upgrade at Jaleha Degassing Station, Umm Bab and Diab (~QAR 80 million).</li>
                  </ul>
                  
                  <h4 className={styles.cardHeading}>Responsibilities:</h4>
                  <ul className={styles.cardList}>
                    <li>Completed 90% of submittals within 3 months.</li>
                    <li>Upgraded plant systems.</li>
                    <li>Managed the night shift during shutdown.</li>
                    <li>Design: Electrical Load Calculation, Adequacy Check Report, Cable Sizing, Lighting Calculation, Single Line Diagram, Earthing, lightening, etc.</li>
                    <li>Engineering, Procurement, Installation and Commissioning of Electrical Systems.</li>
                  </ul>
                </div>
                
                {/* Facility Manager */}
                <div className={styles.experienceCard}>
                  <h3 className={styles.cardTitle}>Facility Manager</h3>
                  <div className={styles.cardSubtitle}>Allied Maintenance Co. Ltd., Eastern Province, Saudi Arabia | September 2007 – May 2011</div>
                  
                  <h4 className={styles.cardHeading}>Responsibilities:</h4>
                  <ul className={styles.cardList}>
                    <li>Responsible for preventive and corrective maintenance.</li>
                    <li>Followed-up with facilities maintenance services and checked on all safety equipment.</li>
                    <li>Assessed buildings and facilities in terms of the status and priority of maintenance needs.</li>
                    <li>Provided leadership and guidance to the facilities team and supporting staff.</li>
                    <li>Ensured safety and quality of all equipment and materials required for execution of maintenance works and contracts.</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
          
          {/* Projects Analysis */}
          <section 
            id="projects-section" 
            className={`${styles.section} ${activeSection === 'projects' ? styles.visible : styles.hidden}`}
          >
            <h2 className={styles.sectionTitleWithMargin}>Projects Portfolio Analysis</h2>
            
            <div className={styles.projectsContainer}>
              <div className={styles.skillsHalf}>
                <h3 className={styles.subheading}>Current Projects Value Distribution (Millions QAR)</h3>
                <div className={styles.chartContainer}>
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={projectValueData}
                        cx="50%"
                        cy="50%"
                        labelLine={true}
                        label={(props: any) => `${props.name} ${props.value}`}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                      >
                        {projectValueData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip formatter={(value) => String(value)} />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </div>
              
              <div className={styles.skillsHalf}>
                <h3 className={styles.subheading}>Project Management Metrics</h3>
                <div className={styles.projectMetricsContainer}>
                  <div className={styles.progressBarContainer}>
                    <div className={styles.progressBarLabel}>
                      <span className={styles.progressBarText}>Current Projects Completion Rate</span>
                      <span className={styles.progressBarText}>94%</span>
                    </div>
                    <div className={styles.progressBarBg}>
                      <div className={`${styles.progressBar} ${styles.completionRate}`}></div>
                    </div>
                  </div>
                  
                  <div className={styles.progressBarContainer}>
                    <div className={styles.progressBarLabel}>
                      <span className={styles.progressBarText}>Budget Adherence</span>
                      <span className={styles.progressBarText}>97%</span>
                    </div>
                    <div className={styles.progressBarBg}>
                      <div className={`${styles.progressBar} ${styles.budgetAdherence}`}></div>
                    </div>
                  </div>
                  
                  <div className={styles.progressBarContainer}>
                    <div className={styles.progressBarLabel}>
                      <span className={styles.progressBarText}>Client Satisfaction</span>
                      <span className={styles.progressBarText}>92%</span>
                    </div>
                    <div className={styles.progressBarBg}>
                      <div className={`${styles.progressBar} ${styles.clientSatisfaction}`}></div>
                    </div>
                  </div>
                  
                  <div className={styles.progressBarContainer}>
                    <div className={styles.progressBarLabel}>
                      <span className={styles.progressBarText}>Team Efficiency</span>
                      <span className={styles.progressBarText}>89%</span>
                    </div>
                    <div className={styles.progressBarBg}>
                      <div className={`${styles.progressBar} ${styles.teamEfficiency}`}></div>
                    </div>
                  </div>
                  
                  <div className={styles.progressBarContainer}>
                    <div className={styles.progressBarLabel}>
                      <span className={styles.progressBarText}>Resource Optimization</span>
                      <span className={styles.progressBarText}>91%</span>
                    </div>
                    <div className={styles.progressBarBg}>
                      <div className={`${styles.progressBar} ${styles.resourceOptimization}`}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className={styles.highlightsContainer}>
              <h3 className={styles.subheading}>Key Project Highlights</h3>
              <div className={styles.highlightCards}>
                <div className={`${styles.highlightCard} ${styles.highlightCardLehkwiya}`}>
                  <h4 className={styles.highlightCardTitleLehkwiya}>Lekhwiya Head Quarter</h4>
                  <p className={styles.highlightCardText}>Transformed MEP progress from 10% to 100% within a 6-month contract period, managing a team of 720 personnel.</p>
                </div>
                
                <div className={`${styles.highlightCard} ${styles.highlightCardMOI}`}>
                  <h4 className={styles.highlightCardTitleMOI}>Ministry of Interior</h4>
                  <p className={styles.highlightCardText}>Maintained #1 ranking for 3 years with no penalties, increased maintenance compliance from 76% to 98.5%.</p>
                </div>
                
                <div className={`${styles.highlightCard} ${styles.highlightCardJabor}`}>
                  <h4 className={styles.highlightCardTitleJabor}>Al Jabor Realty</h4>
                  <p className={styles.highlightCardText}>Generated over 1M QAR in annual cost savings through strategic contract restructuring and process optimization.</p>
                </div>
                
                <div className={`${styles.highlightCard} ${styles.highlightCardLusail}`}>
                  <h4 className={styles.highlightCardTitleLusail}>Lusail Boulevard</h4>
                  <p className={styles.highlightCardText}>Improved reporting accuracy to 90%, eliminating disputed KPI deductions and strengthening client trust.</p>
                </div>
              </div>
            </div>
          </section>
          
          {/* Education & Certifications */}
          <section 
            id="education-section" 
            className={`${styles.section} ${activeSection === 'education' ? styles.visible : styles.hidden}`}
          >
            <h2 className={styles.sectionTitleWithMargin}>Education & Certifications</h2>
            
            <div className={styles.educationGrid}>
              <div className={styles.educationCard}>
                <div className={styles.educationHeader}>
                  <div>
                    <h3 className={styles.educationTitle}>Master of Science</h3>
                    <p className={styles.educationField}>Electrical and Electronics Engineering</p>
                    <p className={styles.educationInstitution}>Lebanese University, Lebanon</p>
                  </div>
                  <div className={styles.educationYear}>2007</div>
                </div>
                <div className={styles.educationAdditional}>
                  <p className={styles.educationAdditionalText}>Graduation Project R&D, Yverdon-Les-Bains, Switzerland</p>
                </div>
              </div>
              
              <div className={styles.educationCard}>
                <div className={styles.educationHeader}>
                  <div>
                    <h3 className={styles.educationTitle}>Certified Electrical Engineer</h3>
                    <p className={styles.educationField}>Urban Planning and Development Authority (UPDA)</p>
                    <p className={styles.educationInstitution}>Qatar</p>
                  </div>
                  <div className={styles.educationYear}>2018 - Present</div>
                </div>
              </div>
              
              <div className={styles.educationCard}>
                <div className={styles.educationHeader}>
                  <div>
                    <h3 className={styles.educationTitle}>GSAS Certification</h3>
                    <p className={styles.educationField}>The Global Sustainability Assessment System</p>
                    <p className={styles.educationInstitution}>Operations</p>
                  </div>
                  <div className={styles.educationYear}>2019 - Present</div>
                </div>
              </div>
              
              <div className={styles.educationCard}>
                <div className={styles.educationHeader}>
                  <div>
                    <h3 className={styles.educationTitle}>Professional Membership</h3>
                    <p className={styles.educationField}>Order of Engineers of Tripoli</p>
                    <p className={styles.educationInstitution}>Lebanon</p>
                  </div>
                  <div className={styles.educationYear}>2012 - Present</div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
      
      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <p>© {new Date().getFullYear()} Yahya Chaker - Projects Director Portfolio</p>
        </div>
      </footer>
      
      {/* Print Component */}
      <PrintComponent sections={printSections} />
    </div>
  );
};

export default ExecutivePortfolio;