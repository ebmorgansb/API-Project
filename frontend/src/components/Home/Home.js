import SpotCard from '../SpotCard/SpotCard';
import './home.css'
import gitLogo from '../../allImages/github-logo.png';
import inLogo from '../../allImages/in.png';

function Home () {

console.log('hello')
    return (
      <div className='homeDiv'>
        <SpotCard/>
        <footer className='footer'>
          <div>
          An AirBnB clone by Evan Morgan
          </div>
          <div>
          <a  target="_blank" href='https://github.com/ebmorgansb'>
            <img className='gitLogo'  alt='githubLogo' src={gitLogo}></img>
            
          </a>
          <a  target="_blank" href='https://www.linkedin.com/in/evan-morgan-9a2723132/'>
            <img className='inLogo' alt='inLogo' src={inLogo}></img>
          </a>
          </div>
        </footer>
      </div>
    );
  }

  export default Home