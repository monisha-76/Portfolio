import React from 'react'
import { useState } from 'react';
import { FaClipboardList, FaBlog, FaCalculator,  FaCircle } from "react-icons/fa";
import Skills from './Skills';
import Projects from './Projects';
import Internships from './Internships';


const Portfolio = () => {
  const [skillsVisible, setSkillsVisible] = useState(false);
  const [projectsVisible, setProjectsVisible] = useState(false);
  const [internshipsVisible, setInternshipsVisible] = useState(false);

  const skills = ['HTML' ,'CSS', 'JavaScript' , 'Java', 'C++','Python', 'React']

  const projects = [
    {
        name: "TO-DO-List",
        description: "A task management application to keep track of daily activities.",
        icon: <FaClipboardList style={{ color: "#4CAF50" }} />,
        link: "https://github.com/monisha-76/to_do_list",
    },
    {
        name: "Blog Website",
        description: "A platform for users to create, edit, and share blog posts.",
        icon: <FaBlog style={{ color: "#FF572" }} />,
        link: "https://github.com/monisha-76/blog",
    },
    {
        name: "Calculator",
        description: "A simple yet functional calculator built with React.",
        icon: <FaCalculator style={{ color: "#2196F3" }} />,
        link: "https://github.com/monisha-76/calculator",
    },
    {
        name: "Registration & Login form",
        description: "A secure login and registration form with validation using React.",
        icon: <FaCircle style={{ color: "#795548" }} />,
        link: "https://github.com/monisha-76/Registration-form",
    }
  ]

  const internships = [
    {
      title: 'Frontend Developer Intern',
      company: 'codsoft',
      duration: 'may2024 - june 2024',
      description: 'Worked on enhancing the user interface of the company website using html , css, js.',
    },
    {
        title: 'fullStack Developer Intern',
        company: 'shi#sh',
        duration: 'nov2024 - jan2025',
        description: ' It is a beginner-level professional gaining hands-on experience in both front-end and back-end web development technologies.'
      },
  ]

  return (
    <div className= 'portfolioContainer'>
        <h1> My Portfolio</h1>

        <Skills 
        skills ={skills}
        skillsVisible={skillsVisible}
        />
        <Projects 
        projects ={projects}
        projectsVisible={projectsVisible}
        />
        <Internships 
        internships ={internships}
        internshipsVisible={internshipsVisible}
        />

        <div className='toggleButtons'>
            <button onClick={()=> setSkillsVisible(!skillsVisible)} >
                Toggle Skills
            </button>
            <button onClick={()=> setProjectsVisible(!projectsVisible)} >
                Toggle Projects
            </button>
            <button onClick={()=> setInternshipsVisible(!internshipsVisible)} >
                Toggle Internships 
            </button>
        </div>
    </div>
  )
}




export default Portfolio 