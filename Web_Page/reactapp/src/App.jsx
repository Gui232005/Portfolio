import { useState } from 'react'
import viteLogo from '/vite.svg'
import cPlusLogo from './assets/cPlus.png'
import flutterLogo from './assets/flutter.png'
import cLogo from './assets/c.png'
import gitHubLogo from './assets/github_logo.png'
import instagramLogo from './assets/instagram.png'
import linkedInLogo from './assets/linkedin.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <img src={viteLogo} className="logo" alt="Vite logo" />
        <p id="name">𝔾𝕦𝕚𝕝𝕙𝕖𝕣𝕞𝕖 𝕊𝕚𝕝𝕧𝕒</p>
      </div>

      <p>
        Hello! I'm Guilherme, a Computer Science student at the Polythecnic Institute of Viseu. I'm passionate about technology and programming, and I'm always eager to learn new things and take on new challenges. Welcome to my portfolio!
      </p>

      <br />
      <hr style={{ border: '1px solid #888' }} />
      <br />


      <h2 style={{ textAlign: 'center', marginTop: '.5em' }}>Programming languages I'm more comfortable with:</h2>

      <div class="row">
        <div class="column">
          <div class="card">
            <p><i class="fa fa-user"></i></p>
            <img src={flutterLogo} className="logoFlutter" alt="Flutter logo" style={{ alignContent: 'center' }} />
          </div>
        </div>

        <div class="column">
          <div class="card">
            <p><i class="fa fa-check"></i></p>
            <img src={cPlusLogo} className="logoCPlus" alt="C++ logo" style={{ alignContent: 'center' }} />
          </div>
        </div>

        <div class="column">
          <div class="card">
            <p><i class="fa fa-smile-o"></i></p>
            <img src={cLogo} className="logoC" alt="C logo" style={{ alignContent: 'center' }} />
          </div>
        </div>
      </div>

      {/*Have a timeline to showcase my projects*/}

      <h2 style={{ textAlign: 'center', marginTop: '4em' }}>My Journey So Far</h2>

      <div class="timeline">
        <div class="container left">
          <div class="content">
            <h2 style={{ color: '#FF9F55' }}>2023</h2>
            <p style={{ color: '#888' }}>Start my computer science course</p>
          </div>
        </div>
        <div className='container right'>
          <div class="content">
            <h2 style={{ color: '#FF9F55' }}>2023</h2>
            <p style={{ color: '#888' }}>Creating my first C project, a management system called "Park your car here".</p>
          </div>
        </div>
        <div className='container left'>
          <div class="content">
            <h2 style={{ color: '#FF9F55' }}>2024</h2>
            <p style={{ color: '#888' }}>Creating my first C++ project, a management system called "Library".</p>
          </div>
        </div>
        <div class="container right">
          <div class="content">
            <h2 style={{ color: '#FF9F55' }}>2025</h2>
            <p style={{ color: '#888' }}>Developing my first mobile application with teammates using Flutter for Softinsa.</p>
          </div>
        </div>
      </div>

      <br />
      <hr style={{ border: '1px solid #888', marginTop: '2em' }} />
      <br />

      <div id="socialMedia">
        <a href="https://github.com/Gui232005" target="_blank" rel="noopener noreferrer">
          <img src={gitHubLogo} className="gitHub" alt="GitHub logo" style={{ alignContent: 'center' }} />
        </a>
        <a href="https://www.instagram.com/guilhermesilva_vb2005/" target="_blank" rel="noopener noreferrer">
          <img src={instagramLogo} className="instagram" alt="Instagram logo" style={{ alignContent: 'center' }} />
        </a>
        <a href="https://www.linkedin.com/in/guilherme-silva-estgv/" target="_blank" rel="noopener noreferrer">
          <img src={linkedInLogo} className="linkedIn" alt="LinkedIn logo" style={{ alignContent: 'center' }} />
        </a>
      </div>

      <footer>
        <p>© 2025 Guilherme Silva. All rights reserved.</p>
      </footer>

    </>
  )
}

export default App
