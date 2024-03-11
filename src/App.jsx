import { useState } from 'react'
import './App.css'
import Header from './Header/Header'
import Projects from './Projects/Projects'
import Skills from './Skills/Skills'
import Footer from './Footer/Footer'


function App() {

  return (
    <>
      <Header/>
      <div className="vh-100 d-flex align-items-center">
        <div className="container">
            <div className="row">
              <div className="col-8">
                <h1>Hi, I'm Seid Redi.</h1>
                <p>My first Turtle program in python ignited my interest and passion for programming. I went on to learn C++ 
                  which was challenging but introduced me to fascinating topics such as algorithms, data structures, and code 
                  efficiency. My curiosity for Java led me to android development and created an event searching application. 
                  I earned a Bachelor's degree in Computer Science and I am currently an Emerging Digital Academy student 
                  enhancing my web development skills using java script, react, node js, and postgres. In my free time I like to 
                  play soccer which was my passion growing up. I played in a soccer youth team in Zambia and had dreams of going 
                  pro. It helps me have an active lifestyle, make friends, be a team player, and mostly have fun. 
                </p>
                
              </div>
              <div className="col-4">
                  <img src="src/assets/profile_pic_2.jpg" alt="" height={300} />
              </div>
            </div>
        </div>
      </div>
      <Projects/>
      <Skills/>
      <Footer/>
    </>
  )
}

export default App
