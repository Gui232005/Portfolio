import { useState } from 'react'
import myPhoto from './assets/image.png'
import './App.css'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <button>
        {/*Falta fazer as rotas*/}
        go to profile screen
      </button>
    </>
  )

  /*
  PROFILE SCREEN  
    return (
      <>
        <div className="header">
        </div>
        <div>
          <img src={myPhoto} className="imageProfile" width="135" height="150" alt="My Photo" />
          <h1>Guilherme Silva</h1>
          <p>Student of Software Engineering</p>
        </div>
        <div>
          <a href="https://github.com/Gui232005/Portfolio">
            <i className="bi bi-github" style={{ fontSize: '2.5rem', padding: '10px' }}></i>
          </a>
          <a href="https://www.linkedin.com/in/guilherme-silva-estgv/" target="_blank" rel="noopener noreferrer">
            <i className="bi bi-linkedin" style={{ fontSize: '2.5rem', padding: '10px' }}></i>
          </a>
          <a href="mailto:guisilva.fial2005@gmail.com" target="_blank" rel="noopener noreferrer">
            <i className="bi bi-envelope-at-fill" style={{ fontSize: '2.5rem', padding: '10px' }}></i>
          </a>
        </div>
      </>
    )
  */
}
export default App
