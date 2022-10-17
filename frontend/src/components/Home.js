import SpotCard from './SpotCard';
import SpotImages from './SpotImages'
import {useDispatch, useSelector} from 'react-redux'
import {useEffect} from 'react'
import {fetchSpots} from '../store/spots'

function Home () {
  const dispatch = useDispatch()


  const spotz = useSelector((state) => {
    console.log(state)
  })

    useEffect(() => {
      dispatch(fetchSpots())
    }, [])


    return (
      <div>
        <SpotCard/>
      </div>
    );
  }

  export default Home