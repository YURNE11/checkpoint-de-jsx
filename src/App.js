import React from 'react'
import sharingan from './sharingan.jpg';
import amazon from './amazon.png';

function App() {
  return (
    <div className='App'>
      <div style={{border:"solid 1px black",maxWidth:"100vw"}}>

        <h1 class="title red">Mes Différents Articles</h1>

        <br />

        <img  height="300" width="450" src={sharingan} />
        <img  height="300" width="450" src={amazon} />

        <br />

        <img height="300" width="450" src="rinnegan.png" />
        <img height="300" width="450" src="ciel.jpg" />

      </div>

      <video width="320" height="240" controls>

      <source src="myVideo.mp4" type="video/mp4" />

      </video>
    </div>
  )
}

export default App