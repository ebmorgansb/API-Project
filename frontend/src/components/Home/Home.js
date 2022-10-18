import SpotCard from '../SpotCard/SpotCard';
import {useDispatch} from 'react-redux'
import {fetchSpots} from '../../store/allSpots'
function Home () {
console.log('hello')
    return (
      <div>
        <SpotCard/>
      </div>
    );
  }

  export default Home