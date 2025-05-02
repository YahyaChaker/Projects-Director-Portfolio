import React, { useState } from 'react';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';
import * as LucideIcons from 'lucide-react';
import styles from '../styles/ExecutivePortfolio.module.css';
import PrintStyles from '../styles/PrintStyles.module.css';
import PrintComponent from './print-component';

// Import data from our centralized data file
import {
  personalInfo,
  navigationItems,
  printSections,
  summaryContent,
  skillsContent,
  projectsContent,
  experienceData,
  detailedExperienceContent,
  educationContent,
  footerContent
} from '../data/portfoliodata';

// Type assertion for Lucide icons
const {
  MapPin,
  Phone,
  Mail,
  Linkedin,
  ArrowUpRight,
  ChevronDown,
  ChevronRight,
} = LucideIcons as any;

const handlePrint = () => {
  setTimeout(() => {
    window.print();
  }, 500);
};

const ExecutivePortfolio: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('summary');
  // Add a new state to track expanded experience items
  const [expandedExperiences, setExpandedExperiences] = useState<string[]>([]);
  const [expandAll, setExpandAll] = useState<boolean>(false);

  // Toggle individual experience
  const toggleExperience = (experience: string): void => {
    if (expandedExperiences.includes(experience)) {
      setExpandedExperiences(expandedExperiences.filter(exp => exp !== experience));
    } else {
      setExpandedExperiences([...expandedExperiences, experience]);
    }
  };

  // Toggle expand all
  const toggleExpandAll = (): void => {
    if (expandAll) {
      // Collapse all
      setExpandedExperiences([]);
    } else {
      // Expand all
      setExpandedExperiences(experienceData.map(job => job.title));
    }
    setExpandAll(!expandAll);
  };
 
  return (
    <div className={`${styles.portfolioContainer} ${PrintStyles.portfolioContainer}`}>
      {/* Header */}
      <header className={`${styles.header} ${PrintStyles.header}`}>
        <div className={`${styles.headerContainer} ${PrintStyles.headerContainer}`}>
          <div className={`${styles.headerContent} ${PrintStyles.headerContent}`}>
            <div className={`${styles.headerTextContent} ${PrintStyles.headerTextContent}`}>
              <div className={`${styles.headerImageTitle} ${PrintStyles.headerImageTitle}`}>
                <div className={styles.profileImageContainer}>
                  <img 
                    src={personalInfo.profileImage}
                    alt={personalInfo.name} 
                    className={`${styles.profileImage} ${PrintStyles.profileImage}`}
                  />
                </div>
                
                <div>
                  <h1 className={`${styles.title} ${PrintStyles.title}`}>{personalInfo.name}</h1>
                  <h2 className={`${styles.subtitle} ${PrintStyles.subtitle}`}>{personalInfo.title}</h2>
                </div>
              </div>

              <div className={`${styles.contactInfo} ${PrintStyles.contactInfo}`}>
                <div className={`${styles.contactItem} ${PrintStyles.contactItem}`}>
                  <MapPin className={`${styles.lucideIcon} ${PrintStyles.lucideIcon}`} size={18} />
                  <span>{personalInfo.location}</span>
                </div>
                <div className={`${styles.contactItem} ${PrintStyles.contactItem}`}>
                  <Phone className={`${styles.lucideIcon} ${PrintStyles.lucideIcon}`} size={18} />
                  <span>{personalInfo.phone}</span>
                </div>
                <div className={`${styles.contactItem} ${PrintStyles.contactItem}`}>
                  <Mail className={`${styles.lucideIcon} ${PrintStyles.lucideIcon}`} size={18} />
                  <span>{personalInfo.email}</span>
                </div>
                <div className={`${styles.contactItem} ${PrintStyles.contactItem}`}>
                  <Linkedin className={`${styles.lucideIcon} ${PrintStyles.lucideIcon}`} size={18} />
                  <a href={personalInfo.linkedin.url} target="_blank" rel="noopener noreferrer" className={styles.linkedinLink}>
                    {personalInfo.linkedin.text} <ArrowUpRight className={`${styles.lucideIcon} ${PrintStyles.lucideIcon}`} size={14} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      
      {/* Navigation */}
      <nav className={`${styles.nav} ${PrintStyles.nav}`}>
        <div className={styles.navContainer}>
          <div className={styles.navItems}>
            {navigationItems.map((item) => {
              // Get the icon component dynamically based on the icon name
              const IconComponent = (LucideIcons as any)[item.icon];
              
              return (
                <button 
                  key={item.id}
                  onClick={() => setActiveSection(item.id)}
                  className={`${styles.navButton} ${activeSection === item.id ? styles.navButtonActive : ''}`}
                >
                  <IconComponent className={styles.lucideIcon} size={16} />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className={styles.main}>
        <div className={styles.mainContainer}>
          {/* Executive Summary */}
          <section 
            id="summary-section" 
            className={`${styles.summarySection} ${PrintStyles.summarySection} ${activeSection === 'summary' ? styles.visible : styles.hidden}`}
          >
            {/* Hero Section */}
            <div className={`${styles.summaryHero} ${PrintStyles.summaryHero}`}>
              <div className={`${styles.summaryHeroPattern} ${PrintStyles.summaryHeroPattern}`}></div>
              <div className={`${styles.summaryHeroContent} ${PrintStyles.summaryHeroContent}`}>
                <div className={`${styles.summaryHeadline} ${PrintStyles.summaryHeadline}`}>
                  {summaryContent.hero.headline}
                </div>
                <h2 className={`${styles.summaryTitle} ${PrintStyles.summaryTitle}`}>
                  {summaryContent.hero.title}
                </h2>
                <p className={`${styles.summaryTagline} ${PrintStyles.summaryTagline}`}>
                  {summaryContent.hero.tagline}
                </p>
                
                {/* Key Statistics */}
                <div className={`${styles.summaryHighlights} ${PrintStyles.summaryHighlights}`}>
                  {summaryContent.highlights.map((highlight, index) => (
                    <div key={index} className={`${styles.summaryHighlight} ${PrintStyles.summaryHighlight}`}>
                      <div className={`${styles.highlightNumber} ${PrintStyles.highlightNumber}`}>{highlight.number}</div>
                      <div className={`${styles.highlightLabel} ${PrintStyles.highlightLabel}`}>{highlight.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          
            {/* Main Content */}
            <div className={`${styles.summaryContent} ${PrintStyles.summaryContent}`}>
              {summaryContent.paragraphs.map((paragraph, index) => (
                <p 
                  key={index} 
                  className={`${styles.summaryText} ${PrintStyles.summaryText}`}
                  dangerouslySetInnerHTML={{ __html: paragraph }}
                />
              ))}
              
              {/* Executive Performance Metrics */}
              <div className={`${styles.metricsSection} ${PrintStyles.metricsSection}`}>
                <div className={`${styles.metricsSectionHeader} ${PrintStyles.metricsSectionHeader}`}>
                  <div className={`${styles.metricsHeading} ${PrintStyles.metricsHeading}`}>
                    {summaryContent.metricsSection.heading}
                  </div>
                  <div className={`${styles.metricsSubheading} ${PrintStyles.metricsSubheading}`}>
                    {summaryContent.metricsSection.subheading}
                  </div>
                </div>
                
                <div className={`${styles.metricsGrid} ${PrintStyles.metricsGrid}`}>
  {summaryContent.metricsSection.metrics.map((metric, index) => {
    const initialValueClassName = `metricBarBefore${metric.initialValue.replace('.', '_')}`;
    const currentValueClassName = `metricBarAfter${metric.currentValue.replace('.', '_')}`;
    
    // Parse only the current value for the progress bar
    const currentValue = metric.currentValue.includes('%') 
      ? parseFloat(metric.currentValue) 
      : parseFloat(metric.currentValue) * 100;
    
    return (
      <div 
        key={index} 
        className={`${styles.metricCard} ${styles[metric.className]} ${PrintStyles.metricCard} ${PrintStyles[metric.className]}`}
      >
        <div className={`${styles.metricTitle} ${PrintStyles.metricTitle}`}>{metric.title}</div>
        <div className={`${styles.metricValue} ${PrintStyles.metricValue}`}>{metric.value}</div>
        <div 
          className={`${styles.metricChange} ${metric.positive ? styles.positiveChange : styles.negativeChange} ${PrintStyles.metricChange} ${metric.positive ? PrintStyles.positiveChange : PrintStyles.negativeChange}`}
        >
          {metric.change}
        </div>
        
        <div className={`${styles.metricBar} ${PrintStyles.metricBar}`}>
          <div 
            className={`${styles.metricBarBefore} ${styles[initialValueClassName]} ${PrintStyles.metricBarBefore} ${PrintStyles[initialValueClassName]}`}
          ></div>
          <div 
            className={`${styles.metricBarAfter} ${styles[currentValueClassName]} ${PrintStyles.metricBarAfter} ${PrintStyles[currentValueClassName]}`}
            style={{ '--percent': `${currentValue}%` } as React.CSSProperties}
          ></div>
        </div>
        
        <div className={`${styles.metricComparison} ${PrintStyles.metricComparison}`}>
          <span className={`${styles.metricLabel} ${PrintStyles.metricLabel}`}>Initial: {metric.initialValue}</span>
          <span className={`${styles.metricLabel} ${PrintStyles.metricLabel}`}>Current: {metric.currentValue}</span>
        </div>
      </div>
    );
  })}
</div>
                <div className={`${styles.metricsSummary} ${PrintStyles.metricsSummary}`}>
                  <div className={`${styles.summaryBox} ${PrintStyles.summaryBox}`}>
                    <div className={`${styles.summaryText} ${PrintStyles.summaryText}`}>
                      {summaryContent.metricsSection.summary}
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Key Achievements */}
              <div className={`${styles.summaryAchievements} ${PrintStyles.summaryAchievements}`}>
                {summaryContent.keyProjectsHighlights.projects.map((project, index) => (
                  <div 
                    key={index} 
                    className={`${styles.achievement} ${PrintStyles.achievement}`}
                  >
                    <div className={`${styles.achievementIcon} ${PrintStyles.achievementIcon}`}>
                      {/* Convert string to icon component or use fallback */}
                      {(() => {
                        // Check if project has an icon property
                        if ('icon' in project && project.icon) {
                          const IconComponent = (LucideIcons as any)[project.icon as string];
                          return <IconComponent className={styles.lucideIcon} size={20} />;
                        }
                        // Fallback to a default icon
                        return <LucideIcons.Award className={styles.lucideIcon} size={20} />;
                      })()}
                    </div>
                    <div className={`${styles.achievementTitle} ${PrintStyles.achievementTitle}`}>
                      {project.title}
                    </div>
                    <div className={`${styles.achievementText} ${PrintStyles.achievementText}`}>
                      {project.text}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
          
          {/* Skills & Strengths */}
          <section 
            id="skills-section" 
            className={`${styles.section} ${activeSection === 'skills' ? styles.visible : styles.hidden}`}
          >
            <h2 className={styles.sectionTitleWithMargin}>{skillsContent.title}</h2>
            
            <div className={styles.skillsList}>
              {skillsContent.skills.map((skill, index) => {
                const IconComponent = (LucideIcons as any)[skill.icon];
                
                return (
                  <div key={index} className={styles.skillCard}>
                    <div className={`${styles.skillCardHeader} ${styles[skill.className]}`}>
                      <div className={`${styles.iconContainer} ${styles[skill.iconClassName]}`}>
                        <IconComponent className={styles.lucideIcon} size={20} />
                      </div>
                      <h3 className={`${styles.skillCardTitle} ${styles[`skillCardTitle${skill.title}`]}`}>{skill.title}</h3>
                    </div>
                    
                    <div className={styles.skillCardContent}>
                      <ul className={styles.skillCardList}>
                        {skill.items.map((item, itemIndex) => (
                          <li key={itemIndex}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Projects Analysis */}
          <section 
            id="projects-section" 
            className={`${styles.section} ${PrintStyles.section} ${activeSection === 'projects' ? styles.visible : styles.hidden}`}
          >
            <h2 className={`${styles.sectionTitleWithMargin} ${PrintStyles.sectionTitle}`}>{projectsContent.title}</h2>
            
            <div className={`${styles.projectsAnalysisContainer} ${PrintStyles.projectsAnalysisContainer}`}>
              <div className={`${styles.projectColumn} ${PrintStyles.projectColumn}`}>
                <h3 className={`${styles.subheading} ${PrintStyles.subheading}`}>Current Projects Value Distribution (Millions QAR)</h3>
                <div className={`${styles.chartContainer} ${PrintStyles.chartContainer}`}>
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={projectsContent.projectValueData}
                        cx="50%"
                        cy="50%"
                        labelLine={true}
                        label={(props: any) => `${props.name} ${props.value}`}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                      >
                        {projectsContent.projectValueData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={projectsContent.chartColors[index % projectsContent.chartColors.length]} />
                        ))}
                      </Pie>
                      <Tooltip formatter={(value) => String(value)} />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </div>

              <div className={`${styles.projectColumn} ${PrintStyles.projectColumn}`}>
                <h3 className={`${styles.subheading} ${PrintStyles.subheading}`}>{projectsContent.projectMetrics.heading}</h3>
                <div className={`${styles.projectMetricsContainer} ${PrintStyles.projectMetricsContainer}`}>
                  {projectsContent.projectMetrics.metrics.map((metric, index) => (
                    <div key={index} className={`${styles.progressBarContainer} ${PrintStyles.progressBarContainer}`}>
                      <div className={`${styles.progressBarLabel} ${PrintStyles.progressBarLabel}`}>
                        <span className={`${styles.progressBarText} ${PrintStyles.progressBarText}`}>{metric.label}</span>
                        <span className={`${styles.progressBarText} ${PrintStyles.progressBarValue}`}>{metric.value}</span>
                      </div>
                      <div className={`${styles.progressBarBg} ${PrintStyles.progressBarBg}`}>
                        <div className={`${styles.progressBar} ${styles[metric.className]} ${PrintStyles.progressBar}`}></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className={`${styles.highlightsContainer} ${PrintStyles.highlightsContainer}`}>
              <h3 className={`${styles.subheading} ${PrintStyles.subheading}`}>{projectsContent.highlights.heading}</h3>
              <div className={`${styles.highlightCards} ${PrintStyles.highlightCards}`}>
                {projectsContent.highlights.projects.map((project, index) => (
                  <div key={index} className={`${styles.highlightCard} ${styles[project.className]} ${PrintStyles.highlightCard}`}>
                    <h4 className={`${styles[`highlightCardTitle${project.className.slice(12)}`]} ${PrintStyles.highlightCardTitle}`}>{project.title}</h4>
                    <p className={`${styles.highlightCardText} ${PrintStyles.highlightCardText}`}>{project.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
          
          {/* Professional Experience */}
          <section 
            id="experience-section" 
            className={`${styles.section} ${PrintStyles.section} ${activeSection === 'experience' ? styles.visible : styles.hidden}`}
          >
            <h2 className={`${styles.sectionTitleWithMargin} ${PrintStyles.sectionTitleWithMargin}`}>Professional Experience</h2>
            
            <div className={styles.expandAllContainer}>
              <label className={styles.expandAllLabel}>
                <input 
                  type="checkbox" 
                  checked={expandAll} 
                  onChange={toggleExpandAll} 
                  className={styles.expandAllCheckbox}
                />
                <span className={styles.checkboxText}>Expand All</span>
              </label>
            </div>
            
            <div className={`${styles.timelineContainer} ${PrintStyles.timelineContainer}`}>
              {experienceData.map((job, index) => (
                <div key={index} className={`${styles.experienceItem} ${PrintStyles.experienceItem}`}>
                  <div 
                    className={`${styles.timelineHeader} ${PrintStyles.timelineHeader} ${expandedExperiences.includes(job.title) ? styles.active : ''}`}
                    onClick={() => toggleExperience(job.title)}
                  >
                    <div className={`${styles.timelineMarker} ${PrintStyles.timelineMarker}`}></div>
                    <div className={`${styles.timelineContent} ${PrintStyles.timelineContent}`}>
                      <div className={`${styles.timelineYear} ${PrintStyles.timelineYear}`}>{job.year}</div>
                      <div className={`${styles.timelineTitle} ${PrintStyles.timelineTitle}`}>{job.title}</div>
                      <div className={`${styles.timelineCompanyLocation} ${PrintStyles.timelineCompanyLocation}`}>
                        <div className={`${styles.timelineCompany} ${PrintStyles.timelineCompany}`}>{job.company}</div>
                        <div className={`${styles.timelineLocation} ${PrintStyles.timelineLocation}`}>
                          <MapPin className={`${styles.lucideIcon} ${styles.locationIcon} ${PrintStyles.lucideIcon}`} size={16} />
                          {job.location}
                        </div>  
                      </div>  
                      
                      {(() => {
                        // Use type assertion instead of direct access
                        const jobDetails = (detailedExperienceContent as Record<string, any>)[job.title];
                        if (!jobDetails) return null;
                        
                        return (
                          <div className={`${styles.experienceCard} ${PrintStyles.experienceCard}`}>
                            
                            {/* Project or projects section if present */}
                            {jobDetails.project && (
                              <div className={styles.cardProject}>{jobDetails.project}</div>
                            )}
                            
                            {jobDetails.projects && (
                              <>
                                
                                <div className={`${styles.projectsContainer} ${PrintStyles.projectsContainer}`}>
                                  {jobDetails.projects.map((project: any, projectIndex: number) => (
                                    <div key={projectIndex} className={`${styles.projectBox} ${PrintStyles.projectBox}`}>
                                      <div className={`${styles.projectName} ${PrintStyles.projectName}`}>{project.name}</div>
                                      <div className={`${styles.projectValue} ${PrintStyles.projectValue}`}>{project.value}</div>
                                    </div>
                                  ))}
                                </div>
                              </>
                            )}
                            

                          </div>
                        );
                      })()}
                    
                    </div>
                    {expandedExperiences.includes(job.title) ? 
                      <ChevronDown className={`${styles.lucideIcon} ${styles.expandIcon} ${PrintStyles.lucideIcon}`} size={16} /> : 
                      <ChevronRight className={`${styles.lucideIcon} ${styles.expandIcon} ${PrintStyles.lucideIcon}`} size={16} />
                    }
                  </div>
                  
                  {/* Conditionally render the experience details */}
                  {expandedExperiences.includes(job.title) && (
                    <div className={`${styles.experienceDetails} ${PrintStyles.experienceDetails}`}>
                      {(() => {
                        // Use type assertion instead of direct access
                        const jobDetails = (detailedExperienceContent as Record<string, any>)[job.title];
                        if (!jobDetails) return null;
                        
                        return (
                          <div className={`${styles.experienceCard} ${PrintStyles.experienceCard}`}>
                            <h3 className={`${styles.cardTitle} ${PrintStyles.cardTitle}`}>{jobDetails.title}</h3>
                            <div className={`${styles.cardSubtitle} ${PrintStyles.cardSubtitle}`}>{jobDetails.subtitle}</div>
                            
                            {/* Project or projects section if present */}
                            {jobDetails.project && (
                              <div className={styles.cardProject}>{jobDetails.project}</div>
                            )}
                            
                            {jobDetails.projects && (
                              <>
                                <h4 className={`${styles.cardHeading} ${PrintStyles.cardHeading}`}>Projects</h4>
                                <div className={`${styles.projectsContainer} ${PrintStyles.projectsContainer}`}>
                                  {jobDetails.projects.map((project: any, projectIndex: number) => (
                                    <div key={projectIndex} className={`${styles.projectBox} ${PrintStyles.projectBox}`}>
                                      <div className={`${styles.projectName} ${PrintStyles.projectName}`}>{project.name}</div>
                                      <div className={`${styles.projectValue} ${PrintStyles.projectValue}`}>{project.value}</div>
                                    </div>
                                  ))}
                                </div>
                              </>
                            )}
                            
                            {/* Responsibilities */}
                            {jobDetails.responsibilities && (
                              <>
                                <h4 className={`${styles.cardHeading} ${PrintStyles.cardHeading}`}>Responsibilities</h4>
                                <ul className={`${styles.cardList} ${PrintStyles.cardList}`}>
                                  {jobDetails.responsibilities.map((item: string, respIndex: number) => (
                                    <li key={respIndex}>{item}</li>
                                  ))}
                                </ul>
                              </>
                            )}
                            
                            {/* Achievements if present */}
                            {jobDetails.achievements && (
                              <>
                                <h4 className={`${styles.cardHeading} ${PrintStyles.cardHeading}`}>Key Achievements</h4>
                                <ul className={`${styles.cardList} ${PrintStyles.cardList}`}>
                                  {jobDetails.achievements.map((item: string, achieveIndex: number) => (
                                    <li key={achieveIndex} className={`${styles.keyAchievement} ${PrintStyles.keyAchievement}`}>{item}</li>
                                  ))}
                                </ul>
                              </>
                            )}
                          </div>
                        );
                      })()}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>     
          
          {/* Education & Certifications */}
          <section 
            id="education-section" 
            className={`${styles.section} ${PrintStyles.section} ${activeSection === 'education' ? styles.visible : styles.hidden}`}
          >
            <h2 className={`${styles.sectionTitleWithMargin} ${PrintStyles.sectionTitleWithMargin}`}>{educationContent.title}</h2>
            
            <div className={`${styles.educationGrid} ${PrintStyles.educationGrid}`}>
              {educationContent.items.map((item, index) => (
                <div key={index} className={`${styles.educationCard} ${PrintStyles.educationCard}`}>
                  <div className={`${styles.educationHeader} ${PrintStyles.educationHeader}`}>
                    <div>
                      <h3 className={`${styles.educationTitle} ${PrintStyles.educationTitle}`}>{item.title}</h3>
                      <p className={`${styles.educationField} ${PrintStyles.educationField}`}>{item.field}</p>
                      <p className={`${styles.educationInstitution} ${PrintStyles.educationInstitution}`}>{item.institution}</p>
                    </div>
                    <div className={`${styles.educationYear} ${PrintStyles.educationYear}`}>{item.year}</div>
                  </div>
                  {item.additional && (
                    <div className={`${styles.educationAdditional} ${PrintStyles.educationAdditional}`}>
                      <p className={`${styles.educationAdditionalText} ${PrintStyles.educationAdditionalText}`}>{item.additional}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
      
      {/* Footer */}
      <footer className={`${styles.footer} ${PrintStyles.footer}`}>
        <div className={styles.footerContent}>
          <p>{footerContent.copyright}</p>
        </div>
      </footer>
      
      {/* Print Component */}
      <PrintComponent sections={printSections} />
    </div>
  );
};

export default ExecutivePortfolio;