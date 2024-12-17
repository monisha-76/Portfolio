import React from 'react'
const Projects = ({projects , projectsVisible}) => {
  return (
    <section style={styles.section}>
        <h2 style={styles.sectionTitle}>
            Projects {projectsVisible ? '▲' : '▼' }
        </h2>

        {projectsVisible && (
            <div>
            {projects.map((project,index)=>(
                <div key = {index} style={styles.projectCard}>
                     <div style={styles.projectHeader}>
                     <div style={styles.icon}>{project.icon}</div>
                <h3> {project.name}</h3>
                </div>
                <p>{project.description}</p>
                <a href = {project.link} target='_blank' rel = "noopener noreferrer" style={styles.link}>
                    View project
                </a>
                </div>
            ))}
            </div>
        )}
    </section>
  )
}

const styles = {
    section: {
      backgroundColor: 'pink',
      color: 'black',
      padding: '20px',
      marginBottom: '40px',
      borderRadius: '8px',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    },
    sectionTitle: {
      fontSize: '24px',
      fontWeight: 'bold',
      marginBottom: '20px',
      textAlign: 'left',
    },
    projectCard: {
      backgroundColor: 'gray',
      padding: '20px',
      borderRadius: '8px',
      marginBottom: '20px',
      boxShadow: '0 2px 6px rgba(0, 0, 0, 0.15)',
      transition: 'all 0.3s ease',
    },
    projectHeader: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: '8px',
      fontSize:'25px',
    },
    icon: {
      marginRight: '10px',
    },
    link: {
      color: 'red',
      textDecoration: 'none',
    },
    linkHover: {
      textDecoration: 'underline',
    },
  }




export default Projects