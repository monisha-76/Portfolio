import React from 'react'
import { FaHtml5, FaCss3Alt, FaJsSquare, FaJava, FaPython, FaReact, FaCuttlefish } from 'react-icons/fa'

const Skills = ({skills,skillsVisible}) => {

    const skillIcons = {
        HTML: <FaHtml5 style={{ color: '#e34c26' }} />,
        CSS: <FaCss3Alt style={{ color: '#1572b6' }} />,
        JavaScript: <FaJsSquare style={{ color: '#f7df1e' }} />,
        Java: <FaJava style={{ color: '#007396' }} />,
        Python: <FaPython style={{ color: '#306998' }} />,
        React: <FaReact style={{ color: '#61dafb' }} />,
        'C++': <FaCuttlefish style={{ color: '#00599c' }} />,
      }

  return (
    <section style={styles.section}>
        <h2 style={ styles.sectionTitle}>
            Skills {skillsVisible ? '▲' : '▼'}
        </h2>

        {skillsVisible && (
        <ul style={styles.list}>
          {skills && skills.map((skill, index) => (
            <li key={index} style={styles.listItem}>
                <span style={styles.icon}>{skillIcons[skill]}</span>
              {skill}
            </li>
          ))}
        </ul>
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
    list: {
      listStyleType: 'none',
      paddingLeft: 0,
    },
    listItem: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: '10px',
      fontSize: '18px',
    },
    icon: {
      marginRight: '10px',
    },
  }


export default Skills