import React from 'react'
import moni from"./moni.jpg"

const Home = () => {
  return (
  <main>
    <img 
  src={moni}
  alt="Image"
  style={{
    width: "500px", 
    height: "auto", 
    
    float:"right",
    marginLeft: "20px", 
  }} 
/>

    <div>
        <h1>_______</h1>
        <h1> I'm  Monisha ,<br></br> a Web Developer </h1>
        <h3>As a frontend developer, I specialize in creating intuitive and visually 
            appealing user interfaces using modern web technologies. Passionate about delivering seamless and responsive experiences, 
            I continuously strive to improve both functionality and design.</h3>
    </div>

    <div className='resume'>
        <a href ="/monisha resume.pdf">
            <button className='buttonresume'>Download My Resume</button>
        </a>
    </div>
  </main>
   
  
    

  )
}

export default Home