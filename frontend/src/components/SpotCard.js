import SpotImages from './SpotImages'
import './CompCSS/SpotCard.css'

function SpotCard () {

    // Grabs array of links from slice of state... MAYBE?
    // const spotImageLinks = getSelector()


    return (
      <div className='spotCard'>
        <div className='spotCardUpperText'>
            <div>Spot Location</div>
            <div>Review Value</div>
        </div>
        <div>
            Price
        </div>
        <SpotImages/>
        </div>
    );
  }

  export default SpotCard