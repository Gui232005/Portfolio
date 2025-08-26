import { useState } from 'react'
import viteLogo from '/vite.svg'
import cPlusLogo from './assets/cPlus.png'
import flutterLogo from './assets/flutter.png'
import cLogo from './assets/c.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div id="myFace">
        <img src={viteLogo} className="logo" alt="Vite logo" />
        <p id="name">𝔾𝕦𝕚𝕝𝕙𝕖𝕣𝕞𝕖 𝕊𝕚𝕝𝕧𝕒</p>
      </div>

      <p>
        Hello! I'm Guilherme, a Computer Science student at the Polythecnic of Viseu. I'm passionate about technology and programming, and I'm always eager to learn new things and take on new challenges. Welcome to my portfolio!
      </p>

      {/* here i will add a line to divide two parts */}

      <h2 style={{ textAlign: 'center', marginTop: '7em' }}>Programming languages I'm comfortable with:</h2>

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

    </>
  )
}

export default App
