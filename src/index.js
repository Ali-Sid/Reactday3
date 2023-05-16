//importing the react and react-dom package

import React from 'react';
import { createRoot } from 'react-dom/client';
import AliSid from './images/AliSid.jpeg'
import frontend from './images/frontend.png'

// const headerStyles = {
// backgroundColor: '#61DBFB',
// fontFamily: 'Helvetica Neue',
// padding: 25,
// lineHeight: 1.5,
// }

// creating variables to inject data to JSX elements: header
const welcome = 'Welcome to 30 Days Of React'
const title = 'Getting Started React'
const subtitle = 'JavaScript Library'
const author = {
  firstName: 'Ali',
  lastName: 'Siddiqui'
}
const date = 'May 15, 2023'

// JSX element for header
const header = (
  <header>
    <div className='header-wrapper'>
      <h1>{welcome}</h1>
      <h2>{title}</h2>
      <h3>{subtitle}</h3>
      <p>Author: {author.firstName} {author.lastName}</p>
      <small>Date: {date}</small>
    </div>
  </header>
)

const numOne = 3
const numTwo = 10

const result = (
  <p>
    {numOne} + {numTwo} = {numOne + numTwo}
  </p>
)

const yearBorn = 1900
const currentYear = new Date().getFullYear()
const age = currentYear - yearBorn
const personAge = (
  <p>
    {' '}
    {author.firstName} {author.lastName} is {age} years old
  </p>
)



// JSX element for main

const techs = ['HTML', 'CSS', 'JavaScript']
const techsFormatted = (
  <ul>
    {techs.map((tech, index) => (
      <li key={index}>{tech}</li>
    ))}
  </ul>
)

/*The map function iterates over the techsFormatted array and for each element, it executes the arrow function (tech, index) => (...). The JSX elements <li key={index}>{tech}</li> are returned by the arrow function and collected into a new array. The array of JSX elements is then rendered inside the <ul> element.

In this case, the use of parentheses around the JSX elements is necessary because it indicates that the arrow function is returning those elements. The parentheses act as a grouping mechanism and help maintain the desired structure of the code.*/


const user = (
  <div>
    <img src={AliSid} alt='AliSid' />
  </div>
)

const frontendImg = (
  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    <img src={frontend} alt='frontend-technologies' style={{ width: '70%', height: 'auto' }} />
  </div>
)

// styling for subscribe div container
const subsStyles = {
  backgroundColor: '#87EBFA',
  borderRadius: '15px',
  marginBottom: '20px',
  marginTop: '20px',
  width: '97%',
  height: '350px',
  marginLeft: '18px'
}
const subsStylesH1 = {
  textAlign: 'center',
  fontFamily: 'Poppins, sans-serif',
  paddingTop: '20px'
}
const subsStyleP = {
  textAlign: 'center',
  paddingTop: '10px',
  paddingBottom: '10px'
}
const inputStylesDiv = {
  display: 'flex',
  gap: '10px',
  justifyContent: 'center',
  paddingBottom: '20px',
  paddingTop: '20px'
}
const inputStyles = {
  borderRadius: '10px',
  width: '15%',
  height: '40px',
  paddingLeft: '10px',
  border: 'none'
}
const buttonStyles = {
  width: '200px',
  height: '40px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#ff3131',
  color: '#f5f5f5',
  border: 'none',
  borderRadius: '10px',
  cursor: 'pointer'
}
const buttonDivStyles = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  paddingTop: '20px',
  paddingBottom: '50px'
}


// styling 2nd div container in main
const mainDiv2 = {
  paddingLeft: '10%'
}



const subscribe = (
  <div style={subsStyles}>
    <h1 style={subsStylesH1}>SUBSCRIBE</h1>
    <p style={subsStyleP}>Sign up with your email address to receive news and updates.</p>
    <form action="https://formsubmit.co/alisiddiqui465@gmail.com" method="POST">
      <div style={inputStylesDiv}>
        <input type='text' placeholder='First Name' style={inputStyles} name='name' required />
        <input type='text' placeholder='Last Name' style={inputStyles} name='name' />
        <input type='email' placeholder='Email' style={inputStyles} name='email' required />
      </div>
      <div style={buttonDivStyles}>
        <button type='submit' style={buttonStyles}>Subscribe</button>
      </div>
    </form>
  </div>
)


//skills
const skills = ['HTML', 'CSS', 'JS', 'React', 'Redux', 'Node', 'MongoDB', 'SQLite', 'MySQL', 'Bootstrap', 'Tailwind CSS', 'Python', 'Numpy', 'Pandas', 'Data Analysis', 'GraphQL', 'Docker', 'Git']
// const skillsBoxes = skills.map((skill, index) => (
//   <div key={index} className='skills-box'>
//     {skill}
//   </div>
// ))
const Skills = () => {
  return (
    // <div className='skills-container'>{skillsBoxes}</div>
    <div className='skills-container'>
      {skills.map((skill, index) => (
        <div key={index}>
          <div className='grid-item'>{skill}</div>
        </div>
      ))}
    </div>
  )
}


const portfolio = (
  <div style={{ paddingLeft: '10%', paddingRight: '5%' }}>
    <img src={AliSid} alt='AliSid' style={{ borderRadius: '50%' }} />
    <h2><strong>ALI SIDDIQUI</strong></h2>
    <p>Frontend Developer, India</p>
    <h2><strong>SKILLS</strong></h2>
    <Skills />
  </div>
)

// const mainStyles = {
//   backgroundColor: '#F3F0F5'
// }
const main = (
  <main>
    <div className='main-wrapper'>
      <div style={mainDiv2}>
        <p>Prerequisites to get started with {' '} <strong><em>react.js</em></strong>:</p>
        {techsFormatted}
        {result}
        {personAge}
        {user}
        {frontendImg}
      </div>
      {subscribe}
      <div>
        {portfolio}
      </div>
    </div>
  </main>
)


// JSX element for footer

const copyRight = 'Copyright 2023'

// const footerStyles = {
//   backgroundColor: '#61DBFB'
// }
const footer = (
  <footer>
    <div className='footer-wrapper'>
      <p>&copy; {copyRight}</p>
    </div>
  </footer>
)

// a parent JSX element: app
const App = (
  <div className='app'>
    {header}
    {main}
    {footer}
  </div>
)

const rootElement = createRoot(document.getElementById('root'))

// we render the JSX element using the ReactDOM package
// ReactDOM has the render method and the render method takes two argument

rootElement.render(App) // to render this to the browser
// or
//  ReactDOM.render([header, main, footer], rootElement)

/**
 * Code Docs:
 * The provided code demonstrates the usage of React and JSX to create a simple web page. Let's break it down step by step:

Importing the necessary packages:

React is imported from the 'react' package.
createRoot is imported from the 'react-dom/client' package.
The AliSid image is imported.
Setting up data for JSX elements:

Variables like welcome, title, subtitle, author, and date are defined to inject data into the JSX element for the header.
numOne and numTwo are defined to perform a calculation in the JSX element for the result.
yearBorn and currentYear are defined to calculate the age in the JSX element for personAge.
techs is an array containing technology names for the JSX element in techsFormatted.
JSX elements creation:

The header JSX element represents the page header, displaying the provided information.
The result JSX element calculates the sum of numOne and numTwo and displays it.
The personAge JSX element displays the calculated age of the author.
The techsFormatted JSX element renders an unordered list (<ul>) with the technologies mapped from the techs array.
The user JSX element contains an <img> tag with the AliSid image.
The main JSX element represents the main content of the page, displaying the prerequisites, techsFormatted list, result, personAge, and user.
The footer JSX element displays the copyright information.
Combining JSX elements:

The App JSX element is created as a parent container, combining the header, main, and footer elements.
Rendering to the DOM:

createRoot is used to create a root element that corresponds to the 'root' element in the HTML.
The App JSX element is rendered using the render method from createRoot, specifying the root element as the target.
Overall, this code creates a simple web page structure using React and JSX, displaying the header, main content, and footer.
 */