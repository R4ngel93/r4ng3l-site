// Import
import Contact from '../components/Contact'
import Certifications from '../components/Certifications'
import Technologies from '../components/Technologies'
import Projects from '../components/Projects'
import Social from '../components/Social'

// React Typical
import  Typical  from 'react-typical'

// Styles
import '../styles/styles.css';

// Main
function App() {
  return (
    <div className="App">

      <div className='tab_00'>
        <span className='symbol'>
          <Typical 
            steps={[
              5000,'Developer', 
              5000, 'Coder', 
              5000, 'Designer',
              5000, 'Student_forever',
              5000, 'Anime_lover',
              5000, 'Pentester_(wannabe)',
              5000, 'Baller',
              5000, 'Teacher',
              5000
            ]}
            loop={Infinity}
            wrapper='span'
            className='level_00'
          />
          :&#123;
        </span>
      </div>

      <Contact />
      <Certifications />
      <Technologies />      
      <Projects />
      <Social />

      <div className='tab_00'>
        <span className='symbol'>&#125;</span>
      </div>  

    </div>
  );
}

//Export
export default App;
