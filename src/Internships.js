import React from 'react'

const Internships = ({internships , internshipsVisible}) => {
  return (
    <section style={styles.section}>
        <h2 style={styles.sectionTitle}>
            Internship Experiences {internshipsVisible ? '▲' : '▼'}
        </h2>
        {internshipsVisible && (
            <div>
                {internships.map((internship , index)=>(
                    <div key = {index} style={styles.experienceCard}>
                        <h3>{internship.title}</h3>
                        <p><strong>{internship.company}</strong></p>
                        <p><em>{internship.duration}</em></p>
                        <p>{internship.description}</p>
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
    experienceCard: {
      backgroundColor: 'gray',
      padding: '20px',
      borderRadius: '8px',
      marginBottom: '20px',
      boxShadow: '0 2px 6px rgba(0, 0, 0, 0.15)',
      transition: 'all 0.3s ease',
    },
  }


export default Internships