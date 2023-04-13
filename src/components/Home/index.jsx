import React, {useState} from 'react';
import { JourneyPicker } from '../JourneyPicker';

export const Home = () => {

  const [journeyResult, setJourneyResult] = useState(null)

  const handleJourneyChange = ( {results} ) => {
    setJourneyResult(results)
    console.log(results)
  };


  return(
    <main>
      <JourneyPicker onJourneyChange={handleJourneyChange} />
      {journeyResult && `Nalezeno spojení s id ${journeyResult.journeyId}.`}
    </main>
)};
