import './App.css';
import Testimonio from './components/Testimonio';

function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>
        <h1>Here is what our alumni say about freeCodeCamp: </h1>
      </div>
      <Testimonio
        name='Shawn Wang'
        imagen='shawn'
        country='Singapore'
        charge='Software Engineer'
        company='Amazon'
        testimony="It's scary to change careers. I only gained confidence that I could code by working through the hundreds of hours of free lessons on freeCodeCamp. Within a year I had a six-figure job as a Software Engineer. freeCodeCamp changed my life."
      />

      <Testimonio
        name='Sarah Chima'
        imagen='sarah'
        country='Nigeria'
        charge='Software Engineer'
        company='ChatDesk'
        testimony="freeCodeCamp was the gateway to my career as a software developer. The well-structured curriculum took my coding knowledge from a total beginner level to a very confident level. It was everything I needed to land my first dev job at an amazing company."
      />

      <Testimonio
        name='Emma Bostian'
        imagen='emma'
        country='Sweden'
        charge='Software Engineer'
        company='Spotify'
        testimony="I've always struggled with learning JavaScript. I've taken many courses but freeCodeCamp's course was the one which stuck. Studying JavaScript as well as data structures and algorithms on freeCodeCamp gave me the skills and confidence I needed to land my dream job as a software engineer at Spotify."
      />
    </div>
  );
}

export default App;
