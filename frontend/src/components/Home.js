import SpotCard from './SpotCard';
import {useDispatch} from 'react-redux'
import {fetchSpots} from '../store/spots'
function Home () {

    return (
      <div>
        <SpotCard/>
      </div>
    );
  }

  export default Home